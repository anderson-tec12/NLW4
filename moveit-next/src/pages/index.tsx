import { CompleteChallenges } from "../components/CompleteChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import {Profile} from '../components/Profile'
import {Countdown} from '../components/Countdown'

import styles from  '../styles/pages/Home.module.css'
import Head from 'next/head'
import { ChallengeBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>inicio | move.it</title>
      </Head>
      <ExperienceBar/>

      <section>
        <div >
          <Profile />
          <CompleteChallenges />
          <Countdown />
        </div>

        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
