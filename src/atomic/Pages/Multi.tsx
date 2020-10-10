import React, { useState } from 'react'
import Card from '../Organisms/Card'

type Props = {
  x: number
  y: number
}

const getRandomNumber = () => {
  return Math.floor(Math.sqrt(Math.random()) * 9) + 1
}

const getQuestion = (): Props => {
  return {
    x: getRandomNumber(),
    y: getRandomNumber(),
  }
}

const subQestion: Props = getQuestion()

const getFormula = (props: Props): string => {
  return `${props.x} x ${props.y}`
}

const getSub = (props: Props): number => {
  return props.x * props.y
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
        title="かけ算九九"
        isAnswer={isAnswer}
        formula={getFormula(props)}
        answer={isAnswer ? getSub(props) : '???'}
        buttonText={isAnswer ? '次の問題' : '答え'}
        handleSetIsAnswer={setIsAnswer}
      />
    </section>
  )
}

export default Sub
