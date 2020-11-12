function LTwoConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.ltwo', {
    url: '/L2',
    controller: 'LTwoCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'ltwo/ltwo.html',
    title: 'L2'
  });

};

export default LTwoConfig;
