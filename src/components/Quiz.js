import blueBlob from '../blue-blob.png'
import yellowBlob from '../yellow-blob.png'
import QuizQuestions from './QuizQuestions'
import SubmitBtn from './SubmitBtn'

export default function Quiz({ quiz, quizResults, checkAnswers, playAgain, setAnswers }) {

    return (
        <>
            <div className="quiz">
                <QuizQuestions quiz={quiz} quizResults={quizResults} setAnswers={setAnswers} />
                <div className="quiz__results-div">
                    { !quizResults.isSubmitted ? 
                        <SubmitBtn className="quiz__submit-btn" handleClick={checkAnswers} btnMessage="Check answers" />
                        :
                        <>
                            You scored {quizResults.numCorrect}/5 correct answers
                            <SubmitBtn className="quiz__submit-btn" handleClick={playAgain} btnMessage="Play again" />
                        </>
                    }
                </div>
            </div>
            <img className="quiz__blue-blob" src={blueBlob} />
            <img className="quiz__yellow-blob" src={yellowBlob} />
        </>
    )
}