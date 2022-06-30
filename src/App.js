import { useEffect, useState } from 'react'
import StartQuiz from './components/StartQuiz'
import Quiz from './components/Quiz'
import { nanoid } from 'nanoid'

function App() {
  const [isQuizStart, setIsQuizStart] = useState(false)
  const [quiz, setQuiz] = useState(null)
  const [userAnswers, setUserAnswers] = useState(new Array(5).fill())

  const fetchQs = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=5&type=multiple')
    const data = await res.json()
    // console.log(data)
    setQuiz(data.results.map(q => (
      {...q, id: nanoid()}
    )))
    setIsQuizStart(prevState => !prevState)
  }

  const setAnswers = (id, event) => {
    const [value] = event.target.value
    setUserAnswers(prevArr => prevArr.map(answer => (
      {
        id: id,
        answer: value
      }
    )))
  }
  console.log(userAnswers)

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
