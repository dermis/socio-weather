function showLoader() {
    window.setTimeout(function(){
        $.mobile.loading('show');
    }, 1);
};

function hideLoader() {
    window.setTimeout(function(){
        $.mobile.loading('hide');
    }, 1);
};
