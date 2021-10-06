import angular from 'angular';

// Import our app config files
import constants  from './config/app.constants';
import appConfig  from './config/app.config';
import appRun     from './config/app.run';
import '@uirouter/angularjs';
// Import our templates file (generated by Gulp)
import './config/app.templates';
// Import our app functionaity
import './layout';
import './home';
import './services';
import './ltwo';
import './ltwop';
import './teacher';
import './quizzes';
import './quiz_ltwo';

// Create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'app.layout',
  'app.home',
  'app.services',
  'app.ltwo',
  'app.ltwop',
  'app.teacher',
  'app.quizzes',
  'app.quiz_ltwo'
];

// alert=function (){}
// console.log = function() {}
// Mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
