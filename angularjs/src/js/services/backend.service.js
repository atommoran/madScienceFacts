export default class Backend {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
  }

  login(year, password) {
    return this._$http({
      url: `${this._AppConstants.api}/login`,
      method: 'POST',
      data: {'year': year, 'password': password}
    }).then((res) => res.data);
  }

  quiz(year, password) {
    return this._$http({
      url: `${this._AppConstants.api}/quiz`,
      method: 'POST',
      data: {'year': year, 'password': password}
    }).then((res) => res.data);
  }
}
