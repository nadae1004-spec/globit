// Privacy Policy Modal Functions

// 모달 열기
function openPrivacyPolicyModal() {
    const modal = document.querySelector('.privacy-policy-modal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // 스크롤 방지
    }
}

// 모달 닫기
function closePrivacyPolicyModal() {
    const modal = document.querySelector('.privacy-policy-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // 스크롤 복원
    }
}

// 개인정보처리방침 모달 초기화
function initializePrivacyPolicyModal() {
    // 개인정보처리방침 링크 클릭 이벤트
    const privacyLinks = document.querySelectorAll('.privacy-policy-link');
    privacyLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openPrivacyPolicyModal();
        });
    });

    // 닫기 버튼 클릭 이벤트
    const closeBtn = document.querySelector('.privacy-policy-modal__close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closePrivacyPolicyModal();
        });
    }

    // 모달 배경 클릭 시 닫기
    const modal = document.querySelector('.privacy-policy-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            // 모달 배경(privacy-policy-modal)을 클릭했을 때만 닫기
            if (e.target === modal) {
                closePrivacyPolicyModal();
            }
        });
    }

    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.querySelector('.privacy-policy-modal');
            if (modal && modal.classList.contains('show')) {
                closePrivacyPolicyModal();
            }
        }
    });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 푸터가 로드된 후 모달 초기화
    setTimeout(() => {
        initializePrivacyPolicyModal();
    }, 100);
});

// 동적으로 로드된 컴포넌트를 위한 재초기화
function reinitializePrivacyPolicyModal() {
    initializePrivacyPolicyModal();
}

