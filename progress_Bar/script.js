const halfcircles = document.querySelectorAll('.half-circle');
const halfcircleTop = document.querySelector('.half-circle-top');
const progressBarcircle = document.querySelector('.progressBar-circle');

document.addEventListener('scroll', () => {
    const pageviewportHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const scrolledportion = window.pageYOffset;

    const scrollportionDegree = (scrolledportion / (pageHeight - pageviewportHeight)) * 360;

    const scrollPortionpercent = Math.round((scrollportionDegree / 360) * 100);

    progressBarcircle.textContent = `${scrollPortionpercent}%`;

    halfcircles.forEach(el => {
        el.style.transform = `rotate(${scrollportionDegree}deg)`;
    });

    if (scrollportionDegree >= 180) {
        halfcircles[0].style.transform = 'rotate(180deg)';
        halfcircleTop.style.opacity = '0';
    } else {
        halfcircles[0].style.transform = `rotate(${scrollportionDegree}deg)`;
        halfcircleTop.style.opacity = '1';
    }
});
