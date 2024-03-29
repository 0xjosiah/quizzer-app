import blueBlob from '../assets/blue-blob.png'
import yellowBlob from '../assets/yellow-blob.png'
import Question from '../components/Question'
import SubmitBtn from '../components/SubmitBtn'

export default function Quiz({ quiz, quizResults, checkAnswers, playAgain, setAnswers }) {
    const questions = quiz.map(question => (
        <Question setAnswers={setAnswers} quizResults={quizResults} question={question} key={question.id} />
    ))

    return (
        <>
            <div className="quiz">
                {questions}
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