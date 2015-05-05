import SurveyCtrl from '../survey.controller';

class MultiSelectCtrl extends SurveyCtrl {
  constructor($mdDialog, $state, SurveyService) {
    super($mdDialog, $state, SurveyService);
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
}

export default MultiSelectCtrl