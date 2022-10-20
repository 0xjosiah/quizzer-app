export default function Question ({ setAnswers, quizResults, question }) {
    const answersHtml = question.allAnswers.map(i => (
            <button 
                className={question.userAnswer === i ? "quiz__answer-btn-selected" : "quiz__answer-btn"}
                onClick={() => setAnswers(question.id, i)} 
                dangerouslySetInnerHTML={{__html:`${i}`}}
            >
            </button>
    ))

    const answersHtmlPostSubmit = question.allAnswers.map(i => (
        <button 
            className={ question.userAnswer === question.correct_answer && question.userAnswer === i ? "quiz__answer-btn-correct"
                : question.correct_answer === i ? "quiz__answer-btn-correct"
                : question.userAnswer === i ? "quiz__answer-btn-incorrect"
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
                key={question.id} 
                dangerouslySetInnerHTML={{__html:`${question.question}`}}
            >
            </h4>
            <div className="quiz__answers">
                {!quizResults.isSubmitted ? answersHtml : answersHtmlPostSubmit}
            </div>
        </div>
    )
}