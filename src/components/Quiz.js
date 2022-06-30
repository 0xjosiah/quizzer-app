export default function Quiz(props) {
    const questions = props.quiz.results.map(q => (
        <div>
            <h4 dangerouslySetInnerHTML={{__html:`${q.question}`}}></h4>
        </div>
    ))
    return (
        <div>
            {questions}
        </div>
    )
}