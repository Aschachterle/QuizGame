"use strict";

angular
    .module("App")
    .config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when("/questions", {
                template: "<quiz-component></quiz-component>"
            })
            .when("/scores", {
                template: "<scores-component></scores-component>"
            })
            .otherwise("/questions", {
                template: "<quiz-component></quiz-component>"
            })
    }])