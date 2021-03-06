import { useContext } from 'react'
import {ChallengeContect} from '../context/Challenge.ctx'

import styles from  '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
  

  const {activeChallenge,resetChallenge} = useContext(ChallengeContect)

  return (
    <div className={styles.challengeBoxContainer}>
      {
        activeChallenge ? (
          <div className={styles.challengeActive}>
            <header>Ganhe {activeChallenge.amount} xp</header>
            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>

            <footer>
              <button 
                type="button"
                className={styles.challengeFailedButton}
                onClick={resetChallenge}
                >
                Falhei
              </button>

              <button 
                className={styles.challengeSucceededButton}
                onClick={() =>{}}
                type="button"
              >
                Completei
              </button>
            </footer>
          </div>
        ) : (
          <div className={styles.challengeNotActive}>
              <strong>Inicie um ciclo para receber desafios a serem completados</strong>
              <p>
                <img src="icons/level-up.svg" alt="level up"/>
                avance de level completando desafios
              </p>
          </div>
        )
      }
     
    </div>
  )
}