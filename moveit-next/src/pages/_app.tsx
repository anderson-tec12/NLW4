import { fchown } from 'fs/promises'

import {ChallengeProvider} from '../context/Challenge.ctx'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  

  return (
    <ChallengeProvider>
        <Component {...pageProps} />
    </ChallengeProvider> 
  ) 
}

export default MyApp
