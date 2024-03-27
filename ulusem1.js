const element = document.querySelector('.cookiePolicy');
element.style.display = 'none'; true; 

window.Tawk_API.getStatus();

window.Tawk_API.onLoad = function(){
    var pageStatus = window.Tawk_API.getStatus();

    if(pageStatus === 'online'){
        // do something for online
    }else if(pageStatus === 'away'){
        //do something for away
    }else{
        // do something for offline
    }
};

window.Tawk_API.onLoad = function(){
    window.Tawk_API.hideWidget();
};