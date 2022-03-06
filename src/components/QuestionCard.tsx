import React from 'react'
import {AnswerObject} from '../App'

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
    <div>
      <p className= "number">
        Question: {qNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML= {{__html: question}} />
      {Object.keys(answers).map((answer, index)=> (
      answers[answer] !== null &&
        <div key= {index}>
          <button disabled= {userAnswer? true : false} value= {answer} onClick = {callback}>
            <span dangerouslySetInnerHTML={{ __html: answers[answer] }} />
          </button>
        </div>
        
      ))}

      {/* {answers.map((answer) => (
        <div>
          <button disabled= {userAnswer} onClick = {callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))} */}
    </div>
  )
}

export default QuestionCard