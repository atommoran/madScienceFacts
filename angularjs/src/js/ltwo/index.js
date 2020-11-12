import angular from 'angular';

// Create the module where our functionality can attach to
let lTwoModule = angular.module('app.ltwo', []);

// Include our UI-Router config settings
import LTwoConfig from './ltwo.config';
lTwoModule.config(LTwoConfig);

// Controllers
import LTwoCtrl from './ltwo.controller';
lTwoModule.controller('LTwoCtrl', LTwoCtrl);

export default lTwoModule;
