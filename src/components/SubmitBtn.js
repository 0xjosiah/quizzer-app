export default function SubmitBtn({ className, handleClick, btnMessage }) {
    return (
        <button className={className} onClick={handleClick} >
            {btnMessage}
        </button>
    )
}