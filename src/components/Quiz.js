import { shuffle } from "../helpers"
import { useEffect } from "react"

export default function Quiz(props) {
    const {checkAnswers, quizResults, quiz} = props
    
    const questions = quiz.map(q => {
            const answersHtml = q.allAnswers.map(i => (
                <button 
                    className={q.userAnswer === i ? "quiz__answer-btn-selected" : "quiz__answer-btn"}
                    onClick={() => props.setAnswers(q.id, i)} 
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
                    {answersHtml}
                </div>
            </div>
        )
    })

    return (
        <div className="quiz">
            {questions}
            <div className="quiz__results-div">
                You scored {quizResults.numCorrect}/5 correct answers
                <button 
                    className="quiz__submit-btn"
                    onClick={checkAnswers}
                >
                    Check answers
                </button>
            </div>
        </div>
    )
}