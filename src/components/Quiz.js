import { shuffle } from "../helpers"

export default function Quiz(props) {

    const questions = props.quiz.results.map(q => {
        const answers = q.incorrect_answers.concat(q.correct_answer)
        const shuffledAs = shuffle(answers)
        const answersHtml = shuffledAs.map(i => (
            <button dangerouslySetInnerHTML={{__html:`${i}`}}></button>
        ))

        return (
            <div>
                <h4 dangerouslySetInnerHTML={{__html:`${q.question}`}}></h4>
                {answersHtml}
                <button className="submit-btn">Check answers</button>
            </div>
        )
    })

    return (
        <div>
            {questions}
        </div>
    )
}