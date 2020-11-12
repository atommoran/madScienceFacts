class LTwoCtrl {
  constructor(AppConstants, Backend, $scope) {
    'ngInject';

    this._Backend = Backend;
    this.password = "";

    this.loggedIn = false;
    this.logFail = false;

    this.lastAttempt = "";

  }

  login() {
    this._Backend.login("L2", this.password.toLowerCase()).then(
      (res) => {
        if (res.login=="Success") {
          this.loggedIn = true;
          this.facts = res.facts;
          for (var i = 0; i < this.facts.length; i++) {
            this.facts[i].clicked = false;
          }
        } else if (res.login=="Failed") {
          this.loggedIn = false;
          this.logFail = true;
          this.lastAttempt = this.password;
        }
      },
      (err) => {
        this.loggedIn = false;
        alert(err)
        console.log(err.data.errors);
      }
    );
  }

  select(selectedFact) {
    for (var i = 0; i < this.facts.length; i++) {
      if (selectedFact == this.facts[i]) {
        this.facts[i].clicked = !this.facts[i].clicked;
      } else {
        this.facts[i].clicked = false;
      }
    }
  }
}

export default LTwoCtrl;
