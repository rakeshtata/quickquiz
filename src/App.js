import React, {useState} from 'react';
import QuestionList from './Components/QuestionList'
import Scorebox from './Components/ScoreBox'
import Results from './Components/Results'
import questions from './questions'

const App = () => {

  const [score, setScore] = useState(0)
  const [current, setCurrent] = useState(1)


  return(
    <div>
      {current > questions.length && <Results 
      score = {score} 
      current = {current}
      questions = {questions} />}

      <QuestionList 
      score = {score} 
      current = {current}
      questions = {questions}
      setCurrent={setCurrent}
      setScore={setScore} />

      {current <= questions.length && <Scorebox 
      score = {score} 
      current = {current}
      questions = {questions}  />}
    </div>
  )
	
}

export default App