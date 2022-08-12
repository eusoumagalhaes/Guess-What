//Styles
import './gameOver.css'

const GameOver = ({retry}) => {
  return (
    <div>
        {""}
       <h1>Game Over</h1> 
       <button className='btn' onClick={retry}>Try Again</button>
    </div>
  )
}

export default GameOver