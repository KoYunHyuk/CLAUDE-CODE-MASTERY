# 이력서 웹사이트 모던/다크 리디자인

## Context

현재 `index.html`은 기능적으로는 완성되어 있으나(다크모드 토글, 반응형, 스크롤 하이라이트 등) 시각적으로는 Tailwind 기본 팔레트(`blue-*`, `gray-*`)를 그대로 쓴 "부트스트랩st" 느낌의 디자인이다. 사용자가 첨부한 참고 이미지는 다크 배경 + 레드/앰버 포인트 컬러 + 큰 타이포 + 섬세한 그리드 텍스처를 사용하는 세련된 다크 포트폴리오 스타일이다.

사용자 확답:
- **다크 모드를 기본 테마로** (첫 방문 시 다크로 시작, 토글로 라이트 전환 가능)
- **포인트 컬러는 레드/앰버 계열로 전면 교체** (현재 blue 계열 폐기)
- **히어로는 프로필 사진 없이 텍스트 중심 미니멀 구성 유지**, 대신 배경 텍스처(그리드/그라디언트)로 참고 이미지의 볼륨감을 재현

목표는 기존 섹션 구조·ID·JS 훅(`nav-link`, `mobile-nav-link`, `#theme-toggle`, `#menu-toggle`, IntersectionObserver 로직)은 그대로 재사용하면서, 컬러 토큰·타이포 스케일·간격·카드 스타일을 하나의 일관된 디자인 시스템으로 재작성하는 것이다. `js/script.js`의 로직 변경은 다크 기본값 처리 한 곳 외에는 불필요하다.

## 디자인 시스템

### 컬러 토큰 (Tailwind 커스텀 config 확장)
`tailwind.config.js`가 현재 비어있으므로(또는 기본) `<script>tailwind.config = {...}</script>` 인라인 설정에 다음을 추가:
- `accent`: 500=`#ef4444`(red-500 근접), 600=`#dc2626`, 400=`#f87171` — 실제로는 Tailwind 기본 `red`/`amber` 팔레트를 그대로 accent로 사용해도 무방. 강조 그라디언트는 `from-red-500 to-amber-500`.
- 다크 배경: `gray-900`/`black` 대신 커스텀 `neutral-950`(`#0a0a0a`) 계열 사용 — Tailwind 기본 `neutral-950`, `neutral-900`, `neutral-800`으로 대체 가능하므로 별도 config 불필요, 기존 `gray-*` 클래스를 `neutral-*`(다크 파트)로 교체하는 방식 채택.
- 라이트 모드는 기존 `white`/`gray-50` 유지하되 accent만 blue→red/amber로 교체.

### 다크 기본값 처리
`index.html`의 초기화 스크립트(현재 9번째 줄, `head` 최상단)를:
```js
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  // 명시적으로 라이트를 선택한 경우만 유지
} else {
  document.documentElement.classList.add('dark');
}
```
로 변경 — 시스템 설정(`prefers-color-scheme`) 분기 제거하고 다크를 디폴트로 강제, 사용자가 라이트를 명시적으로 고른 경우만 예외.

### 타이포 스케일 통일
- 섹션 제목(`h2`): 전 섹션 `text-3xl md:text-4xl font-bold` → `text-4xl md:text-5xl font-bold tracking-tight`로 통일, 앞에 작은 라벨(kicker) 추가 패턴 도입 (예: `<span class="text-sm font-semibold text-red-500 uppercase tracking-widest">Skills</span>`) — 참고 이미지의 세련된 위계감 재현.
- 히어로 `h1`: `text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight`, 일부 단어를 `<span class="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">`로 강조 (참고 이미지의 bold 강조 단어 패턴 차용).
- Body 텍스트는 `text-neutral-400`(다크) / `text-gray-600`(라이트)로 통일.

### 간격 일관성
- 모든 `<section>`: `py-16 md:py-24` → `py-20 md:py-28`로 통일(hero 포함, 현재 hero만 다른 값 없음 — 실제로는 이미 대부분 동일하므로 편차 나는 곳만 맞춤).
- 카드 padding: `p-6`/`p-8` 혼재 → `p-6 md:p-8`로 통일.
- 카드 grid gap: `gap-4`/`gap-6`/`gap-8` 혼재 → 카드 그리드는 `gap-6`, 섹션 내부 큰 블록은 `gap-8`로 규칙화.
- `max-w-6xl` 컨테이너는 유지(일관되게 이미 쓰이고 있음).

