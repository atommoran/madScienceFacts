class teacherCtrl {
  constructor(AppConstants, Backend, $scope) {
    'ngInject';

    this._Backend = Backend;
    this.password = "";

    this.loggedIn = false;
    this.logFail = false;

    this.lastAttempt = "";

  }

  login() {
    this._Backend.login("Teachers", this.password.toLowerCase()).then(
      (res) => {
        if (res.login=="Success") {
          this.loggedIn = true;
          this.l2facts = res.L2.facts;
          this.l2pfacts = res.L2P.facts;
          for (var i = 0; i < this.l2facts.length; i++) {
            this.l2facts[i].clicked = false;
          }
          for (var i = 0; i < this.l2pfacts.length; i++) {
            this.l2pfacts[i].clicked = false;
          }
          this.currentYear = true;
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

  l2select(selectedFact) {
    for (var i = 0; i < this.l2facts.length; i++) {
      if (selectedFact == this.l2facts[i]) {
        this.l2facts[i].clicked = !this.l2facts[i].clicked;
      } else {
        this.l2facts[i].clicked = false;
      }
    }
  }

  l2pselect(selectedFact) {
    for (var i = 0; i < this.l2pfacts.length; i++) {
      if (selectedFact == this.l2pfacts[i]) {
        this.l2pfacts[i].clicked = !this.l2pfacts[i].clicked;
      } else {
        this.l2pfacts[i].clicked = false;
      }
    }
  }

  year() {
    this.currentYear = !this.currentYear;
  }
}

export default teacherCtrl;
