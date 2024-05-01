
const element = document.querySelector('.cookiePolicy');
element.style.display = 'none'; true;

window.Tawk_API.onLoad = function () {
    window.Tawk_API.hideWidget();
};

// const altBasvuru = document.getElementById('ApplicationBottom');
// altBasvuru.style.display = 'none'; true;

const basvuruButtonu = document.getElementsByClassName('mobilBasvuru');
for (let i = 0; i < basvuruButtonu.length; i++) {
    basvuruButtonu[i].style.display = 'none';
}

const basvuruYapButtonu = document.getElementById('ApplicationBottom');
if (basvuruYapButtonu) {
    basvuruYapButtonu.remove()
}
const footerElement = document.querySelector('footer');
if (footerElement) {
    footerElement.remove();
}


var navbardakiEgitimPortalButtonu = document.querySelector('.nav .btn-primary');
// Remove the button
if (navbardakiEgitimPortalButtonu) {
    navbardakiEgitimPortalButtonu.remove();
}


const girisSlider = document.querySelector('.anaSlider.flickity-enabled.is-draggable');
if (girisSlider) {
    girisSlider.remove();
}

let basvuruSorgula = document.querySelectorAll('.nav.navbar-nav li');
basvuruSorgula.forEach(item => {
    if (item.textContent.includes('Başvuru Sorgulama')) {
        item.remove();
    }
});