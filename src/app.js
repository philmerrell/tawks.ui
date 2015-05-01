import AppCtrl from './app.controller';
import './survey/survey.module';
import './core/core.module';
import './services/services.module';
import 'ui-router';
import 'angular-material';

angular
  .module('app', ['app.core', 'app.services', 'app.survey'])
  .controller('AppCtrl', AppCtrl)
  .config(function() {

  })

  .provider('runtimeStates', function runtimeStates($stateProvider) {
    // runtime dependencies for the service can be injected here, at the provider.$get() function.
    this.$get = function($q, $timeout, $state) { // for example
      return {
        addState: function(name, state) {
          $stateProvider.state(name, state);
        }
      };
    };
  });