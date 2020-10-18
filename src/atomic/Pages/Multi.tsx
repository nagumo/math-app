import React, { useState } from 'react'
import Card from '../Organisms/Card'

type MultiProps = {
  x: number
  y: number
}

const getRandomNumber = () => {
  return Math.floor(Math.sqrt(Math.random()) * 9) + 1
}

const getQuestion = (): MultiProps => {
  return {
    x: getRandomNumber(),
    y: getRandomNumber(),
  }
}

const multiQestion: MultiProps = getQuestion()

const getFormula = (props: MultiProps): string => {
  return `${props.x} x ${props.y}`
}

const getSub = (props: MultiProps): number => {
  return props.x * props.y
}

const Multi = (props: MultiProps) => {
  let [isAnswer, setIsAnswer] = useState(false)
  if (isAnswer) {
    props = multiQestion
  } else {
    props = getQuestion()
    multiQestion.x = props.x
    multiQestion.y = props.y
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

export default Multi
