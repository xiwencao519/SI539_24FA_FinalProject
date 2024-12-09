document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const cards = slider.querySelectorAll(".card");
    let currentIndex = 0;

    const showNextCard = () => {
        cards[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % cards.length;
        cards[currentIndex].classList.add("active");
    };

    slider.addEventListener("click", showNextCard);
});
document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    let currentPage = -1;

    function updatePages() {
        pages.forEach((page, index) => {
            if (index <= currentPage) {
                page.style.transform = 'rotateY(-180deg)'; 
            } else {
                page.style.transform = 'rotateY(0deg)'; 
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            updatePages();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentPage >= 0) {
            currentPage--;
            updatePages();
        }
    });

    updatePages(); 
});

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel'); 
    function updateCarousel(carousel) {
        const memes = carousel.querySelectorAll('.meme'); 
        memes.forEach((meme, index) => {
            meme.classList.remove('active');
            if (index === 0) {
                meme.classList.add('active');
                meme.style.transform = `translateX(-20px) scale(1.1)`;
                meme.style.zIndex = 3;
                meme.style.opacity = 1;
            } else {
                const offset = index;
                meme.style.transform = `translateX(${20 * offset}px) scale(${1 - 0.05 * offset})`;
                meme.style.zIndex = 3 - offset;
                meme.style.opacity = 1 - 0.2 * offset;
            }
        });
    }
    carousels.forEach((carousel) => {
        carousel.addEventListener('click', () => {
            const firstMeme = carousel.querySelector('.meme'); 
            carousel.appendChild(firstMeme); 
            updateCarousel(carousel); 
        });
        updateCarousel(carousel); 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const selectionImages = document.querySelectorAll('.selection img'); 
    const carousels = document.querySelectorAll('.carousel'); 
    selectionImages.forEach((img) => {
        img.addEventListener('click', () => {
            const targetId = img.getAttribute('data-target'); 
            carousels.forEach((carousel) => {
                carousel.classList.remove('active');
            });
            const targetCarousel = document.getElementById(targetId);
            if (targetCarousel) {
                targetCarousel.classList.add('active');
            }
        });
    });
});
