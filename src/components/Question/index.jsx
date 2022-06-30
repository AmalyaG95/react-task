import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import styles from "./index.module.scss";
import { addAnswer, openAlert } from "../../redux/actionCreators";
import { selectQuestionData, selectResultsData } from "../../redux/selectors";
import { questions } from "../../data/questions";
import Alert from "../Alert";

const Question = () => {
    const dispatch = useDispatch();
    const { isOpenAlert } = useSelector(selectQuestionData);
    const { answers } = useSelector(selectResultsData);
    const navigate = useNavigate();
    const params = useParams();

    const question = questions.find((question) => question.id === params.id);
    const { id, text, options } = question;
    const nextQuestionIndex = questions.indexOf(question) + 1;

    const selectedAnswer = answers.find(
        (answer) => answer.questionId === question.id
    );

    const handleChange = (e) => {
        dispatch(addAnswer({ questionId: id, text: e.target.value }));
    };

    const handleGoPreviousPage = () => {
        if (questions[questions.indexOf(question)].id === "1") return;
        navigate(-1);
    };

    const handleGoNextPage = (e) => {
        if (
            questions.indexOf(question) === questions.length - 1 &&
            answers.length < questions.length
        ) {
            e.preventDefault();
            dispatch((openAlert()));
        }
    };

    return (
        <>
        <div className={styles.container}>
            <div>
                <h1>
                    {id}. {text}
                </h1>
                <div>
                    <input
                        type="radio"
                        name={text}
                        id={id}
                        value={options[0]}
                        checked={
                            selectedAnswer
                                ? selectedAnswer.text === options[0]
                                : false
                        }
                        onChange={handleChange}
                    />
                    <label htmlFor={id}>{options[0]}</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name={text}
                        id={id + "1"}
                        value={options[1]}
                        checked={
                            selectedAnswer
                                ? selectedAnswer.text === options[1]
                                : false
                        }
                        onChange={handleChange}
                    />
                    <label htmlFor={id + "1"}>{options[1]}</label>
                </div>
            </div>
            <div className={styles.buttonsWrapper}>
                <button onClick={handleGoPreviousPage} disabled={id === "1"}>
                    Previous
                </button>
                <Link
                    to={
                        nextQuestionIndex <= questions.length - 1
                            ? `/question/${questions[nextQuestionIndex].id}`
                            : "/results"
                    }
                    onClick={handleGoNextPage}
                >
                    {questions.indexOf(question) === questions.length - 1
                        ? "Finish"
                        : "Next"}
                </Link>
            </div>
        </div>
        {
            isOpenAlert && <Alert />
        }
        </>
    );
};

export default Question;
