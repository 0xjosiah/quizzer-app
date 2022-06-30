import { useEffect, useState } from 'react'
import StartQuiz from './components/StartQuiz'
import Quiz from './components/Quiz'

function App() {
  // const [isQuizStart, setIsQuizStart] = useState(false)
  const [quiz, setQuiz] = useState(null)

  const fetchQs = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=5&type=multiple')
    const data = await res.json()
    console.log(data)
    setQuiz(data)
    // setIsQuizStart(prevState => !prevState)
  }

  return (
    <main>
      { !quiz ? 
        <StartQuiz fetchQs={fetchQs} />
        :
        <Quiz quiz={quiz} />
      }
    </main>
  );
}

export default App;
