import { useEffect, useState } from 'react'
import StartQuiz from './components/StartQuiz'
import Quiz from './components/Quiz'

function App() {
  const [isQuizStart, setIsQuizStart] = useState(false)
  const [quiz, setQuiz] = useState({})

  const fetchQs = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=5')
    const data = await res.json()
    console.log(data)
    setQuiz(data)
    setIsQuizStart(prevState => !prevState)
  }

  return (
    <main>
      { !isQuizStart ? 
        <StartQuiz fetchQs={fetchQs} />
        :
        <Quiz quiz={quiz} />
      }
    </main>
  );
}

export default App;
