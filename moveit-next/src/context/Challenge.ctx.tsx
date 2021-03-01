import {createContext, useState, ReactNode} from 'react';
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
  resetChallenge: () => void
}

export const ChallengeContect = createContext({} as ChallengeCtxData)

export const ChallengeProvider =({children}:ChallengeProviderProps) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUP(){
    setLevel(level + 1)
  }

  function startNewChallenge(){
    console.log('new challenge')
    const randomChallengIndex =  Math.floor(Math.random() * challenges.length) // numero aleatorio
    const challenge = challenges[randomChallengIndex]

    setActiveChallenge(challenge)
  }

  function resetChallenge(){
    setActiveChallenge(null)
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
        experienceToNextLevel
      }}
    >
      {children}
    </ChallengeContect.Provider>
  )
}