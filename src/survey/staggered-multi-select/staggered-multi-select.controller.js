class StaggeredMultiSelectCtrl {
  constructor() {

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

export default StaggeredMultiSelectCtrl