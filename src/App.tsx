import React, {useState} from 'react'

//components
import QuestionCard from './components/QuestionCard'
import {Question, fetchQuiz, Difficulty, Category} from './API'

//styles
import {GlobalStyle, Wrapper} from './App.styles'

export type AnswerObject= {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS= 10;

function App() {
  
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions]= useState<Question[]>([]);
  const [number, setNumber]= useState(0);
  const [userAnswers, setUserAnswers]= useState<AnswerObject[]>([]);
  const [score, setScore]= useState(0);
  const [gameOver, setGameOver]= useState(true);

  // console.log(questions);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    
    const newQuestions = await fetchQuiz(TOTAL_QUESTIONS, Difficulty.Easy, Category.random);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver){
      //get user answers
      const answer = e.currentTarget.value;
      // console.log("CURRENT VALUE");
      // console.log(answer);
      // console.log("CORRECT VALUE");
      // console.log(questions[number].correct_answer);
      const correct = questions[number].correct_answer === answer;
      //add score if answer is correct
      if (correct) setScore(prev=> prev+1)
      
      const answerObject = {
        question: questions[number].question,
        //es6 same as answer: answer
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers(prev => [...prev, answerObject])
    }

  }

  const nextQuestion = () => {
    //move on to next question if not last
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    }else{
      setNumber(nextQuestion);
    }

  }

  return (
    <>
    <GlobalStyle />
    <Wrapper>
        <h1>Quitz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <div>
            {/* <form>
            <input placeholder= "number of questions"type="text" id="fname" name="fname" /><br/>
            <input placeholder= "difficulty" type="text" id="fname" name="fname" /><br/>
            <label>Choose a category:</label><br/>
            <select id="category" name="category">
              <option value="Linux">Linux</option>
              <option value="Bash">Bash</option>
              <option value="Uncategorized">Uncategorized</option>
              <option value="Docker">Docker</option>
            </select>
            </form> */}
            <button className="start" onClick={startQuiz}>
              Start
            </button>
          </div>
        ): null}
        {!gameOver ? <p className="score">Score: {score} </p> : null}
        {loading && <p>Loading Questions...</p>}
        {!loading && !gameOver && (
          <QuestionCard
          qNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
          />
        )}
        {!gameOver && !loading && userAnswers.length === number+ 1 && number!== TOTAL_QUESTIONS - 1 ? (
         <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
        ): null }

      </Wrapper>
    </>
  );
}

export default App;
