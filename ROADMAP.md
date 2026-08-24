# 개발자 웹 이력서 개발 로드맵

## 📋 프로젝트 개요
HTML, CSS, JavaScript, TailwindCSS를 활용한 반응형 개발자 웹 이력서 제작

---

## 🎯 Phase 1: 프로젝트 설정 및 기본 구조

### 1.1 프로젝트 초기화
- [ ] 프로젝트 디렉토리 구조 설정
  - `index.html` - 메인 페이지
  - `css/styles.css` - 커스텀 스타일
  - `js/script.js` - 인터랙션 로직
  - `assets/` - 이미지, 아이콘 등

### 1.2 HTML 기본 구조 작성
- [ ] HTML 템플릿 작성
- [ ] 시맨틱 마크업 적용
- [ ] TailwindCSS CDN 또는 빌드 설정

### 1.3 필수 메타 데이터
- [ ] 문자 인코딩 설정 (UTF-8)
- [ ] 반응형 뷰포트 설정
- [ ] 페이지 제목 및 메타 설명 추가

---

## 🎨 Phase 2: 레이아웃 및 스타일링

### 2.1 헤더/네비게이션 섹션
- [ ] 상단 네비게이션 바 디자인
- [ ] 이름, 직책, 간단한 소개 배치
- [ ] 프로필 이미지 추가 (선택사항)
- [ ] 연락처 정보 (이메일, 폰) 표시

### 2.2 주요 섹션 구성
- [ ] **소개 (About)** - 자기소개 및 경력 요약
- [ ] **기술 스택 (Skills)** - 보유 기술 카드형 표시
- [ ] **경력 (Experience)** - 근무 경력 타임라인
- [ ] **프로젝트 (Projects)** - 주요 프로젝트 포트폴리오
- [ ] **교육 (Education)** - 학력 정보
- [ ] **연락처 (Contact)** - 이메일, 링크드인, GitHub 등

### 2.3 TailwindCSS 스타일링
- [ ] 컬러 스키마 정의
- [ ] 폰트 설정
- [ ] 반응형 그리드 레이아웃
- [ ] 카드 컴포넌트 스타일링
- [ ] 버튼 및 링크 스타일

### 2.4 다크 모드 지원
- [ ] 다크/라이트 모드 토글 버튼
- [ ] 색상 변수 관리
- [ ] 사용자 선호도 저장

---

## ✨ Phase 3: 기능 및 인터랙션

### 3.1 JavaScript 기능 구현
- [ ] 평활한 스크롤 네비게이션
- [ ] 섹션 하이라이트 (활성 섹션 표시)
- [ ] 스킬 카드 호버 효과
- [ ] 프로젝트 카드 인터랙션

### 3.2 다크 모드 토글
- [ ] 토글 버튼 기능 구현
- [ ] LocalStorage를 통한 사용자 선호도 저장
- [ ] 페이지 로드 시 저장된 설정 복원

### 3.3 동적 콘텐츠 (선택사항)
- [ ] 스크롤 애니메이션
- [ ] Fade-in 효과
- [ ] 타이핑 애니메이션 (직책)

### 3.4 반응형 메뉴
- [ ] 모바일 해머거 메뉴 구현
- [ ] 메뉴 아이콘 토글
- [ ] 모바일 네비게이션 슬라이드

---

## 📱 Phase 4: 반응형 디자인

### 4.1 모바일 대응 (< 768px)
- [ ] 모바일 메뉴 구현
- [ ] 텍스트 크기 최적화
- [ ] 간격 및 패딩 조정
- [ ] 싱글 컬럼 레이아웃

### 4.2 태블릿 대응 (768px ~ 1024px)
- [ ] 2단 레이아웃 적용
- [ ] 카드 크기 조정
- [ ] 네비게이션 최적화

### 4.3 데스크톱 대응 (> 1024px)
- [ ] 멀티 컬럼 레이아웃
- [ ] 풀 네비게이션 표시
- [ ] 호버 효과 추가

