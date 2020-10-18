import React, { useState } from 'react'
import Card from '../Organisms/Card'

type SubProps = {
  x: number
  y: number
}

const getQuestion = (): SubProps => {
  const x = Math.floor(Math.sqrt(Math.random()) * 10) + 1
  return {
    x: x,
    y: Math.floor(Math.random() * x) + 1,
  }
}

const subQestion: SubProps = getQuestion()

const getFormula = (props: SubProps): string => {
  return `${props.x} - ${props.y}`
}

const getSub = (props: SubProps): number => {
  return props.x - props.y
}

const Sub: React.FC<SubProps> = (props) => {
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
