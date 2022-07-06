export default function StartQuiz(props) {
    return (
        <div className="title-card">
            <h1 className="title-card__header">Quizzical</h1>
            <p className="title-card__description">Test your skills with the ultimate quiz!</p>
            <button 
                className="title-card__start-btn"
                onClick={props.fetchQs}
            >
                Start quiz
            </button>
        </div>
    )
}