
const element = document.querySelector('.cookiePolicy');
element.style.display = 'none'; true;

window.Tawk_API.onLoad = function () {
    window.Tawk_API.hideWidget();
};

const basvuruButtonu = document.getElementsByClassName('mobilBasvuru');
for (let i = 0; i < basvuruButtonu.length; i++) {
    basvuruButtonu[i].style.display = 'none';
}
const egitimSureciBolumu = document.getElementsByClassName('hidenonapp');
for (let i = 0; i < egitimSureciBolumu.length; i++) {
    egitimSureciBolumu[i].style.display = 'none';
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


const bunuSilcez = document.getElementById("cpContent_ltrContent");

if (bunuSilcez) {
  for (let i = 0; i < 6; i++) {
    if (bunuSilcez.lastElementChild) {
        bunuSilcez.removeChild(bunuSilcez.lastElementChild);
    }
  }
} else {
  console.log('Element not found');
}