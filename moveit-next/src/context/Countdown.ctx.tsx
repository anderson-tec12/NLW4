import {createContext, useState, ReactNode, useContext, useEffect} from 'react';
import { ChallengeContect } from './Challenge.ctx';

interface CountdownCtxData{
      minutes: number,
      seconds: number,
      hasFinished: boolean,
      isActive:boolean,
      startCountdown:() => void,
      resetCoundown: () => void
}

interface CountdownCtxProviderProps{
  children: ReactNode
}

export const CountdownCtx = createContext({} as CountdownCtxData)


let countdownTimeout:NodeJS.Timeout

export function CountdownProvider({children}:CountdownCtxProviderProps){
  const {startNewChallenge} = useContext(ChallengeContect)

  const [time, setTime] = useState(0.1 * 60) //segundos
  const [isActive, setisActive] = useState(false)
  const [hasFinished, sethasFinished] = useState(false)

  const minutes = Math.floor(time / 60); // arrendodando pra baixo 
  const seconds = time % 60

  function startCountdown(){
    setisActive(true)
  }

  function resetCoundown(){
    clearTimeout(countdownTimeout)
    setisActive(false)
    setTime(0.1 * 60)
    sethasFinished(false)
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
     <CountdownCtx.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCoundown
     }}>
       {children}
      </CountdownCtx.Provider>
   )
}