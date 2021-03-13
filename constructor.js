class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.intervalId = null;
        this.targetTime = targetDate.getTime();
        this.refs = {
            days: document.querySelector(this.selector + ' [data-value="days"]'),
            hours: document.querySelector(this.selector + ' [data-value="hours"]'),
            mins: document.querySelector(this.selector + ' [data-value="mins"]'),
            secs: document.querySelector(this.selector + ' [data-value="secs"]')
        };
        // this.countRestTime();
    }
    countRestTime() {

        this.intervalId = setInterval(() => {
            this.currentTime = Date.now();
            this.restTime = this.targetTime - this.currentTime;
              
            if (this.targetTime < this.currentTime) {
                clearInterval(this.intervalId);
                this.refs.days.textContent = "00";
                this.refs.hours.textContent = '00';
                this.refs.mins.textContent = '00';
                this.refs.secs.textContent = '00';
                return
            }
            this.time = this.getTimeComponents(this.restTime);
            this.updateClockface(this.time);
        }
            , 1000);
    }

    

        getTimeComponents(time) {
            const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
            const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
            const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
            return { days, hours, mins, secs }
        }

        pad(value) {
                return String(value).padStart(2, '0');
        }

        updateClockface({ days, hours, mins, secs }) {
                this.refs.days.textContent = days;
                this.refs.hours.textContent = hours;
                this.refs.mins.textContent = mins;
                this.refs.secs.textContent = secs;
        };
}



const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Mar 30, 2021'),
});

timer.countRestTime();