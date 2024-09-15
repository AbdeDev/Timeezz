import { useEffect, useState } from "react";
import { Timer  } from "../Domain/Timer";

const TimerComponent = () =>{
    const [time, setTime ] = useState(0)
    const timer = new Timer()

    const startTimer = () => {
        timer.start()
        setTime(timer.getTime());
    }

    const stopTimer = () => {
        timer.stop();
        setTime(timer.getTime());
      }
      
      const resetTimer = () => {
        timer.reset();
        setTime(0);  // Réinitialise le temps dans l'UI aussi
      }

      return (
        <div>
          <h1>Temps écoulé : {time} secondes</h1>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      )
      useEffect(() => {
        const interval = setInterval(() => {
          setTime(timer.getTime());  // Met à jour l'état avec le temps réel
        }, 1000);
      
        return () => clearInterval(interval);  // Nettoie l'intervalle quand le composant est démonté
      }, [timer]);
      
}

export default TimerComponent;