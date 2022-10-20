// import { useEffect, useState } from 'react'
import StartQuiz from './components/StartQuiz'
import Quiz from './components/Quiz'
// import { nanoid } from 'nanoid'
// import { shuffle } from './helpers/helpers'
import useQuizzer from './hooks/useQuizzer'

function App() {
  // const [isQuizStart, setIsQuizStart] = useState(false)
  // const [quiz, setQuiz] = useState(null)
  // const [categoryOptions, setCategoryOptions] = useState([])
  // const [quizResults, setQuizResults] = useState({
  //   isSubmitted: false,
  //   numCorrect: null
  // })
  // const [quizParams, setQuizParams] = useState({
  //   difficulty: '',
  //   question_category: ''
  // })

  // const difficultyOptions = [
  //   {id: 'any', name: 'any'},
  //   {id: 'easy', name: 'easy'},
  //   {id: 'medium', name: 'medium'},
  //   {id: 'hard', name: 'hard'},
  // ]
  
  // useEffect(() => {
  //     fetch('https://opentdb.com/api_category.php')
  //         .then(res => res.json())
  //         .then(data => setCategoryOptions(data.trivia_categories))
  // }, [])

  // const handleSelectChange = (id, value) => {
  //   setQuizParams(prev => ({
  //     ...prev,
  //     [id]: value
  //   }))
  // }

  // const categoryIdMatch = param => {
  //   for(let category of categoryOptions) {
  //     if(category.name === param) {
  //       return category.id
  //     }
  //   }
  // }

  // const fetchQs = async () => {
  //   let difficulty = quizParams.difficulty ? `&difficulty=${quizParams.difficulty}` : ''
  //   let category = quizParams.question_category ? `&category=${categoryIdMatch(quizParams.question_category)}` : ''
  //   const res = await fetch(`https://opentdb.com/api.php?amount=5&type=multiple${difficulty}${category}`)
  //   const data = await res.json()
  //   setQuiz(data.results.map(question => (
  //     {
  //       ...question,
  //       id: nanoid(),
  //       allAnswers: shuffle(question.incorrect_answers.concat(question.correct_answer)),
  //     }
  //   )))
  //   setIsQuizStart(prevState => !prevState)
  // }

  // const setAnswers = (id, answer) => {
  //   setQuiz(prevArr => prevArr.map(question => (
  //     id === question.id ? {...question, userAnswer: answer} : question
  //   )))
  // }

  // const checkAnswers = () => {
  //   setQuizResults(prevState => ({
  //     isSubmitted: !prevState.isSubmitted,
  //     numCorrect: quiz.filter(i => i.correct_answer === i.userAnswer).length
  //   }))
  // }

  // const playAgain = () => {
  //   setIsQuizStart(prevState => !prevState)
  //   setQuiz(null)
  //   setQuizResults({
  //     isSubmitted: false,
  //     numCorrect: null
  //   })
  //   setQuizParams({
  //     difficulty: '',
  //     question_category: ''
  //   })
  // }
  const [
    categoryOptions, 
    checkAnswers, 
    difficultyOptions, 
    fetchQs, 
    handleSelectChange, 
    isQuizStart, 
    playAgain, 
    quiz, 
    quizResults, 
    setAnswers
  ] = useQuizzer()

  return (
    <main>
      { !isQuizStart ? 
        <StartQuiz 
          fetchQs={fetchQs}
          handleSelectChange={handleSelectChange}
          categoryOptions={categoryOptions}
          difficultyOptions={difficultyOptions}
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
