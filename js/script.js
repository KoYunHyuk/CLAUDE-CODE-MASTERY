// DOM이 완전히 로드된 후 스크립트 실행
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSmoothScroll();
    initActiveSectionHighlight();
    initThemeToggle();
});

// 모바일 메뉴 토글 기능
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // 햄버거 버튼 클릭 시 메뉴 슬라이드
    menuToggle.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('translate-x-full');
        toggleMenu(isOpen);
    });

    // 모바일 메뉴의 각 링크 클릭 시 메뉴 닫기
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(true);
        });
    });

    // Escape 키로 메뉴 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('translate-x-full')) {
            toggleMenu(true);
        }
    });

    // 메뉴 외부 클릭 시 메뉴 닫기
    document.addEventListener('click', (e) => {
        const isMenuOpen = !mobileMenu.classList.contains('translate-x-full');
        const isClickInsideMenu = mobileMenu.contains(e.target);
        const isClickOnToggle = menuToggle.contains(e.target);

        if (isMenuOpen && !isClickInsideMenu && !isClickOnToggle) {
            toggleMenu(true);
        }
    });

    // 메뉴 토글 헬퍼 함수
    function toggleMenu(shouldClose) {
        if (shouldClose) {
            mobileMenu.classList.add('translate-x-full');
            menuToggle.setAttribute('aria-expanded', 'false');
        } else {
            mobileMenu.classList.remove('translate-x-full');
            menuToggle.setAttribute('aria-expanded', 'true');
        }
    }
}

// 부드러운 스크롤 네비게이션
function initSmoothScroll() {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const href = link.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();

        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// 스크롤 중 활성 섹션 하이라이트 (IntersectionObserver 사용)
function initActiveSectionHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 모든 nav 링크에서 활성 스타일 제거
                navLinks.forEach(link => {
                    link.classList.remove('text-red-600', 'dark:text-red-400', 'font-semibold');
                });

                // 현재 섹션에 해당하는 nav 링크에 활성 스타일 추가
                const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('text-red-600', 'dark:text-red-400', 'font-semibold');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

// 다크모드 토글 기능
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', () => {
        const html = document.documentElement;
        const isDark = html.classList.toggle('dark');

        // localStorage에 사용자 선택 저장
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}
