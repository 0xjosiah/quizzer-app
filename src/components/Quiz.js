import { shuffle } from "../helpers"
import { useEffect } from "react"

export default function Quiz(props) {
    
    const questions = props.quiz.map(q => {
            const answersHtml = q.allAnswers.map(i => (
                <button 
                    className={q.userAnswer === i ? "quiz__answer-btn-selected" : "quiz__answer-btn"} 
                    onClick={(event) => props.setAnswers(q.id, event)} 
                    dangerouslySetInnerHTML={{__html:`${i}`}}
                >
                {/* NEED TO FIX ENCODED ANSWERS ISSUE, q.userAnswer doesn't always equal i */}
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
            <button 
                className="quiz__submit-btn"
            >
                Check answers
            </button>
        </div>
    )
}