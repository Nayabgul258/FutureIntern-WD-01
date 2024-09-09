const typingAnimationElement = document.getElementById('typing-animation');
const typingTexts = [
    'Front end Developer  ',
    'Software Developer  ',
    'Full Stack Developer  ',
];
function playTypingAnimation(text) {

    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingAnimationElement.textContent += text[i];
        }, i * 200);
    }

    setTimeout(() => {
        typingAnimationElement.textContent = '';
        playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
    }, text.length * 200);
};
playTypingAnimation(typingTexts[0]);


const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contain");

function openTab(tabname) {
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

};


const sideMenu = document.getElementById("sideMenu");
function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}



