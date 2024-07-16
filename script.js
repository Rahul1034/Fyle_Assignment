document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.services .box');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showBox(index) {
        boxes.forEach((box, i) => {
            box.style.display = i === index ? 'block' : 'none';
        });
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-slide'));
            showBox(currentIndex);
        });
    });

    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            const hoverImg = box.getAttribute('data-hover-img');
            box.style.backgroundImage = `url(${hoverImg})`;
        });
        box.addEventListener('mouseleave', () => {
            box.style.backgroundImage = '';
        });
    });

    showBox(currentIndex);
});
function changeImage(imageSrc) {
    document.getElementById('project-image').src = imageSrc;
}
