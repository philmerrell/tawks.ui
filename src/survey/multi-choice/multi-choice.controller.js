import SurveyCtrl from '../survey.controller';

class MultiSelectCtrl extends SurveyCtrl {
  constructor($mdDialog, $state, SurveyService) {
    super($mdDialog, $state, SurveyService);

  }

  selectRadio(id) {
    var response = {
      answerId: id
    };

    this.userResponse.answer.push(response);

    this.goToNextQuestion();
  }
}

export default MultiSelectCtrl