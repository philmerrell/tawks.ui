class MultiSelectCtrl {
  constructor($state, SurveyService) {
    let questionObj = $state.current.data.question;

    this.userResponse = {
      questionId: questionObj.Id,
      answer: []
    };

    this.questionId = questionObj.Id;
    this.currentState = parseInt($state.current.name, 10);
    this.surveyLength = SurveyService.getSurveyLength();
    this.questionText = questionObj.Content;
    this.responses = questionObj.Responses;

    this.$state = $state;
    this.SurveyService = SurveyService;

  }

  selectCheckbox(id, value) {
    var response = {
      answerId: id
    };

    if(value) {
      this.userResponse.answer.push(response);
    } else {
      var index = this.userResponse.answer.indexOf(response);
      this.userResponse.answer.splice(index, 1);
    }
  }

  lastQuestion() {
    if(this.currentState !== this.surveyLength - 1) {
      return false;
    } else {
      return true;
    }

  }

  goToNextQuestion() {
    this.SurveyService.addSurveyResponse(this.userResponse, this.currentState);
    console.log(this.SurveyService.getSurveyResponses());
    var state = this.currentState + 1;
    this.$state.go(state.toString());
  }

}

export default MultiSelectCtrl