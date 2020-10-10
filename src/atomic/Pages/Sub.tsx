import React, { useState } from 'react'
import Card from '../Organisms/Card'

type Props = {
  x: number
  y: number
}

const getQuestion = (): Props => {
  const x = Math.floor(Math.sqrt(Math.random()) * 10) + 1
  return {
    x: x,
    y: Math.floor(Math.random() * x) + 1,
  }
}

const subQestion: Props = getQuestion()

const getFormula = (props: Props): string => {
  return `${props.x} - ${props.y}`
}

const getSub = (props: Props): number => {
  return props.x - props.y
}

const Sub = (props: Props) => {
  let [isAnswer, setIsAnswer] = useState(false)
  if (isAnswer) {
    props = subQestion
  } else {
    props = getQuestion()
    subQestion.x = props.x
    subQestion.y = props.y
  }
  return (
    <section className="main-contents">
      <Card
        title="ひきざん"
        isAnswer={isAnswer}
        formula={getFormula(props)}
        answer={isAnswer ? getSub(props) : '???'}
        buttonText={isAnswer ? 'つぎのもんだい' : 'こたえ'}
        handleSetIsAnswer={setIsAnswer}
      />
    </section>
  )
}

export default Sub
