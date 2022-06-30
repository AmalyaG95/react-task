import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";
import { questions } from "../../data/questions";
import { resetAnswers } from "../../redux/actionCreators";
import { selectResultsData } from "../../redux/selectors";

const Results = () => {
    const dispatch = useDispatch();
    const { answers } = useSelector(selectResultsData);

    const rightAnswers = answers.filter(
        (answer, index) => answer.text === questions[index]?.answer
    );

    const handleClick = () => {
        dispatch(resetAnswers());
    };

    return (
        <div className={styles.container}>
            <h1>Results</h1>
            <h3>Your score is {rightAnswers.length} / 10</h3>
            {questions.map(({ id, text, options, answer }, index) => (
                <div key={id}>
                    <h2>
                        {id}. {text}
                    </h2>

                    <div>
                        <input
                            type="radio"
                            name={text}
                            id={id}
                            value={options[0]}
                            checked={answers[index]?.text === options[0]}
                            disabled
                        />
                        <label htmlFor={id}>{options[0]}</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name={text}
                            id={id + "1"}
                            value={options[1]}
                            checked={answers[index]?.text === options[1]}
                            disabled
                        />
                        <label htmlFor={id + "1"}>{options[1]}</label>
                    </div>
                    <p
                        style={{
                            color: `${
                                answers[index]?.text === answer
                                    ? "green"
                                    : "red"
                            } `,
                        }}
                    >
                        {answers[index]?.text === answer ? "Right" : "Wrong"}{" "}
                        answer
                    </p>
                </div>
            ))}
            <Link to="/" onClick={handleClick}>
                {rightAnswers.length === answers.length
                    ? "Go Home Page"
                    : "Try again"}
            </Link>
        </div>
    );
};

export default Results;
