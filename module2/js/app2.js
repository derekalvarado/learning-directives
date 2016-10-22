angular.module('app', []);

angular.module('app').controller('mainCtrl', function mainCtrl($scope) {
    $scope.user = {
        name: "Derek Alvarado",
        address: {
            city: "Austin, TX"
        }
    };

    $scope.someData = "I'm a string defined on the parent (the controller)";

    $scope.explain = function () {
        alert("Message button was clicked! But the directive called a function on the controller. That\'s breaking encapsulation")
    }

    $scope.logScope = function () {
        console.log($scope);
    }
})


angular.module('app').directive('userInfoCardUsingTemplate', function userInfoCardUsingTemplate() {
    return {

        templateUrl: "userInfoCardTemplate.html",
        restrict: "E",
    }
})

angular.module('app').directive('directiveWithOwnCtrl', function directiveWithOwnCtrl() {
    return {

        templateUrl: "directiveWithOwnCtrl.html",
        restrict: "E",

        controller: function ($scope) {
            $scope.showMessage = function () {
                alert("This message came from a function in the directive's own controller")
            }
        }
    }
})

angular.module('app').directive('directiveWithInheritedScope', function directiveWithInheritedScope() {
    return {

        templateUrl: "directiveWithInheritedScope.html",
        restrict: "E",
        //This is all that is needed to use inherited scoping
        //If not present, default would be shared scope
        scope: true,
        controller: function ($scope) {
            $scope.logScope = function () {
                console.log($scope);
            }
        }
    }
})

angular.module('app').directive('directiveWithIsolatedScope', function directiveWithIsolatedScope() {
    return {

        templateUrl: "directiveWithIsolatedScope.html",
        restrict: "E",
        //Set scope to an object to make an isolated scope
        //Scope properties bound this way must be all lowercase!
        //The browser will basically run toLowerCase() all of the attributes on the directive's html
        scope: {
            duser: '='
        },
        controller: function ($scope, $log) {
            $scope.logScope = function () {
                $log.log($scope);
            }


        }
    }
})

angular.module('app').directive('directiveWithSharedScope', function directiveWithIsolatedScope() {
    return {

        templateUrl: "directiveWithSharedScope.html",
        restrict: "E",
        //shared scope
        //scope: true,
        controller: function ($scope, $log) {
            $scope.logScope = function () {
                $log.log($scope);
            }


        }
    }
})

angular.module('app').directive('sharedAttribute', function sharedAttribute() {
    return {

        //Cannot define a template if this is to be used on a
        //directive that also defines a template
        restrict: "A",
        //shared scope
        controller: function ($scope, $log) {
            $scope.logScope = function () {
                $log.log($scope);
            }


        }
    }
})

angular.module('app').directive('directiveWithInitialValues', function directiveWithInitialValues() {
    return {

        templateUrl: 'directiveWithInitialValues.html',
        restrict: "E",
        scope: {
            myval: '@',
            //'status' is that attribute you will use in the HTML
            //'otherVal' is what it will map to in this controller
            //useful for avoiding collisions
            otherVal: '@status'
        },
        controller: function ($scope, $log) {

        }
    }
})