let name = prompt("Adınızı Nedir")



let fullName = document.querySelector("#myName")
fullName.innerHTML = "Merve İpekci"


// SAAT EKLEME
function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let d = date.getDay();


    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    if ( d == 1) {
        d = "Pazartesi";
    } else if ( d == 2) {
        d = "Salı";
    } else if ( d == 3) {
        d = "Çarşamba";
    } else if ( d == 4) {
        d = "Perşembe";
    } else if ( d == 5) {
        d = "Cuma";
    } else if ( d == 6) {
        d = "Cumartesi";
    } else if ( d == 0) {
        d = "Pazar";
    }
    
    var time = h + ":" + m + ":" + s + " " + d ;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);

}

showTime();
    
    








