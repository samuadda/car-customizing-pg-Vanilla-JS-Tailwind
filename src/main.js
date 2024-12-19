// top Bar
const topBar = document.getElementById('topBar')

const handleTopBarScroll = () => { 
    const atTop = window.scrollY === 0

    topBar.classList.toggle('visible-bar', atTop);
    topBar.classList.toggle('hidden-bar', !atTop);
}

window.addEventListener('scroll', () => requestAnimationFrame(handleTopBarScroll));

// color options
const exteriorColorOptions = document.getElementById("exterior-buttons");
const interiorColorOptions = document.getElementById("interior-buttons");
const exteriorImage = document.getElementById("exterior-image");
const interiorImage = document.getElementById("interior-image");

const handleColorSelection = (event) => {
    let button;
    if(event.target.tagName === 'IMG') {
        button = event.target.closest('button');
    } else if(event.target.tagName === 'BUTTON') {
        button = event.target;
    }

    if (button) {
        const buttons = event.currentTarget.querySelectorAll('button');
        buttons.forEach((btn) => btn.classList.remove('btn-selected'));
        button.classList.add('btn-selected');
    }
}

exteriorColorOptions.addEventListener('click', handleColorSelection)
interiorColorOptions.addEventListener('click', handleColorSelection)

//image mapping
const exteriorImages = {
    "stealth-grey": "./assets/model-y-stealth-grey.jpg",
    "pearl-white": "./assets/model-y-pearl-white.jpg",
    "deep-blue-metallic": "./assets/deep-blue-metallic.jpg",
    "solid-black": "./assets/model-y-solid-black.jpg",
    "ultra-red": "./assets/model-y-ultra-red.jpg",
    "quicksilver": "./assets/model-y-quicksilver.jpg",
};

const interiorImages = {
    'dark': './assets/model-y-interior-dark.jpg',
    'light': './assets/model-y-interior-light.jpg',
}