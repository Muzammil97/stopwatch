var second = document.getElementById('sec')
var hour = document.getElementById('hour')
var minute = document.getElementById('min')
var msecond = document.getElementById('msec')
var hr = 0;
var msec = 0;
var sec = 0;
var mnt = 0;
var interval = 0;

function timer() {
    msec++;
    msecond.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        second.innerHTML = sec;
        msec = 0;
        if (sec >= 60) {
            mnt++;
            minute.innerHTML = mnt;
            sec = 0;
            if (mnt >= 60) {
                hr++;
                hour.innerHTML = hr;
                mnt = 0;
            }
        }
    }
}

function start() {
    if (interval === 0) {
        interval = setInterval(timer, 10);
    }
}

function stop() {
    clearInterval(interval);
    interval = 0;
}

function reset() {
    hr = 0;
    msec = 0;
    sec = 0;
    mnt = 0;
    msecond.innerHTML = msec;
    second.innerHTML = sec;
    minute.innerHTML = mnt;
    hour.innerHTML = hr;
    stop();
}