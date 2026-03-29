import { useState } from "react"

const Turns = {
  x: 'X',
  o: 'O'
}

const Combos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }
  
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(Turns.x)
  const [winner, setWinner] = useState(null) //null no ganador y false empate :p

  const checWinner = (checkBoard) => {
    for (const combo of Combos) {
      const [a, b, c] = combo
      if (checkBoard[a] && checkBoard[a] === checkBoard[b] && checkBoard[a] === checkBoard[c]) 
        {
        return checkBoard[a]
      }
    }
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(Turns.x)
    setWinner(null)
  }
  
  const checkEndGame = (newBoard) => {
    return newBoard.every(square => square !== null)
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    
    const newBoard = [ ... board]
    newBoard[index] = turn 
    setBoard(newBoard)

    const newTurn = turn === Turns.x ? Turns.o : Turns.x 
    setTurn(newTurn)

    const newWinner = checWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
   } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <>
      <main className='board'>
        <h1>
          Tres en Raya
        </h1>
        <button
        onClick={resetGame}
        >Empezar de cero</button>
        <section className='game'>
          {
            board.map((_, index)=> {
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {board[index]}
                </Square>
              )
            })
          }
        </section>
        <section className="turn">
          <Square isSelected={turn === Turns.x}>{Turns.x}</Square>
          <Square isSelected={turn === Turns.o}>{Turns.o}</Square>
        </section>
        
        {
          winner !== null && (
            <section className="winner">
              <div className="text">
                <h2>
                  {
                    winner === false
                    ? 'Empate'
                    : 'El ganador es: ' + winner
                  }
                </h2>
                <header className="win">
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button
                  onClick={resetGame}
                  >Jugar de nuevo</button>
                </footer>
                </div>
            </section>
          )
        }
      </main>
    </>
  )
}

export default App
