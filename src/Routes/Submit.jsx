import * as React from "react";
import Button from "@mui/joy/Button";
import { CssVarsProvider } from "@mui/joy/styles";
import "../App.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CustomizedTables() {
  const {
    optionReducer: { selectedOptions },
    questionControllerReducer: { questions },
  } = useSelector((state) => state);

  const correctOptions = selectedOptions.filter(
    (option, i) => questions[i].answer === option
  );
  const attempted = selectedOptions.filter((option) => option);
  const navigate = useNavigate();

  return (
    <main className="m-auto mt-5 mb-5">
      <section className="result">
        <h1>Your Result</h1>

        <div className="score">
          <div className="your-score">{correctOptions.length}</div>
          <div className="total-score">of {questions.length}</div>
        </div>
        {correctOptions.length > 35 ? (
          <p>Well done, You scored higher than 75%.</p>
        ) : (
          <p>You scored less than 75%, Don&apos;t give up!!</p>
        )}
      </section>

      <section className="summary">
        <h2>Summary</h2>

        <div className="reaction">
          <div className="reaction-beauty">
            <div className="reaction-left">
              <div>Attempted</div>
            </div>

            <span>
              <strong>{attempted.length}</strong> / {questions.length}
            </span>
          </div>
        </div>

        <div className="memory">
          <div className="memory-beauty">
            <div className="memory-left">
              <div>Scored </div>
            </div>

            <span>
              <strong>{correctOptions.length}</strong> / {questions.length}
            </span>
          </div>
        </div>

        <div className="verbal">
          <div className="verbal-beauty">
            <div className="verbal-left">
              <div>Total Questions</div>
            </div>

            <span>
              <strong>{questions.length}</strong>
            </span>
          </div>
        </div>

        <CssVarsProvider>
          <Button
            type="submit"
            className="mt-3 w-100"
            variant="solid"
            color="primary"
            onClick={() => navigate("/answers")}
          >
            VIEW ALL ANSWERS
          </Button>

          <a href="/">
            <Button
              type="submit"
              className="mt-3 w-100"
              variant="solid"
              color="primary"
            >
              LEAVE
            </Button>
          </a>
        </CssVarsProvider>
      </section>
    </main>
  );
}
