import {useContext} from 'react'
import {ChallengeContect} from '../context/Challenge.ctx'

import styles from  '../styles/components/CompleteChallenges.module.css'

export function CompleteChallenges(){
  const {challengesCompleted} = useContext(ChallengeContect)
  return (
    <div className={styles.completeChallengesContainer}>
     <span>Desafios completos</span>
     <span>{challengesCompleted}</span>
    </div>
  )
}