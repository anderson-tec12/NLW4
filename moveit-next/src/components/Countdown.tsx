import { useContext } from 'react'
import { CountdownCtx } from '../context/Countdown.ctx'
import styles from  '../styles/components/Contdown.module.css'


export function Countdown(){
  
   const {
     startCountdown,
     hasFinished,
     isActive,
     minutes,
     resetCoundown,
     seconds} = 
     useContext(CountdownCtx)



  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

 

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>
          :
        </span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>

      </div>

      {hasFinished ? (
         <button
         disabled={true}
         className={styles.startCountdownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button type="button" className={`${styles.startCountdownButton} ${styles.startCountdownButtonActive}`} onClick={resetCoundown}>
              Abandonar ciclo
            </button>
          ) : (
            <button type="button" className={styles.startCountdownButton} onClick={startCountdown}>
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
      
      
    </div>
  )
}