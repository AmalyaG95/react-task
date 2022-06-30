const selectQuestionData = (state) => ({
  isOpenAlert: state.QuestionState.isOpenAlert,
})

const selectResultsData = (state) => ({
  answers: state.ResultsState.answers,
})

export {
  selectQuestionData,
  selectResultsData,
};