### 4.4 반응형 테스트
- [ ] Chrome DevTools로 각 화면 크기 테스트
- [ ] 실제 모바일 기기 테스트
- [ ] 다양한 브라우저 호환성 검사

---

## 🚀 Phase 5: 최적화 및 배포

### 5.1 성능 최적화
- [ ] 이미지 최적화 (WebP 형식, 압축)
- [ ] CSS 파일 최소화
- [ ] JavaScript 코드 최적화
- [ ] 페이지 로딩 속도 측정 (Google Lighthouse)

### 5.2 SEO 최적화
- [ ] Open Graph 메타 태그
- [ ] 구조화된 데이터 (Schema.org)
- [ ] Sitemap 작성 (선택사항)
- [ ] robots.txt 설정 (선택사항)

### 5.3 접근성 개선
- [ ] ARIA 레이블 추가
- [ ] 키보드 네비게이션 지원
- [ ] 색상 대비 개선
- [ ] 대체 텍스트 추가

### 5.4 배포
- [ ] GitHub Pages 배포 또는
- [ ] Netlify/Vercel 배포 또는
- [ ] 자체 호스팅
- [ ] 커스텀 도메인 연결 (선택사항)

### 5.5 최종 검수
- [ ] 링크 확인
- [ ] 폼 기능 테스트
- [ ] 모든 이미지 로드 확인
- [ ] 외부 링크 검증

---

## 📊 예상 이력서 콘텐츠 구조

### 헤더
```
[프로필 이미지] 
이름: 김개발
직책: Full-Stack Developer
한 줄 소개: 웹 기술을 사랑하는 개발자
```

### 소개
```
안녕하세요! 3년 경력의 풀스택 개발자입니다.
React, Node.js, 데이터베이스 설계에 경험이 있으며,
사용자 중심의 웹 애플리케이션 개발을 선호합니다.
```

### 기술 스택
```
- Frontend: HTML5, CSS3, JavaScript, React, TailwindCSS
- Backend: Node.js, Express, Python
- Database: MySQL, MongoDB
- Tools: Git, Docker, AWS
```

### 경력
```
1. Senior Developer | ABC Company (2023 - 현재)
   - 프로젝트 설명
   - 주요 성과

2. Developer | XYZ Company (2021 - 2023)
   - 프로젝트 설명
   - 주요 성과
```

### 프로젝트
```
1. 프로젝트명 | 2023
   - 기술스택: React, Node.js
   - 설명: ...
   - GitHub/링크

2. 프로젝트명 | 2022
   - ...
```

### 교육
```
- 학사 학위 | 000 대학교 (2020)
- 기술 자격증 (선택사항)
```

### 연락처
```
📧 Email: your.email@example.com
💼 LinkedIn: linkedin.com/in/yourprofile
🐙 GitHub: github.com/yourprofile
🌐 Blog: yourblog.com
```

---

## 📝 주요 파일 목록

```
portfolio/
├── index.html          # 메인 페이지
├── css/
│   └── styles.css     # 커스텀 스타일
├── js/
│   └── script.js      # 인터랙션 로직
└── assets/
    ├── images/        # 프로필 이미지 등
    └── icons/         # 기술 스택 아이콘
```

---

## ⏱️ 예상 개발 기간
- Phase 1: 기본 설정 - 2-3시간
- Phase 2: 레이아웃 및 스타일링 - 4-6시간
- Phase 3: 기능 및 인터랙션 - 3-4시간
- Phase 4: 반응형 디자인 - 3-4시간
- Phase 5: 최적화 및 배포 - 2-3시간

**총 예상 시간: 14-20시간**

---

## 🎓 참고 자료
- [TailwindCSS 공식 문서](https://tailwindcss.com/)
- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## ✅ 완료 체크리스트
프로젝트 진행 시 위 항목들을 차례대로 체크하면서 개발하세요!
