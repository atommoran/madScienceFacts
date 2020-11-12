import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

import BackendService from './backend.service';
servicesModule.service('Backend', BackendService);

export default servicesModule;
