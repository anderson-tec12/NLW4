import {useContext} from 'react'
import {ChallengeContect} from '../context/Challenge.ctx'

import styles from  '../styles/components/Profile.module.css'

export function Profile(){

  const {level} = useContext(ChallengeContect)

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/12089780?s=460&u=98b717e44d2d3eda943ec3c4fdff9de1a64dd447&v=4" alt=""/>
      <div>
        <strong>Anderson Barros</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}</p>
      </div>
    </div>
  )
}