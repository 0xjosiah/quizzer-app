import { shuffle } from "../helpers"
import { useEffect } from "react"

export default function Quiz(props) {
    
    const questions = props.quiz.map(q => {
            const answersHtml = q.allAnswers.map(i => (
                <button onClick={(event) => props.setAnswers(q.id, event)} dangerouslySetInnerHTML={{__html:`${i}`}}></button>
            ))

        return (
            <div>
                <h4 key={q.id} dangerouslySetInnerHTML={{__html:`${q.question}`}}></h4>
                {answersHtml}
            </div>
        )
    })

    return (
        <div>
            {questions}
            <button className="submit-btn">Check answers</button>
        </div>
    )
}