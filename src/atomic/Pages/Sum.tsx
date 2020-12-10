import React, { useState } from 'react'
import Card from '../Organisms/Card'
import { getRandomInteger } from '../../AppUtils/AppUtils'

type SumProps = {
  x: number
  y: number
  title: string
}

const getQuestion = (title: string): SumProps => {
  return {
    x: getRandomInteger(9, 1),
    y: getRandomInteger(9, 1),
    title: title,
  }
}

const sumQestion: Partial<SumProps> = {}

const getFormula = (props: SumProps): string => {
  return `${props.x} + ${props.y}`
}

const getSub = (props: SumProps): number => {
  return props.x + props.y
}

const Sum = (props: SumProps) => {
  let [isAnswer, setIsAnswer] = useState(false)
  if (isAnswer) {
    props = getQuestion(props.title)
  } else {
    props = getQuestion(props.title)
    sumQestion.x = props.x
    sumQestion.y = props.y
  }
  return (
    <section className="main-contents">
      <Card
        title={props.title}
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
