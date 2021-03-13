let intervalId = null
const refs = {
    days: document.querySelector('#timer-1 [data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]')
};

const targetDate = (new Date('Mar 30, 2021'));
// console.log(targetDate);

function countRestTime() {

        intervalId = setInterval(() => {
            const targetTime = targetDate.getTime();
            const currentTime = Date.now();
            const restTime = targetTime - currentTime;
              
            if (targetTime < currentTime) {
                // console.log("aa");
                clearInterval(intervalId);
                refs.days.textContent = "00";
                refs.hours.textContent = '00';
                refs.mins.textContent = '00';
                refs.secs.textContent = '00';
                return
            }
            const time = getTimeComponents(restTime);
            updateClockface(time);
            
        }
            , 1000);
    
}
countRestTime();

function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    
    return {days, hours, mins, secs}
}

function pad(value) {
    return String(value).padStart(2, '0');
}

function updateClockface({ days, hours, mins, secs }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
};



