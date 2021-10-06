import angular from 'angular';

// Create the module where our functionality can attach to
let quizLTwoModule = angular.module('app.quiz_ltwo', []);

// Include our UI-Router config settings
import QuizLTwoConfig from './quiz_ltwo.config';
quizLTwoModule.config(QuizLTwoConfig);

// Controllers
import QuizLTwoCtrl from './quiz_ltwo.controller';
quizLTwoModule.controller('QuizLTwoCtrl', QuizLTwoCtrl);

export default quizLTwoModule;
