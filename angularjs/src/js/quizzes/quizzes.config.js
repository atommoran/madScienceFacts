function QuizzesConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.quizzes', {
    url: '/quizzes',
    controller: 'QuizzesCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'quizzes/quizzes.html',
    title: 'Quizzes'
  });

};

export default QuizzesConfig;
