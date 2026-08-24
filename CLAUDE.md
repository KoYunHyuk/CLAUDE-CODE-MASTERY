# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소의 코드를 작업할 때 참고하는 가이드입니다.

---

## 📌 프로젝트 개요

**프로젝트명**: 개발자 웹 이력서 (Developer Web Resume)

**목표**: HTML, CSS, JavaScript, TailwindCSS를 사용하여 반응형 개발자 포트폴리오 웹사이트 구축

**기술 스택**:
- Frontend: HTML5, CSS3, JavaScript (ES6+)
- 스타일링: TailwindCSS
- 배포: GitHub Pages 또는 정적 호스팅

---

## 🌐 언어 및 커뮤니케이션 규칙

**기본 응답 언어**: 한국어

**코드 주석**: 한국어로 작성 (주요 로직 및 복잡한 부분)

**커밋 메시지**: 한국어로 작성 (형식: `feat: 기능명`, `fix: 버그명`)

**문서화**: 한국어로 작성 (README.md, ROADMAP.md, 이슈, PR 설명 등)

**변수명/함수명**: 영어 (JavaScript/HTML 코드 표준 준수)

---

## 📂 프로젝트 구조

```
.
├── index.html                 # 메인 이력서 페이지
├── css/
│   └── styles.css            # 커스텀 CSS (TailwindCSS 보완)
├── js/
│   └── script.js             # 인터랙션 및 동적 기능
├── assets/
│   ├── images/               # 프로필 이미지, 프로젝트 이미지
│   └── icons/                # 기술 스택 아이콘
├── ROADMAP.md                # 개발 로드맵 및 체크리스트
├── CLAUDE.md                 # Claude Code 가이드 (현재 파일)
└── .claude/
    └── settings.local.json   # Claude Code 로컬 설정
```

---

## 🏗️ 아키텍처 및 설계 원칙

### 페이지 구조
- **단일 페이지 애플리케이션 (SPA)**: index.html 하나의 파일로 모든 콘텐츠 제공
- **섹션 기반 네비게이션**: 각 섹션(About, Skills, Experience, Projects 등)은 고유한 ID를 가짐
- **부드러운 스크롤**: JavaScript를 통한 섹션 간 내부 링크 네비게이션

### 스타일링 전략
- **TailwindCSS**: 주요 스타일링은 TailwindCSS의 유틸리티 클래스 사용
- **커스텀 CSS**: `css/styles.css`에서 Tailwind만으로 표현 불가능한 고급 스타일(애니메이션, 그라데이션 등) 정의
- **다크 모드**: `data-theme` 속성을 통한 테마 전환 (light/dark)

### JavaScript 기능
- **비침습적 설계**: 기본 구조는 HTML만으로도 동작하도록 설계
- **점진적 개선**: JavaScript로 사용자 경험 향상 (애니메이션, 인터랙션)
- **LocalStorage**: 사용자의 테마 선택 저장

---

## 🚀 개발 시작하기

### 1. 프로젝트 설정
```bash
# 프로젝트 디렉토리 진입
cd /Users/koyunhyuk/Study/CLAUDE-CODE-MASTERY

# 필요한 디렉토리 생성
mkdir -p css js assets/images assets/icons
```

### 2. TailwindCSS 설정 (선택)
- **CDN 방식** (빠른 시작): HTML의 `<head>`에 CDN 링크 추가
- **빌드 방식** (프로덕션 권장): Node.js와 npm을 사용하여 Tailwind 설치 및 빌드

```html
<!-- CDN 링크 예 -->
<script src="https://cdn.tailwindcss.com"></script>
```

### 3. 로컬 개발 서버 실행
```bash
# 간단한 HTTP 서버 (Python 3)
python3 -m http.server 8000

# 또는 Node.js http-server 설치 후 사용
npx http-server -p 8000
```

브라우저에서 `http://localhost:8000` 접속

---

## 📋 개발 워크플로우

### 개발 단계별 가이드

**ROADMAP.md 참고**: 프로젝트의 상세한 개발 로드맵은 `ROADMAP.md` 파일을 참고하세요.

