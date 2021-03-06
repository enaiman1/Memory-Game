import React, { useState, useEffect } from 'react'
import Board from './components/board'


import initializeDeck from './deck'
import { isNameStartChar } from 'xmlchars/xml/1.0/ed5';

export default function App() {

  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  const [solved,setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
 

  // a function to make sure the cards only get called everytime it is rendered
  useEffect(()=> {
    resizeBoard()
    // generates a deck of cards
    setCards(initializeDeck())
  }, [])

  useEffect(() => {
    preloadImage()
  }, cards)

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard)
    return () => window.removeEventListener("resize", resizeListener)
  })

  const handleClick = (id) => {
   setDisabled(true)
   if (flipped.length === 0) {
    setFlipped([id])
    setDisabled(false)
   } else {
     if(sameCardClicked(id))return
     setFlipped([flipped[0], id])
     if(isMatch(id)) {
       setSolved([... solved, flipped[0], id])
       resetCards()
     } else {
       setTimeout(resetCards, 2000)
     }
   }
  }

  const preloadImage = () => {
    cards.map(card => {
      const src = `/img/${card.type}.png`
      new Image().src = src
    })
  }

const resetCards = () => {
  setFlipped([])
  setDisabled(false)
}

const sameCardClicked = (id) => flipped.includes(id)

const isMatch = (id) => {
  const clickedCard = cards.find((card) => card.id === id)
  const flippedCard = cards.find((card) => flipped[0] === card.id)
  return flippedCard.type === clickedCard.type
}

const resizeBoard = () => {
  setDimension(
    Math.min(
    document.documentElement.clientWidth,
    document.documentElement.clientHeight,
  ),
  )
}

  return (
    <div>

      <h2>Can you remember where the cards are?</h2>
      <Board
      dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />

    </div>
  )
}
