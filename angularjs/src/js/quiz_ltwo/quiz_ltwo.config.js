function QuizLTwoConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.quiz_ltwo', {
    url: '/quizL2',
    controller: 'QuizLTwoCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'quiz_ltwo/quiz_ltwo.html',
    title: 'L2 Quiz'
  });

};

export default QuizLTwoConfig;
