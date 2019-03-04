"use strict";

// Displays a list of the top 10 scores from the database. This includes the
// score and the player’s name who obtained the score.


const scoresComponent = {

template: `
    <p>SCORES:</p>
    <section ng-repeat="score in $ctrl.scores track by $index">
        <p>{{score.player_name}}</p>
        <p>{{score.score}}</p>
    </section>
`,
controller: ["QuizService", function(QuizService) {
    const vm = this;
    //calling response from QuizService and placing it in the questionList variable
    //YOU HAVE TO HAVE THIS WRITTEN OUT OTHERWISE NO DATA WILL BE ACCESSED
    QuizService.getScores().then(function(response){
        vm.scores = response.data;
    })
    

}]



}


angular
    .module("App")
    .component("scoresComponent", scoresComponent);