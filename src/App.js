import { useEffect, useState } from 'react'
import StartQuiz from './components/StartQuiz'
import Quiz from './components/Quiz'
import { nanoid } from 'nanoid'
import { shuffle } from './helpers'

function App() {
  const [isQuizStart, setIsQuizStart] = useState(false)
  const [quiz, setQuiz] = useState(null)
  const [quizResults, setQuizResults] = useState({
    isSubmitted: false,
    numCorrect: null
  })
  const [quizParams, setQuizParams] = useState({
    difficulty: '',
    question_category: ''
  })

  const handleSelectChange = (id, value) => {
    setQuizParams(prev => ({
      ...prev,
      [id]: value
    }))
  }

  useEffect(() => {
    console.log(quizParams);
  })

  const fetchQs = async () => {
    let difficulty = quizParams.difficulty ? `&difficulty=${quizParams.difficulty}` : ''
    // let category = quizParams.question_category ? `&difficulty=${quizParams.question_category}` : ''
    const res = await fetch(`https://opentdb.com/api.php?amount=5&type=multiple${difficulty}`)
    const data = await res.json()
    console.log(data)
    setQuiz(data.results.map(question => (
      {
        ...question,
        id: nanoid(),
        allAnswers: shuffle(question.incorrect_answers.concat(question.correct_answer)),
      }
    )))
    setIsQuizStart(prevState => !prevState)
  }

  const setAnswers = (id, answer) => {
    setQuiz(prevArr => prevArr.map(question => (
      id === question.id ? {...question, userAnswer: answer} : question
    )))
  }

  const checkAnswers = () => {
    setQuizResults(prevState => ({
      isSubmitted: !prevState.isSubmitted,
      numCorrect: quiz.filter(i => i.correct_answer === i.userAnswer).length
    }))
  }

  const playAgain = () => {
    setIsQuizStart(prevState => !prevState)
    setQuiz(null)
    setQuizResults({
      isSubmitted: false,
      numCorrect: null
    })
  }

  return (
    <main>
      { !isQuizStart ? 
        <StartQuiz 
          fetchQs={fetchQs}
          handleSelectChange={handleSelectChange}
        />
        :
        <Quiz 
          quiz={quiz} 
          setAnswers={setAnswers} 
          checkAnswers={checkAnswers}
          quizResults={quizResults}
          playAgain={playAgain}
        />
      }
    </main>
  );
}

export default App;
