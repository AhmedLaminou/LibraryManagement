var toastElist = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElist.map(function(toastEl) {
    return new bootstrap.Toast(toastEl) ; 
}) ; 
window.addEventListener('load' , function()
{
    toastList.map(toast => toast.show()) ; 
}) ;

;