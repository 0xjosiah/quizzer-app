import { shuffle } from "../helpers"
import { useEffect } from "react"

export default function Quiz(props) {
    
    const questions = props.quiz.map(q => {
            const answersHtml = q.allAnswers.map(i => (
                <button className="quiz__answer-btn" onClick={(event) => props.setAnswers(q.id, event)} dangerouslySetInnerHTML={{__html:`${i}`}}></button>
            ))

        return (
            <div className="quiz__question-block">
                <h4 className="quiz__question" key={q.id} dangerouslySetInnerHTML={{__html:`${q.question}`}}></h4>
                {answersHtml}
            </div>
        )
    })

    return (
        <div className="quiz">
            {questions}
            <button className="submit-btn">Check answers</button>
        </div>
    )
}