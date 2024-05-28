function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Add leading zeros to single digit numbers
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes + ':' + seconds;

    document.getElementById('time').textContent = timeString;
}

// Update the time immediately and then every second
updateTime();
setInterval(updateTime, 1000);