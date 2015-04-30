//class SurveyService {
//
//  /*@ngInject*/
//  constructor($http) {
//    "use strict";
//    this.$http = $http;
//  }
//}

var SurveyService = function ($http, $q, $state, runtimeStates) {

  var surveyQuestions, surveyResponses;

  var service = {
    getSurvey           : getSurvey,
    getSurveyLength     : getSurveyLength,
    getEndOfDay         : getEndOfDay,
    createSurveyStates  : createSurveyStates,
    startSurvey         : startSurvey,
    initSurveyResponse  : initSurveyResponses,
    addSurveyResponse   : addSurveyResponse,
    getSurveyResponses  : getSurveyResponses
  };

  return service;


  function createSurveyStates(getSurveyResultObj) {

    var defer = $q.defer();
    initSurveyResponses(getSurveyResultObj.data[1].Id);
    surveyQuestions = getSurveyResultObj.data[1].Questions;

    angular.forEach(surveyQuestions, function(question, index) {
      var stateObj = createStateObject(question, index);
      runtimeStates.addState(index.toString(), stateObj);
    });

    defer.resolve(surveyQuestions);

    return defer.promise;

    function createStateObject(question, index) {

      var stateObject;
      switch(question.QuestionType) {
        case 'Multi-Select':
          stateObject = {
            url: 'survey/'+index.toString(),
            views: {
              "main": {
                templateUrl: './src/survey/multi-select/multi-select.tpl.html',
                controller: 'MultiSelectCtrl as vm'
              }
            },
            data: {
              question: question
            }
          };
          break;
        case 'Multi-Choice':
          stateObject = {
            url: 'survey/'+index.toString(),
            views: {
              "main": {
                templateUrl: './src/survey/multi-choice/multi-choice.tpl.html'
                //controller: 'MultiChoiceCtrl as vm'
              }
            },
            data: {
              question: question
            }
          };
          break;
        case 'Staggered Multi-Select':
          stateObject = {
            url: 'survey/'+index.toString(),
            views: {
              "main": {
                templateUrl: './src/survey/staggered-multi-select/staggered-multi-select.tpl.html'
                //controller: 'StaggeredMultiSelectCtrl as vm'
              }
            },
            data: {
              question: question
            }
          };
          break;

      }

      return stateObject;

    }


  }

  function getSurvey() {
    return $http.get('https://tawks.azurewebsites.net/api/survey');
  }

  function getSurveyLength() {
    return surveyQuestions.length;
  }

  function getEndOfDay() {
    return $http.get('', {cache:true});
  }

  function startSurvey() {
    $state.go('0');

  }

  function initSurveyResponses(surveyId) {
    surveyResponses = {
      surveyId: surveyId,
      questions: []
    };
  }

  function addSurveyResponse(response, index) {
    surveyResponses.questions[index] = response;
  }

  function getSurveyResponses() {
    return surveyResponses;
  }

};

export default SurveyService