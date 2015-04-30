class AppCtrl {
  constructor($mdSidenav, $state, SurveyService) {
    this.$mdSidenav = $mdSidenav;
    this.$state = $state;
    this.title = 'TAWKS';
    this.SurveyService = SurveyService;
    this.loadSurvey();

  }

  go (state) {
    this.$state.go(state);
  }

  loadSurvey() {
    this.SurveyService.getSurvey()
      .then(this.SurveyService.createSurveyStates)
      .then(this.SurveyService.startSurvey);
  }

  toggleSideMenu() {
    this.$mdSidenav('left').toggle();

  }
}

export default AppCtrl