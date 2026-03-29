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

  const checWinner = () => {
    for (const combo of Combos)
  }

  const updateBoard = (index) => {
    if (board[index]) return

    const newBoard = [ ... board]
    newBoard[index] = turn 
    setBoard(newBoard)

    const newTurn = turn === Turns.x ? Turns.o : Turns.x 
    setTurn(newTurn)
  }

  return (
    <>
      <main className='board'>
        <h1>
          Tres en Raya
        </h1>
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
      </main>
    </>
  )
}

export default App
