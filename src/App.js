import { useEffect, useState } from 'react'
import StartQuiz from './components/StartQuiz'
import Quiz from './components/Quiz'
import { nanoid } from 'nanoid'
import { shuffle } from './helpers'

function App() {
  const [isQuizStart, setIsQuizStart] = useState(false)
  const [quiz, setQuiz] = useState(null)
  // const [userAnswers, setUserAnswers] = useState([])

  const fetchQs = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=5&type=multiple')
    const data = await res.json()
    setQuiz(data.results.map(question => (
      {
        ...question,
        id: nanoid(),
        allAnswers: shuffle(question.incorrect_answers.concat(question.correct_answer))
      }
    )))
    setIsQuizStart(prevState => !prevState)
  }

  const setAnswers = (id, event) => {
    const {innerText} = event.target
    setQuiz(prevArr => prevArr.map(question => (
      id === question.id ? {...question, userAnswer: innerText} : question
    )))
  }
  console.log(quiz)

  return (
    <main>
      { !isQuizStart ? 
        <StartQuiz fetchQs={fetchQs} />
        :
        <Quiz quiz={quiz} setAnswers={setAnswers} />
      }
    </main>
  );
}

export default App;
