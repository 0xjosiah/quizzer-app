import Answer from "./Answer"

export default function Question ({ setAnswers, quizResults, question }) {
    // const answersHtml = question.allAnswers.map(answer => (
    //         <button 
    //             className={question.userAnswer === answer ? "quiz__answer-btn-selected" : "quiz__answer-btn"}
    //             onClick={() => setAnswers(question.id, answer)} 
    //             dangerouslySetInnerHTML={{__html:`${answer}`}}
    //             key={answer}
    //         >
    //         </button>
    // ))

    // const answersHtmlPostSubmit = question.allAnswers.map(answer => (
    //     <button 
    //         className={ question.userAnswer === question.correct_answer && question.userAnswer === answer ? "quiz__answer-btn-correct"
    //             : question.correct_answer === answer ? "quiz__answer-btn-correct"
    //             : question.userAnswer === answer ? "quiz__answer-btn-incorrect"
    //             : "quiz__answer-btn-unselected"
    //         }
    //         dangerouslySetInnerHTML={{__html:`${answer}`}}
    //         key={answer}
    //     >
    //     </button>
    // ))

    const answersHtml = question.allAnswers.map(answer => (
        <Answer answer={answer} setAnswers={setAnswers} question={question} quizResults={quizResults} />
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
                {/* {!quizResults.isSubmitted ? answersHtml : answersHtmlPostSubmit} */}
                {answersHtml}
            </div>
        </div>
    )
}