1. **Phase 1 - 기본 구조**: HTML 템플릿 및 디렉토리 구조 설정
2. **Phase 2 - 스타일링**: TailwindCSS를 활용한 레이아웃 및 디자인
3. **Phase 3 - 기능**: JavaScript로 인터랙션 추가
4. **Phase 4 - 반응형**: 각 브레이크포인트에서 테스트
5. **Phase 5 - 배포**: 최적화 및 배포 준비

### 코드 작성 규칙

#### HTML
- 시맨틱 마크업 사용 (`<header>`, `<main>`, `<section>`, `<footer>`)
- 섹션마다 고유한 `id` 속성 부여
- 접근성을 고려한 `aria-label` 등 추가

#### CSS/TailwindCSS
- 기본은 Tailwind 유틸리티 클래스 사용
- 필요시 `css/styles.css`에서 커스텀 스타일 추가
- 마법의 숫자(magic number) 피하기, 변수 활용

#### JavaScript
- 모듈식 함수 구성
- 이벤트 리스너는 DOM이 로드된 후 등록
- 성능을 고려한 이벤트 위임 (event delegation) 사용

```javascript
// 예: 부드러운 스크롤 네비게이션
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href');
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
  });
});
```

---

## ✅ 테스트 및 검수

### 기능 테스트
- 각 섹션 네비게이션 동작 확인
- 다크/라이트 모드 전환 테스트
- 모바일 메뉴 열기/닫기 테스트

### 반응형 테스트
- Chrome DevTools 사용 (`F12` → 기기 에뮬레이션)
- 테스트 화면 크기: 320px, 768px, 1024px, 1440px
- 실제 모바일 기기에서 테스트 (권장)

### 브라우저 호환성
- Chrome/Edge (최신)
- Firefox (최신)
- Safari (최신)

### 성능 측정
```bash
# Google Lighthouse 사용 (Chrome DevTools 내장)
# DevTools > Lighthouse > Generate report
```

---

## 📤 배포 가이드

### 배포 옵션

1. **GitHub Pages**
   ```bash
   git push origin main
   # 저장소 설정에서 GitHub Pages 활성화 (main 브랜치)
   ```

2. **Netlify** (드래그 앤 드롭 배포)
   - https://app.netlify.com 접속
   - 프로젝트 폴더 드래그

3. **Vercel**
   - https://vercel.com 접속
   - GitHub 연결 후 자동 배포

### 배포 전 체크리스트
- [ ] 모든 이미지 로드 확인
- [ ] 외부 링크 동작 확인
- [ ] 다크/라이트 모드 동작 확인
- [ ] 모바일 반응형 테스트 완료
- [ ] Lighthouse 스코어 확인 (90 이상 권장)

---

## 🔧 주요 개발 팁

### TailwindCSS 주요 클래스
```html
<!-- 반응형 그리드 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<!-- 카드 컴포넌트 -->
<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">

<!-- 버튼 -->
<button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
```

### JavaScript 팁
- `DOMContentLoaded` 이벤트를 활용한 초기화
- 성능: `requestAnimationFrame` 사용으로 부드러운 애니메이션
- 접근성: 키보드 네비게이션 지원 (`tabindex`, `Enter`/`Space` 키)

### 디버깅
- 브라우저 콘솔 활용 (`console.log()`)
- DevTools Network 탭에서 리소스 로딩 확인
- DevTools Performance 탭에서 성능 병목 분석

---

## 📚 참고 자료

- [ROADMAP.md](./ROADMAP.md) - 상세 개발 로드맵
- [TailwindCSS 공식 문서](https://tailwindcss.com/docs)
- [MDN - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Web Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 💡 추가 사항

- 이력서 콘텐츠는 `ROADMAP.md`의 **예상 이력서 콘텐츠 구조** 섹션 참고
- 질문이나 개선사항은 ROADMAP.md를 함께 업데이트하세요
- 각 commit 메시지는 한국어로 작성하되, 무엇을 했는지 명확히 기록하세요
