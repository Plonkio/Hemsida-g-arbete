

/*The necessary code for getting hours,minutes and seconds and making them read out correctly*/
function startClock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("Clock").innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startClock, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  /*adds 0 to the time if the numbers are below 10*/
    return i;
  }