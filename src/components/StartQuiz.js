import blueBlob from "../blue-blob.png"
import yellowBlob from "../yellow-blob.png"
import OptionSelect from "./OptionSelect"

export default function StartQuiz(props) {
    return (
        <>
            <div className="title-card">
                <h1 className="title-card__header">Quizzical</h1>
                <p className="title-card__description">Test your skills with the ultimate quiz!</p>
                <label for="question-category">Select a category</label>
                <select name="question-category" id="question-category">
                    <option id="9">General Knowledge</option> 
                    <option id="10">Entertainment: Books</option> 
                    <option id="11">Entertainment: Film</option> 
                    <option id="12">Entertainment: Music</option> 
                    <option id="13">Entertainment: Musicals & Theatres</option> 
                    <option id="14">Entertainment: Television</option> 
                    <option id="15">Entertainment: Video Games</option> 
                    <option id="16">Entertainment: Board Games</option> 
                    <option id="17">Science & Nature</option> 
                    <option id="18">Science: Computers</option> 
                    <option id="19">Science: Mathematics</option> 
                    <option id="20">Mythology</option> 
                    <option id="21">Sports</option> 
                    <option id="22">Geography</option> 
                    <option id="23">History</option> 
                    <option id="24">Politics</option> 
                    <option id="25">Art</option> 
                    <option id="26">Celebrities</option> 
                    <option id="27">Animals</option> 
                    <option id="28">Vehicles</option> 
                    <option id="29">Entertainment: Comics</option> 
                    <option id="30">Science: Gadgets</option> 
                    <option id="31">Entertainment: Japanese Anime & Manga</option> 
                    <option id="32">Entertainment: Cartoon & Animations</option> 
                </select>
                <OptionSelect id='difficulty' title='difficulty' options={['any', 'easy', 'medium', 'hard']}/>
                <button 
                    className="title-card__start-btn"
                    onClick={props.fetchQs}
                >
                    Start quiz
                </button>
            </div>
            <img className="title-card__blue-blob" src={blueBlob} />
            <img className="title-card__yellow-blob" src={yellowBlob} />
        </>
    )
}