import React, { useState } from 'react'
import Card from '../Organisms/Card'
import { getRandomInteger } from '../../AppUtils/AppUtils'

type SubProps = {
  x: number
  y: number
  title: string
}

const getQuestion = (title: string): SubProps => {
  const x = getRandomInteger(10, 1)
  return {
    x: x,
    y: getRandomInteger(x, 1),
    title: title,
  }
}

const subQestion: Partial<SubProps> = {}

const getFormula = (props: SubProps): string => {
  return `${props.x} - ${props.y}`
}

const getSub = (props: SubProps): number => {
  return props.x - props.y
}

const Sub: React.FC<SubProps> = (props) => {
  let [isAnswer, setIsAnswer] = useState(false)
  if (isAnswer) {
    props = getQuestion(props.title)
  } else {
    props = getQuestion(props.title)
    subQestion.x = props.x
    subQestion.y = props.y
  }
  return (
    <section className="main-contents">
      <Card
        title={props.title}
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
