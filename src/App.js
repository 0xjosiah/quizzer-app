import { useEffect, useState } from 'react'
import StartQuiz from './components/StartQuiz'

function App() {
  const [isQuizStart, setIsQuizStart] = useState(false)
  const [quiz, setQuiz] = useState({})

  const fetchQs = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=10')
    const data = res.json()
    console.log(data)
  }

  return (
    <div>
      <StartQuiz fetchQs={fetchQs} />
    </div>
  );
}

export default App;
