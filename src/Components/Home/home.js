//Styles
import './home.css'

const home = ({startGame}) => {
  return (
    <div className='home'>
        <h1>Guess The Marvel</h1>
        <p>Click on the button bellow and start the guessing</p>
        <button className='btn' onClick={startGame}>BEGIN</button>
    </div>
  )
}

export default home