import { shuffle } from "../helpers"
import { useEffect } from "react"
import Question from "./Question"

export default function Quiz(props) {
    
    // export body of map fn to question and pass appropriate props
    // this will allow shuffle to run (hopefully) without changing order every time via useEffect
    // make sure on nested comps branch
    const questions = props.quiz.map(q => {
        console.log('i work')
        return <Question setAnswers={props.setAnswers} question={q} />
    })

    return (
        <div>
            {questions}
            <button className="submit-btn">Check answers</button>
        </div>
    )
}