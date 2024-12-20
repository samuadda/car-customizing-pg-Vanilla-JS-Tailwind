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

        // change exterior image
        if (event.currentTarget === exteriorColorOptions) {
            const color = button.querySelector('img').alt;
            exteriorImage.src = exteriorImages[color];
        }

        // change interior image
        if (event.currentTarget === interiorColorOptions) {
            const color = button.querySelector('img').alt;
            interiorImage.src = interiorImages[color];
        }
    }
}

exteriorColorOptions.addEventListener('click', handleColorSelection)
interiorColorOptions.addEventListener('click', handleColorSelection)

//image mapping
const exteriorImages = {
    "stealth-grey": "./src/assets/model-y-stealth-grey.jpg",
    "pearl-white": "./src/assets/model-y-pearl-white.jpg",
    "deep-blue-metallic": "./src/assets/model-y-deep-blue-metallic.jpg",
    "solid-black": "./src/assets/model-y-solid-black.jpg",
    "ultra-red": "./src/assets/model-y-ultra-red.jpg",
    quicksilver: "./src/assets/model-y-quicksilver.jpg",
};

const interiorImages = {
    dark: "./src/assets/model-y-interior-dark.jpg",
    light: "./src/assets/model-y-interior-light.jpg",
};

// wheels options
const wheelsButtons = document.getElementById("wheels-buttons");

const handleWheelsSelection = (event) => { 
    if (event.target.tagName === 'BUTTON') {
        const buttons = event.currentTarget.querySelectorAll('button');
        buttons.forEach((btn) => btn.classList.remove('bg-gray-700', 'text-white'));
        event.target.classList.add("bg-gray-700", "text-white");

        const selectedWheel = event.target.querySelector("img").id === "performance";
        exteriorImage.src = selectedWheel ? "./src/assets/model-y-stealth-grey-performance.jpg" : "./src/assets/model-y-stealth-grey.jpg";
    }
}

wheelsButtons.addEventListener('click', handleWheelsSelection)