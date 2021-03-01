import { useState, useEffect, useContext } from 'react'
import { ChallengeContect } from '../context/Challenge.ctx'
import styles from  '../styles/components/Contdown.module.css'

let countdownTimeout:NodeJS.Timeout

export function Countdown(){
  const {startNewChallenge} = useContext(ChallengeContect)

  const [time, setTime] = useState(0.1 * 60) //segundos
  const [isActive, setisActive] = useState(false)
  const [hasFinished, sethasFinished] = useState(false)

  const minutes = Math.floor(time / 60); // arrendodando pra baixo 
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown(){
    setisActive(true)
  }

  function resetCoundown(){
    clearTimeout(countdownTimeout)
    setisActive(false)
    setTime(23 * 60)
  }

  useEffect(() => {
    if( isActive && time > 0 ){
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }else if(isActive && time === 0){
      sethasFinished(true)
      setisActive(false)

      startNewChallenge()
    }

  }, [isActive, time])

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