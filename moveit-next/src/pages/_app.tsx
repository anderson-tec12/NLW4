import { fchown } from 'fs/promises'

import {ChallengeProvider} from '../context/Challenge.ctx'
import {CountdownProvider} from '../context/Countdown.ctx'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  

  return (
    <ChallengeProvider>
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
    </ChallengeProvider> 
  ) 
}

export default MyApp
