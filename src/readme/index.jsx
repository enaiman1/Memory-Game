import React from 'react'
import Tech from './tech'
import Chapters from './chapters'
import Github from './github'

export default function Readme() {
  return (
    <div>
      <h1>ReactU Episode #29</h1>
      <h2>Building a Memory Game</h2>
      <p>
        In today's example we will be building a memory game, where cards are
        displayed on the screen, face down, and as the user 'flips' them, two at
        a time, if there is a match, the cards stay face up. If not, they revert
        after a couple of seconds to face down and the game continues until the
        user gets all the matches.
      </p>

      <Tech />
      <Chapters />
      <Github />
    </div>
  )
}
