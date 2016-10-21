angular.module('app', []);

angular.module('app')
    .controller('mainCtrl', mainCtrl)


    .directive('userInfoCardUsingTemplate', userInfoCardUsingTemplate)
    .directive('directiveWithOwnCtrl', directiveWithOwnCtrl)
    .directive('directiveWithInheritedScope', directiveWithInheritedScope)
    .directive('directiveWithIsolatedScope', directiveWithIsolatedScope);


function mainCtrl($scope) {
    $scope.user = {
        name: "Derek Alvarado",
        address: {
            city: "Austin, TX"
        }
    };

    $scope.someData =  "I'm a string defined on the parent (the controller)" ;

    $scope.explain = function () {
        alert("Message button was clicked! But the directive called a function on the controller. That\'s breaking encapsulation")
    }

    $scope.logScope = function () {
        console.log($scope);
    }
}


function userInfoCardUsingTemplate() {
    return {

        templateUrl: "userInfoCardTemplate.html",
        restrict: "E",
    }
}

function directiveWithOwnCtrl() {
    return {

        templateUrl: "directiveWithOwnCtrl.html",
        restrict: "E",

        controller: function ($scope) {
            $scope.showMessage = function () {
                alert("This message came from a function in the directive's own controller")
            }
        }
    }
}

function directiveWithInheritedScope() {
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
}

function directiveWithIsolatedScope() {
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
}