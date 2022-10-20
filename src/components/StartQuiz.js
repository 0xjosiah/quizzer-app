import blueBlob from "../assets/blue-blob.png"
import yellowBlob from "../assets/yellow-blob.png"
import OptionSelect from "./OptionSelect"
import SubmitBtn from "./SubmitBtn"

export default function StartQuiz({ fetchQs, handleSelectChange, categoryOptions, difficultyOptions }) {

    return (
        <>
            <div className="title-card">
                <h1 className="title-card__header">Quizzical</h1>
                <p className="title-card__description">Test your skills with the ultimate quiz!</p>
                <OptionSelect id="question_category" title="question category" options={categoryOptions} handleSelectChange={handleSelectChange} />
                <OptionSelect id='difficulty' title='difficulty' options={difficultyOptions} handleSelectChange={handleSelectChange} />
                <SubmitBtn className="title-card__start-btn" handleClick={fetchQs} btnMessage="Start quiz" />
            </div>
            <img className="title-card__blue-blob" src={blueBlob} />
            <img className="title-card__yellow-blob" src={yellowBlob} />
        </>
    )
}