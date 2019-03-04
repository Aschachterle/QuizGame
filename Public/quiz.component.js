// Displays 5 random questions that the player can answer.
// Use radio buttons or inputs to collect the answer from the player.
// Upon completing the quiz, send the player’s answers to a service which will
// calculate the total score, POST the score to the server, and direct the player to
// the scores route.


const quizComponent = {
    template: `
        <form>
        <div class="titlebox">
        <p class="title">THIS IS A QUIZ.</p>
        </div>
        <div class="nameBox">
            <input class="nameField" ng-model="$ctrl.user" type="text" placeholder="name">
        </div>
        <section class="questionRepeats" ng-repeat="item in $ctrl.questionList | limitTo: 5">
            <p>{{item.question}}</p>

            <div class="answer">
                <div class="choice">{{item.choice_one}}</div><input type="radio" value="{{item.choice_one}}" ng-click="$ctrl.checkAnswer(item.choice_one, item.answer, $index)" name={{item.id}}>
            </div>

            <div class="answer">
                <div class="choice">{{item.choice_two}}</div><input type="radio" value="{{item.choice_two}}" ng-click="$ctrl.checkAnswer(item.choice_two, item.answer, $index)"name="{{item.id}}">
            </div>

            <div class="answer">
                <div class="choice">{{item.choice_three}}</div><input type="radio" value="{{item.choice_three}}" ng-click="$ctrl.checkAnswer(item.choice_three, item.answer, $index)" name="{{item.id}}">
            </div>

            <div class="answer">
                <div class="choice">{{item.choice_four}}</div><input type="radio" value="{{item.choice_four}}" ng-click="$ctrl.checkAnswer(item.choice_four, item.answer, $index)" name="{{item.id}}">
            </div>
                
        </section>
        <button ng-click="$ctrl.checkScore()">submit</button>
        </form>
    `,
    controller: ["QuizService", "$location", function(QuizService, $location) {
        const vm = this;
        
        //calling response from QuizService and placing it in the questionList variable
        //YOU HAVE TO HAVE THIS WRITTEN OUT OTHERWISE NO DATA WILL BE ACCESSED
        QuizService.getQuestions().then(function(response){
            vm.questionList = response.data;
            
        })


        vm.score = 0;
        vm.result = [false, false, false, false, false]

        vm.checkAnswer = function(choice, answer, index) {
            if (choice == answer) {

                vm.result[index] = true;
            } else if (choice != answer) {

                vm.result[index] = false;
            }
        }
        vm.checkScore = function() {
            for (let i = 0; i < vm.result.length; i++) {
                if (vm.result[i] === true) {
                    vm.score++
                }
                
            }

            console.log(vm.score)
            QuizService.addScore(vm.user, vm.score)
            QuizService.getScores().then(function(response){
                vm.scores = response.data;
                $location.path("/scores")

            })

        }

    }]
}





angular
    .module("App")
    .component("quizComponent", quizComponent)