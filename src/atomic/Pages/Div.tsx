import React, { useState } from 'react'
import Card from '../Organisms/Card'
import { getRandomInteger } from '../../AppUtils/AppUtils'

type DivProps = {
  divided: number
  divisor: number
  answer: number
  title: string
}

const getQuestion = (title: string): DivProps => {
  const divisor = getRandomInteger(9, 1)
  const answer = getRandomInteger(9, 1)
  return {
    divisor: divisor,
    answer: answer,
    divided: divisor * answer,
    title: title,
  }
}

const DivQestion: Partial<DivProps> = {}

const getFormula = (props: DivProps): string => {
  return `${props.divided} ÷ ${props.divisor}`
}

const getDiv = (props: DivProps): number => {
  return props.answer
}

const Div = (props: DivProps) => {
  let [isAnswer, setIsAnswer] = useState(false)
  if (isAnswer) {
    props = getQuestion(props.title)
  } else {
    props = getQuestion(props.title)
    DivQestion.divided = props.divided
    DivQestion.divisor = props.divisor
    DivQestion.answer = props.answer
  }
  return (
    <section className="main-contents">
      <Card
        title={props.title}
        isAnswer={isAnswer}
        formula={getFormula(props)}
        answer={isAnswer ? getDiv(props) : '???'}
        buttonText={isAnswer ? '次の問題' : '答え'}
        handleSetIsAnswer={setIsAnswer}
      />
    </section>
  )
}

export default Div
