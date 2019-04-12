class Clock {
  constructor() {

    this.date = new Date();
    this.hours = this.date.getHours();
    this.seconds = this.date.getSeconds();
    this.minutes = this.date.getMinutes();
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
    // this._tick #
    // const that = this;
    setInterval(() => {
      let that = this;
      that._tick()
    }, 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    if(this.seconds === 60){
      this.seconds = 0;
      this.minutes++; 
    }

    if(this.minutes === 60) {
      this.minutes = 0;
      this.hours++;
    }

    let displayTime = `${this.hours}:${this.minutes}:${this.seconds}`;
    console.log(displayTime);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    
    this.seconds++;
    this.printTime();

  }
}

const clock = new Clock();