export default function StartQuiz(props) {
    return (
        <div>
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button 
                className="start-btn"
                onClick={props.fetchQs}
            >
                Start quiz
            </button>
        </div>
    )
}