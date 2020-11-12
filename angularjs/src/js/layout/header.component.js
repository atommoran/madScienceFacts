class AppHeaderCtrl {
  constructor(AppConstants, $state) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$state = $state;
  }

}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

export default AppHeader;
