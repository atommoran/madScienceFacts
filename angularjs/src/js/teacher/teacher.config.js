function teacherConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.teacher', {
    url: '/VIPs',
    controller: 'teacherCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'teacher/teacher.html',
    title: 'VIPs'
  });

};

export default teacherConfig;
