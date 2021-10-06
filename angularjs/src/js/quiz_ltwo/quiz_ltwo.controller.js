class QuizLTwoCtrl {
  constructor(AppConstants, Backend, $scope) {
    'ngInject';

    this._Backend = Backend;
    this.password = "";

    this.loggedIn = false;
    this.logFail = false;

    this.lastAttempt = "";

    this.allChosen = false;
    this.submitted = false;

  }

  login() {
    this._Backend.quiz("L2", this.password.toLowerCase()).then(
      (res) => {
        if (res.login=="Success") {
          this.loggedIn = true;
          this.questions = res.questions;
          for (var i = 0; i < this.questions.length; i++) {
            this.questions[i].clicked = false;
            this.questions[i].number = i;
          }
          this.noOfQs = this.questions.length;
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

  select(selectedQuestion) {
    for (var i = 0; i < this.questions.length; i++) {
      if (selectedQuestion == this.questions[i]) {
        this.questions[i].clicked = !this.questions[i].clicked;
      }
    }
  }

  selectAnswer(q, c) {
    if (this.submitted == false) {
      this.questions[q].choice = c;
      this.allChosen = true;
      for (var i = 0; i < this.questions.length; i++) {
        if (this.questions[i].choice == null) {
          this.allChosen = false;
        }
      }
    }
  }

  submitQuiz() {
    this.submitted = true;
    this.noOfCorrectAns = 0;
    for (var i = 0; i < this.questions.length; i++) {
      if (this.questions[i].choice == this.questions[i].correct_int) {
        this.noOfCorrectAns++;
      }
    }
  }
}

export default QuizLTwoCtrl;
