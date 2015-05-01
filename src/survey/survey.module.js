'use strict';

import SurveyCtrl from './survey.controller';
import MultiChoiceCtrl from './multi-choice/multi-choice.controller';
import MultiSelectCtrl from './multi-select/multi-select.controller';
import StaggeredMultiSelectCtrl from './staggered-multi-select/staggered-multi-select.controller';

angular
  .module('app.survey', [])
  .controller('SurveyCtrl', SurveyCtrl)
  .controller('MultiChoiceCtrl', MultiChoiceCtrl)
  .controller('MultiSelectCtrl', MultiSelectCtrl)
  .controller('StaggeredMultiSelectCtrl', StaggeredMultiSelectCtrl)
;
