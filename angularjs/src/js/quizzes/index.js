import angular from 'angular';

// Create the module where our functionality can attach to
let quizzesModule = angular.module('app.quizzes', []);

// Include our UI-Router config settings
import QuizzesConfig from './quizzes.config';
quizzesModule.config(QuizzesConfig);


// Controllers
import QuizzesCtrl from './quizzes.controller';
quizzesModule.controller('QuizzesCtrl', QuizzesCtrl);


export default quizzesModule;
