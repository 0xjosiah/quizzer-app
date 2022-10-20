import StartQuiz from './components/StartQuiz'
import Quiz from './components/Quiz'
import useQuizzer from './hooks/useQuizzer'

function App() {
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
