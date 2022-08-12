//Styles
import './game.css'

const game = ({verifyLetter}) => {
  return (
    <div className='game'>
        <p className="points">
            <span>Score: 000</span>
        </p>
        <h1>Guess the Word</h1>
        <h3 className="tip">
            <span>Tip:</span>
        </h3>
        <div className="wordContainer">
            <span className="letter">A</span>
            <span className="blankSquare"></span>
        </div>
        <div className="letterContainer">
            <form>
                <input type="text" name="letter" maxLength="1" required/>
            </form>
        </div>
        <button className='btn' onClick={verifyLetter}>PLAY</button>
        <div className="wrongLettersContainer">
            <p></p>
        </div>
    </div>
  )
}

export default game