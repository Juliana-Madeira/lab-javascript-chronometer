class Chronometer {
  constructor(){
    this.currentTime = 0;
    this.intervalId = null;
  }

   start(callback) {                                  //callback = argumento opcional
    this.intervalId = setInterval((callback) => {
      this.currentTime += 1;
    }, 1000)
   }
  
   getMinutes(){
    let minutes = Math.floor(this.currentTime/60);
    return parseInt(minutes);       //ou Number(minutes) também retorna inteiro
   }

   getSeconds(){
    let seconds = Math.floor(this.currentTime % 60);      
    return Number(seconds);                            //ou parseInt(seconds)
   }

   computeTwoDigitNumber(value){
    let valueString = value.toString();       //passando qualquer valor numérico recebido na função, para string
    if(value === 0){
      return '00';
    } else if(value >= 10){
      return valueString;
    } else {
      return "0" + valueString;
    }
   }


   stop(){
    clearInterval(this.intervalId);
   }
  

   reset(){
    this.currentTime = 0;
   }

   split(){
    const result = `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
    return result;
   }

  }
  


  
      




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
