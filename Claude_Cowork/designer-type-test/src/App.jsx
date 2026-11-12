import { useState } from 'react'
import { ThemeProvider } from '@montage-ui/core'
import '@montage-ui/core/global.css'
import { questions } from './data/questions.js'
import StartScreen from './components/StartScreen.jsx'
import QuestionScreen from './components/QuestionScreen.jsx'
import ResultScreen from './components/ResultScreen.jsx'

function calcResult(answers) {
  const count = { explorer: 0, executor: 0, thinker: 0 }
  answers.forEach((type) => { count[type] = (count[type] || 0) + 1 })
  return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0]
}

export default function App() {
  const [screen, setScreen] = useState('start') // 'start' | 'question' | 'result'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])

  function handleStart() {
    setScreen('question')
    setCurrentIndex(0)
    setAnswers([])
  }

  function handleAnswer(type) {
    const newAnswers = [...answers, type]
    setAnswers(newAnswers)

    if (currentIndex + 1 >= questions.length) {
      setScreen('result')
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  function handleBack() {
    if (currentIndex === 0) {
      setScreen('start')
    } else {
      setCurrentIndex(currentIndex - 1)
      setAnswers(answers.slice(0, -1))
    }
  }

  function handleRestart() {
    setScreen('start')
    setCurrentIndex(0)
    setAnswers([])
  }

  return (
    <ThemeProvider>
      {screen === 'start' && (
        <StartScreen onStart={handleStart} />
      )}
      {screen === 'question' && (
        <QuestionScreen
          currentIndex={currentIndex}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      )}
      {screen === 'result' && (
        <ResultScreen
          resultType={calcResult(answers)}
          onRestart={handleRestart}
        />
      )}
    </ThemeProvider>
  )
}
