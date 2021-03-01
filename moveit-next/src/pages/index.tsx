import { CompleteChallenges } from "../components/CompleteChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import {Profile} from '../components/Profile'
import {Countdown} from '../components/Countdown'

import styles from  '../styles/pages/Home.module.css'
import Head from 'next/head'
import { ChallengeBox } from "../components/ChallengeBox";

import {GetServerSideProps} from 'next'

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

export const getServerSideProps: GetServerSideProps = async (ctx ) => {


  const {level, currentExperience,challengesCompleted} = ctx.req.cookies

  return {
    props: {
      level,
      currentExperience,
      challengesCompleted
    }
  }
}