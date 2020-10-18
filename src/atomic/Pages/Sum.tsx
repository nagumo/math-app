import React, { useState } from 'react'
import Card from '../Organisms/Card'

type SumProps = {
  x: number
  y: number
}

const getRandomNumber = () => {
  return Math.floor(Math.sqrt(Math.random()) * 9) + 1
}

const getQuestion = (): SumProps => {
  return {
    x: getRandomNumber(),
    y: getRandomNumber(),
  }
}

const sumQestion: SumProps = getQuestion()

const getFormula = (props: SumProps): string => {
  return `${props.x} + ${props.y}`
}

const getSub = (props: SumProps): number => {
  return props.x + props.y
}

const Sum = (props: SumProps) => {
  let [isAnswer, setIsAnswer] = useState(false)
  if (isAnswer) {
    props = sumQestion
  } else {
    props = getQuestion()
    sumQestion.x = props.x
    sumQestion.y = props.y
  }
  return (
    <section className="main-contents">
      <Card
        title="たしざん"
        isAnswer={isAnswer}
        formula={getFormula(props)}
        answer={isAnswer ? getSub(props) : '???'}
        buttonText={isAnswer ? '次の問題' : '答え'}
        handleSetIsAnswer={setIsAnswer}
      />
    </section>
  )
}

export default Sum
