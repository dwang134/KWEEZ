import React from 'react'
import {AnswerObject} from '../App'
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: any;
  callback: (e: React.MouseEvent<HTMLButtonElement>)=> void;
  userAnswer: AnswerObject | undefined;
  qNumber: number;
  totalQuestions: number;
}


const QuestionCard: React.FC<Props>= ({question, answers, callback, userAnswer, qNumber, totalQuestions}) => {
  
  return (
    
    <Wrapper>
      <p className= "number">
        Question: {qNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML= {{__html: question}} />
      {Object.keys(answers).map((answer, index)=> (
      answers[answer] !== null &&
        <ButtonWrapper key= {index} correct= {userAnswer?.correctAnswer=== answer} userClicked={userAnswer?.answer === answer}>
          <button disabled= {userAnswer? true : false} value= {answer} onClick = {callback}>
            <span dangerouslySetInnerHTML={{ __html: answers[answer] }} />
          </button>
        </ButtonWrapper>
        
      ))}

      {/* {answers.map((answer) => (
        <div>
          <button disabled= {userAnswer} onClick = {callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))} */}
    </Wrapper>
  )
}

export default QuestionCard