import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

class Timer {
  constructor(){
    this.startBtn = document.querySelector('[data-start]');
    this.dataDays = document.querySelector('[data-days]');
    this.dataHours = document.querySelector('[data-hours]');
    this.dataMinutes = document.querySelector('[data-minutes]');
    this.dataSeconds = document.querySelector('[data-seconds]');
    this.calendar = document.querySelector('#datetime-picker');

    this.selectData = null;
    this.intervalId = null;
    this.options =  {
      enableTime: true,
      time_24hr: true,
      defaultDate: new Date(),
      minuteIncrement: 1,
      onClose: (selectedDates) => this.onClose(selectedDates),
      };
      this.startBtn.disabled = true;
      this.datapicker = flatpickr(this.calendar, this.options);
  
};



  onClose(selectedDates) {
      if (selectedDates[0].getTime() < Date.now()){
        alert('Please choose a date in the future');
      } else {
        this.startBtn.disabled = false; 
        const timerStart=()=>{
               this.selectData = selectedDates[0].getTime();
               this.start()
              };
              this.startBtn.addEventListener('click', timerStart);
        }
      }
    

start(){
  this.intervalId = setInterval(()=> {
    this.startBtn.disabled=true;
    this.calendar.disabled= true;
    const currentDay = Date.now();
    const delta = this.selectData - currentDay;
if(delta <=0){
  this.stop();
  return
}
const { days, hours, minutes, seconds } = this.convertMs(delta);
      
      this.dataDays.textContent = days;
      this.dataHours.textContent = hours;
      this.dataMinutes.textContent = minutes;
      this.dataSeconds.textContent = seconds;
  }
  , 1000)
}

stop() {
  clearInterval(this.intervalId);
  this.intervalId = null;
  this.startBtn.disabled = true;
  this.calendar.disabled = false;

}
convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = this.addLeadingZero(Math.floor(ms / day));
  const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
addLeadingZero(value){
  return String(value).padStart(2, '0')
}
}
const timer = new Timer();



// Це було найважче завдання
// !!!!