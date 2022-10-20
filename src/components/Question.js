import Answer from "./Answer"

export default function Question ({ setAnswers, quizResults, question }) {

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