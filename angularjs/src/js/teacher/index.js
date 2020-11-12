import angular from 'angular';

// Create the module where our functionality can attach to
let teacherModule = angular.module('app.teacher', []);

// Include our UI-Router config settings
import teacherConfig from './teacher.config';
teacherModule.config(teacherConfig);

// Controllers
import teacherCtrl from './teacher.controller';
teacherModule.controller('teacherCtrl', teacherCtrl);

export default teacherModule;
