import { useEffect } from "react"

export default function Answer({ answer, setAnswers, question, quizResults }) {
    
    let className;

    if(!quizResults.isSubmitted) {
        className = question.userAnswer === answer ? "quiz__answer-btn-selected" : "quiz__answer-btn"
    }
    if(quizResults.isSubmitted) {
        className = question.userAnswer === question.correct_answer && question.userAnswer === answer ? "quiz__answer-btn-correct"
            : question.correct_answer === answer ? "quiz__answer-btn-correct"
            : question.userAnswer === answer ? "quiz__answer-btn-incorrect"
            : "quiz__answer-btn-unselected"
    }
    
    return (
        <button 
            className={className}
            onClick={!quizResults.isSubmitted ? () => setAnswers(question.id, answer) : undefined}
            dangerouslySetInnerHTML={{__html:`${answer}`}}
            key={answer}
        ></button>
    )
}