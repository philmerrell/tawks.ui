

class MultiSelectCtrl {
  constructor($state, Services) {
    let questionObj = $state.current.data.question;

    this.userResponse = {
      questionId: questionObj.Id,
      answer: []
    };

    this.questionId = questionObj.Id;
    this.currentState = parseInt($state.current.name, 10);
    this.surveyLength = Services.getSurveyLength();
    this.questionText = questionObj.Content;
    this.responses = questionObj.Responses;
  }

}

export default MultiSelectCtrl