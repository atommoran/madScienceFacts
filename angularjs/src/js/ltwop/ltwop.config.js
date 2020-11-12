function LTwoPConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.ltwop', {
    url: '/L2P',
    controller: 'LTwoPCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'ltwop/ltwop.html',
    title: 'L2P'
  });

};

export default LTwoPConfig;
