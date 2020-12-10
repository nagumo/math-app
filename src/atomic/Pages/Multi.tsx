import React, { useState } from 'react'
import Card from '../Organisms/Card'
import { getRandomInteger } from '../../AppUtils/AppUtils'

type MultiProps = {
  x: number
  y: number
  title: string
}

const getQuestion = (title: string): MultiProps => {
  return {
    x: getRandomInteger(9, 1),
    y: getRandomInteger(9, 1),
    title: title,
  }
}

const multiQestion: Partial<MultiProps> = {}

const getFormula = (props: MultiProps): string => {
  return `${props.x} x ${props.y}`
}

const getSub = (props: MultiProps): number => {
  return props.x * props.y
}

const Multi = (props: MultiProps) => {
  let [isAnswer, setIsAnswer] = useState(false)
  if (isAnswer) {
    props = getQuestion(props.title)
  } else {
    props = getQuestion(props.title)
    multiQestion.x = props.x
    multiQestion.y = props.y
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

export default Multi
