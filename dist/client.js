function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var month = today.getMonth();
    var day = today.getDate();
    var year = today.getFullYear();
    month = displayMonth(month);
    h = displayHour(h);
    var date = month +" "+ day +", " + year;
    m = checkTime(m);
    s = checkTime(s);
    h = checkTime(h);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
    document.getElementById('date').innerHTML =
         date;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i;
}
function displayMonth(month){
    switch (month) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
    }
}
function displayHour(hour)
{
    if(hour > 12 || hour == 0)
    {
        switch(hour){
        case 0:
            return "12";
        default:
            return hour - 12;
        }
    }
    return hour;
}
function toggleMenu()
{
    document.getElementById("sidebar").classList.toggle("active");
}