import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core'

interface CardProps {
  title: string
  isAnswer: boolean
  formula: string
  answer: number | string
  buttonText: string
  handleSetIsAnswer: React.Dispatch<React.SetStateAction<boolean>>
}

interface CardState {}

// const { clickTest } = props

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const SimpleCard = (props: CardProps) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.pos} color="textSecondary">
          {props.title}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.formula}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.answer}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          color="default"
          variant="outlined"
          size="small"
          onClick={() => props.handleSetIsAnswer(!props.isAnswer)}
        >
          {props.buttonText}
        </Button>
      </CardActions>
    </Card>
  )
}

export default SimpleCard
