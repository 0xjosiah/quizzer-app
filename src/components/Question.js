import { useEffect } from "react";
import { shuffle } from "../helpers";

export default function Question(props) {
    const { setAnswers, question } = props
    const answers = question.incorrect_answers.concat(question.correct_answer)
    const shuffledAs = shuffle(answers)
    const answersHtml = shuffledAs.map(i => (
        <button onClick={(event) => setAnswers(question.id, event)} dangerouslySetInnerHTML={{__html:`${i}`}}></button>
    ))

    return (
        <div>
            <h4 key={question.id} dangerouslySetInnerHTML={{__html:`${question.question}`}}></h4>
            {answersHtml}
        </div>
    )
}