import { useEffect, useRef, useState } from "react"
import blueBlob from "../blue-blob.png"
import yellowBlob from "../yellow-blob.png"
import OptionSelect from "./OptionSelect"

export default function StartQuiz({ fetchQs, handleSelectChange, categoryOptions }) {
    const difficultyOptions = [
        {id: 'any', name: 'any'},
        {id: 'easy', name: 'easy'},
        {id: 'medium', name: 'medium'},
        {id: 'hard', name: 'hard'},
    ]

    return (
        <>
            <div className="title-card">
                <h1 className="title-card__header">Quizzical</h1>
                <p className="title-card__description">Test your skills with the ultimate quiz!</p>
                <OptionSelect id="question_category" title="question category" options={categoryOptions} handleSelectChange={handleSelectChange} />
                <OptionSelect id='difficulty' title='difficulty' options={difficultyOptions} handleSelectChange={handleSelectChange} />
                <button 
                    className="title-card__start-btn"
                    onClick={fetchQs}
                >
                    Start quiz
                </button>
            </div>
            <img className="title-card__blue-blob" src={blueBlob} />
            <img className="title-card__yellow-blob" src={yellowBlob} />
        </>
    )
}