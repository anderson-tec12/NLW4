import {createContext, useState, ReactNode, useEffect} from 'react';
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'

interface Challenge{
  type:'body' | 'eye',
  description: string,
  amount:number

}

interface ChallengeProviderProps {
  children: ReactNode
}

interface ChallengeCtxData{
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  activeChallenge: Challenge,
  experienceToNextLevel:number,
  levelUP: () => void,
  startNewChallenge: () => void,
  resetChallenge: () => void,
  completeChallenge: () => void,
}

export const ChallengeContect = createContext({} as ChallengeCtxData)

export const ChallengeProvider =({children}:ChallengeProviderProps) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission() // pedir permissão
  }, [])

  useEffect(()=>{
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
    
  }, [currentExperience,level, challengesCompleted])

  function levelUP(){
    setLevel(level + 1)
  }

  function startNewChallenge(){

    console.log('new challenge')
    const randomChallengIndex =  Math.floor(Math.random() * challenges.length) // numero aleatorio
    const challenge = challenges[randomChallengIndex]

    setActiveChallenge(challenge)

    new Audio('./notification.mp3').play()

    if(Notification.permission === 'granted'){
      new Notification('Novo desafio ', {
        body: `Valendo ${challenge.amount} xp`
      })
    }
  }

  function resetChallenge(){
    setActiveChallenge(null)
  }

  function completeChallenge(){
     if(!activeChallenge){
       return 
     }

      const {amount} = activeChallenge

      let finalExperience = currentExperience + amount

      if(finalExperience >= experienceToNextLevel){
        finalExperience = finalExperience - experienceToNextLevel
        levelUP()
      }

      setCurrentExperience(Math.floor(finalExperience))
      setActiveChallenge(null)
      setChallengesCompleted(challengesCompleted + 1)
  }
  
  return (
    <ChallengeContect.Provider 
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        levelUP,
        startNewChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge
      }}
    >
      {children}
    </ChallengeContect.Provider>
  )
}