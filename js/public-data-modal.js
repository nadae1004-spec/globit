// Public Data Usage Guide Modal Functions

// 모달 열기
function openPublicDataModal() {
    const modal = document.querySelector('.public-data-modal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // 스크롤 방지
    }
}

// 모달 닫기
function closePublicDataModal() {
    const modal = document.querySelector('.public-data-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // 스크롤 복원
    }
}

// 공공데이터 이용안내 모달 초기화
function initializePublicDataModal() {
    // 공공데이터 이용안내 링크 클릭 이벤트
    const publicDataLinks = document.querySelectorAll('.public-data-link');
    publicDataLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openPublicDataModal();
        });
    });

    // 닫기 버튼 클릭 이벤트
    const closeBtn = document.querySelector('.public-data-modal__close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closePublicDataModal();
        });
    }

    // 모달 배경 클릭 시 닫기
    const modal = document.querySelector('.public-data-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            // 모달 배경(public-data-modal)을 클릭했을 때만 닫기
            if (e.target === modal) {
                closePublicDataModal();
            }
        });
    }

    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.querySelector('.public-data-modal');
            if (modal && modal.classList.contains('show')) {
                closePublicDataModal();
            }
        }
    });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 푸터가 로드된 후 모달 초기화
    setTimeout(() => {
        initializePublicDataModal();
    }, 100);
});

// 동적으로 로드된 컴포넌트를 위한 재초기화
function reinitializePublicDataModal() {
    initializePublicDataModal();
}

