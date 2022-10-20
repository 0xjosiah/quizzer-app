import blueBlob from '../blue-blob.png'
import yellowBlob from '../yellow-blob.png'
import SubmitBtn from './SubmitBtn'

export default function Quiz({ quiz, quizResults, checkAnswers, playAgain, setAnswers }) {
    const questions = quiz.map(q => {
        const answersHtml = q.allAnswers.map(i => (
                <button 
                    className={q.userAnswer === i ? "quiz__answer-btn-selected" : "quiz__answer-btn"}
                    onClick={() => setAnswers(q.id, i)} 
                    dangerouslySetInnerHTML={{__html:`${i}`}}
                >
                </button>
        ))
        const answersHtmlPostSubmit = q.allAnswers.map(i => (
            <button 
                className={ q.userAnswer === q.correct_answer && q.userAnswer === i ? "quiz__answer-btn-correct"
                    : q.correct_answer === i ? "quiz__answer-btn-correct"
                    : q.userAnswer === i ? "quiz__answer-btn-incorrect"
                    : "quiz__answer-btn-unselected"
                }
                dangerouslySetInnerHTML={{__html:`${i}`}}
            >
            </button>
        ))
                
        return (
            <div className="quiz__question-block">
                <h4 
                    className="quiz__question" 
                    key={q.id} 
                    dangerouslySetInnerHTML={{__html:`${q.question}`}}
                >
                </h4>
                <div className="quiz__answers">
                    {!quizResults.isSubmitted ? answersHtml : answersHtmlPostSubmit}
                </div>
            </div>
        )
    })

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