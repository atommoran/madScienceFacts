class HomeCtrl {
  constructor(AppConstants, $scope) {
    'ngInject';

    this.showText=false;
  }

  rotateText() {
    if (this.showText) {
      this.showText=false;
    } else {
      this.showText=true;
    }
  }

}

export default HomeCtrl;
