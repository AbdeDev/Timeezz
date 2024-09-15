//logic of timer class
export class Timer {
    private time: number
    private isRunning: boolean 
    private intervalId: number | null

// construcior for initialise properties
    constructor() {
        this.time = 0
        this.isRunning = false
        this.intervalId = null
    }
    
//methods for start stop and reset timer
    start(){
        if(!this.isRunning)
            this.isRunning = true
        
        this.intervalId = window.setInterval(() => {
            this.time++;  // Incrémente le temps
            console.log(`Temps écoulé : ${this.time} secondes`);
          }, 1000);
    }
    stop(){
        if(!this.isRunning && this.intervalId !== null)
            this.isRunning = false
        clearInterval(this.intervalId as number)
        this.intervalId = null;
        console.log('Le timer est arrêté');
    }

    reset(){
        this.time = 0
        this.isRunning = false
        if(this.intervalId !== null)
        clearInterval(this.intervalId)
        this.intervalId = null
        console.log('le timer est reset')

    }
}