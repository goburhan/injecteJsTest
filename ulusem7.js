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