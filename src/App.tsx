import React, {useState} from 'react'

//components
import QuestionCard from './components/QuestionCard'
import {fetchQuiz, Difficulty, Category} from './API'

const TOTAL_QUESTIONS= 20;

function App() {
  
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions]= useState([]);
  const [number, setNumber]= useState(0);
  const [userAnswers, setUserAnswers]= useState([]);
  const [score, setScore]= useState(0);
  const [gameOver, setGameOver]= useState(true);

  
  console.log(fetchQuiz(TOTAL_QUESTIONS, Difficulty.random, Category.random))


  const startQuiz = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startQuiz}>
        Start
      </button>
      <p className="score">Score: </p>
      {loading ? (
        <p>Loading Questions...</p>
      ) : (
        <>
          {/* <QuestionCard
            qNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          /> */}
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        </>
      )}
    </div>
  );
}

export default App;
