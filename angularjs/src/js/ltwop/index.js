import angular from 'angular';

// Create the module where our functionality can attach to
let lTwoPModule = angular.module('app.ltwop', []);

// Include our UI-Router config settings
import LTwoPConfig from './ltwop.config';
lTwoPModule.config(LTwoPConfig);

// Controllers
import LTwoPCtrl from './ltwop.controller';
lTwoPModule.controller('LTwoPCtrl', LTwoPCtrl);

export default lTwoPModule;
