
function generateStars() {
    const solarSyst = document.querySelector('.solar-syst');
    if (!solarSyst) return;

    const pseudo = document.createElement('div');
    pseudo.className = 'solar-syst-stars';

    const starsCount = 600;
    const stars = [];

    for (let i = 0; i < starsCount; i++) {
        const x = Math.random() * 1800;
        const y = Math.random() * 1800;
        const opacity = Math.random() * 0.99 + 0.001;
        stars.push(`${x}px ${y}px 0 0px rgba(255, 255, 255, ${opacity.toFixed(3)})`);
    }

    for (let i = 0; i < starsCount; i++) {
        const x = Math.random() * 1800;
        const y = Math.random() * 1800;
        const opacity = Math.random() * 0.99 + 0.001;
        stars.push(`${-x}px ${y}px 0 0px rgba(255, 255, 255, ${opacity.toFixed(3)})`);
    }

    pseudo.style.position = 'absolute';
    pseudo.style.height = '2px';
    pseudo.style.width = '2px';
    pseudo.style.top = '-2px';
    pseudo.style.background = 'white';
    pseudo.style.boxShadow = stars.join(', ');

    solarSyst.prepend(pseudo);
}

function generateAsteroids() {
    const asteroidsBelt = document.querySelector('.asteroids-belt:before');
    if (!asteroidsBelt) {
        const belt = document.querySelector('.asteroids-belt');
        if (!belt) return;

        const pseudo = document.createElement('div');
        pseudo.className = 'asteroids-belt-pseudo';

        const asteroidsCount = 512;
        const asteroids = [];

        for (let i = 0; i < asteroidsCount; i++) {
            const angle = (Math.random() * Math.PI * 2);
            const distance = 80 + Math.random() * 50;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            const opacity = Math.random() * 0.999 + 0.001;
            asteroids.push(`${x}px ${y}px 0 -104px rgba(255, 255, 255, ${opacity.toFixed(3)})`);
        }

        pseudo.style.position = 'absolute';
        pseudo.style.top = '50%';
        pseudo.style.height = '210px';
        pseudo.style.width = '210px';
        pseudo.style.marginLeft = '-105px';
        pseudo.style.marginTop = '-105px';
        pseudo.style.background = 'transparent';
        pseudo.style.borderRadius = '140px';
        pseudo.style.boxShadow = asteroids.join(', ');

        belt.appendChild(pseudo);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    generateStars();
    generateAsteroids();
});


document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('ul.solarsystem a').forEach(function (a) {
        try { a.removeAttribute('href'); } catch (e) { }
        a.setAttribute('aria-disabled', 'true');
        a.tabIndex = -1;
        a.addEventListener('click', function (ev) { ev.preventDefault(); });
    });
});