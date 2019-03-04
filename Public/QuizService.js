"use strict";

// a. addScore - Take a guess at what this will do.
// b. getScores - Take a guess at what this will do.
// c. getQuestions - Take a guess at what this will do.

function QuizService($http, $location) {
    const self = this;
    self.getQuestions = function(){
        return $http({
            method: "GET",
            url: "/questions"
        })
    }

    self.getScores = function() {
        return $http({
            method: "GET",
            url: "/scores"
        })
    }
    self.addScore = function(player_name, score) {
        return $http({
            method: "POST",
            url: "/scores",
            data: {player_name: player_name, score: score}
        })

      

    }
    
} 


 









angular
    .module("App")    
    .service("QuizService", QuizService)                