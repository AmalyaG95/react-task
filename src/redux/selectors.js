const selectResultsData = (state) => ({
  answer: state.ResultsState.answer,
  answers: state.ResultsState.answers,
})

export {
  selectResultsData,
};