angular.module('app', []);

angular.module('app')
    .controller('mainCtrl', mainCtrl)


    .directive('userInfoCardUsingTemplate', userInfoCardUsingTemplate)
    .directive('directiveWithOwnCtrl', directiveWithOwnCtrl)
    .directive('directiveWithInheritedScope', directiveWithInheritedScope);


function mainCtrl($scope) {
    $scope.user = {
        name: "Derek Alvarado",
        address: {
            city: "Austin, TX"
        }
    }

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
        scope: true,
        controller: function ($scope) {
            $scope.logScope = function () {
                console.log($scope);
            }
        }
    }
}