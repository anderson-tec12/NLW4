import {useContext} from 'react'
import {ChallengeContect} from '../context/Challenge.ctx'

import styles from  '../styles/components/ExperienceBar.module.css'

export function ExperienceBar(){
  const {currentExperience, experienceToNextLevel} = useContext(ChallengeContect)

  const percentToNextLevel =  Math.round(currentExperience * 100 ) / experienceToNextLevel
  
  return(
    <header className={styles.experienceBar}>
      <span>{currentExperience} xp</span>
        <div >
          <div style={{width:`${percentToNextLevel}%`}}></div>
          <span className={styles.currentExperience} style={{left:`${percentToNextLevel}%`}}>{percentToNextLevel} xp</span>
        </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}