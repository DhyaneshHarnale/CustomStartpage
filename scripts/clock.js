const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

setInterval(displayclock, 1)
function displayclock () {
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let dat = time.getDate();
    let mon = months[time.getMonth()];

    // if (hrs > 12) {
    //     hrs = hrs - 12;
    // }

    // if (hrs == 0) {
    //     hrs = 12;
    // }

    document.getElementById('clock').innerHTML = dat + ' ' + mon + ', ' + hrs + ':' + min
}