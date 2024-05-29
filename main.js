const element = document.querySelector('.cookiePolicy');
element.style.display = 'none'; true;

window.Tawk_API.onLoad = function () {
    window.Tawk_API.hideWidget();
};


const footerElement = document.querySelector('footer');
if (footerElement) {
    footerElement.remove();
}
