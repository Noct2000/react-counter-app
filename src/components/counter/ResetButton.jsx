import './ResetButton.css'

export default function ResetButton({setCountMethod}) {

    return (
        <button 
            className="resetButton"
            onClick={() => setCountMethod(0)}
        >Reset</button>
    )
}