### 카드/보더 스타일 (참고 이미지의 은은한 라인 재현)
공통 카드 클래스 패턴:
```
bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800
rounded-xl md:rounded-2xl p-6 md:p-8
hover:border-red-500/50 dark:hover:border-red-500/50 hover:-translate-y-1
transition-all duration-300
```
- shadow 의존 축소, border+hover glow 중심으로 전환 (다크에서 shadow는 잘 안 보이므로).
- 배지(`span` skill pill 등)는 `bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20`처럼 반투명 톤온톤으로 교체 (현재 `bg-blue-100 dark:bg-blue-900` 방식 폐기 — 다크에서 채도 과함).

### 히어로 섹션 재구성
- 배경: 순수 CSS/Tailwind로 그리드 텍스처 재현 — `css/styles.css`에 `.hero-grid` 클래스 추가 (`background-image: linear-gradient(...) ...` 격자선 + radial-gradient로 중앙 red glow), 다크에서만 강하게 보이도록.
- 레이아웃: 아바타(이니셜 원형)는 축소하거나 작은 배지 형태로 유지, 타이틀 크게, CTA 버튼 2개 도입 (예: "프로젝트 보기" primary + "이력서 다운로드" outline) — 참고 이미지의 "Let's Talk" / "Download Resume" 버튼 구성 차용.
- 하단에 기술 스택 로고 바(참고 이미지의 node/redis/next.js 등 스트립) 대신, 기존 Skills 섹션 데이터를 활용한 텍스트 로고 스트립을 히어로 하단에 얇게 추가 (선택적 — 과하면 생략하고 Skills 섹션 카드 강화로 대체 판단은 구현 시 톤 봐가며 결정).

### 섹션별 구체 변경
- **Header**: `bg-white/90 dark:bg-gray-900/90` → `dark:bg-neutral-950/80`, 로고 hover색 blue→red, 활성 nav 링크 색(JS가 `text-blue-600 dark:text-blue-400` 토글) → `text-red-600 dark:text-red-400`로 `js/script.js` 96-98번 줄 클래스명 교체 필요.
- **Hero**: 위 내용대로 재구성. `from-blue-50 to-white dark:from-gray-800 dark:to-gray-900` 그라디언트 → 다크는 `neutral-950`→`neutral-900` + hero-grid 오버레이, 라이트는 `red-50/30`→`white` 은은하게.
- **About**: 카드 배경 `bg-blue-50 dark:bg-gray-800` → 공통 카드 스타일로 교체.
- **Skills**: 카테고리 카드 공통 스타일 적용, pill 색상 카테고리별(blue/green/purple/orange)을 유지하되 다크 톤을 반투명 방식으로 조정(가독성 유지가 목적이라 4색 구분 자체는 남김, 채도만 낮춤).
- **Experience**: `border-l-4 border-blue-500` → `border-l-4 border-red-500`, 날짜 배지 blue→neutral+red 텍스트.
- **Projects**: 카드 공통 스타일, GitHub 버튼 `bg-blue-600 hover:bg-blue-700` → `bg-red-600 hover:bg-red-700` 그라디언트 버튼으로.
- **Social/Contact**: 아이콘 원형 배경의 blue 톤 → red/neutral, GitHub/YouTube/Instagram 고유색(빨강/핑크)은 유지.
- **Footer**: `bg-gray-900 dark:bg-black` → `bg-neutral-950`, "맨 위로" 버튼 blue→red.

### CSS 추가 (`css/styles.css`)
- `.hero-grid` 배경 텍스처 클래스 추가.
- 기존 `fadeInUp` 애니메이션은 유지, 필요시 스크롤 등장 효과에 재사용(범위 밖이면 생략 가능 — 이번 작업은 정적 스타일 리디자인이 핵심이므로 IntersectionObserver 기반 스크롤 애니메이션 추가는 하지 않음, 기존 hover 트랜지션 위주로 마무리).

## 구현 파일
- `index.html` — 전체 컬러/타이포/간격 클래스 교체 (구조·id·시맨틱 태그는 유지)
- `css/styles.css` — `.hero-grid` 텍스처 클래스 추가
- `js/script.js` — 96~98번 줄 활성 nav 링크 클래스(blue→red), 다크 기본값 관련 로직은 `index.html`의 인라인 스크립트에서 처리하므로 `script.js` 자체 로직 변경은 최소화

## 검증
- `python3 -m http.server 8000` 또는 기존 안내된 로컬 서버로 `index.html` 오픈.
- Claude in Chrome으로 페이지 로드 후 스크린샷: (1) 첫 로드 시 다크 모드로 시작하는지, (2) 다크→라이트 토글 동작, (3) 데스크톱(1440px)·태블릿(768px)·모바일(375px) 반응형 확인, (4) 각 섹션 스크롤 시 nav 활성 하이라이트가 red 색상으로 바뀌는지, (5) 모바일 햄버거 메뉴 동작.
- 콘솔 에러 없는지 `read_console_messages`로 확인.
