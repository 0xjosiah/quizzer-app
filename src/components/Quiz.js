import { shuffle } from "../helpers"
import { useEffect } from "react"

export default function Quiz(props) {
    
    // export body of map fn to question and pass appropriate props
    // this will allow shuffle to run (hopefully) without changing order every time via useEffect
    // make sure on nested comps branch
    const questions = props.quiz.map(q => {
            const answers = q.incorrect_answers.concat(q.correct_answer)
            const shuffledAs = shuffle(answers)
            const answersHtml = shuffledAs.map(i => (
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