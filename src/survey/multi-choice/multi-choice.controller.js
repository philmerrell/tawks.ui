

class MultiSelectCtrl {
  constructor($mdDialog, $state, SurveyService) {
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
    this.$mdDialog = $mdDialog;
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

  saveSurvey(ev) {

      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application
      // to prevent interaction outside of dialog
      this.$mdDialog.show(
        this.$mdDialog.alert()
          .parent(angular.element(document.body))
          .title('Thank You')
          .content('You can close your browser')
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')
          .targetEvent(ev)
      );
  }

}

export default MultiSelectCtrl