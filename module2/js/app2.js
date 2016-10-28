angular.module('app2', []);

angular.module('app2').controller('mainCtrl', function mainCtrl($scope) {
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

    //This function is going to be passed into a directive via function parameter    
    $scope.alertFunc = function () {
        alert("Function parameter is working!\nThis alert is coming not from the directive, but from the parent controller.");
    }
})
angular.module('app2').controller('secondCtrl', function secondCtrl($scope) {
    $scope.user = {
        name: 'Derek',
        friends: ["Jacob", "Rob", "Colby"],
        address: {
            street: "Honey Dew Terrace",
            city: "Austin",
            state: "TX"
        }
    }

    $scope.addFriend = function (newFriend) {
        $scope.user.friends.push(newFriend);
    }

    $scope.display = function () {
        alert('display function called from lower down the chain');
    }
})

angular.module('app2').directive('userInfoCardUsingTemplate', function userInfoCardUsingTemplate() {
    return {

        templateUrl: "userInfoCardTemplate.html",
        restrict: "E",
    }
})

angular.module('app2').directive('directiveWithOwnCtrl', function directiveWithOwnCtrl() {
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

angular.module('app2').directive('directiveWithInheritedScope', function directiveWithInheritedScope() {
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

angular.module('app2').directive('directiveWithIsolatedScope', function directiveWithIsolatedScope() {
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

angular.module('app2').directive('directiveWithSharedScope', function directiveWithIsolatedScope() {
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

angular.module('app2').directive('sharedAttribute', function sharedAttribute() {
    return {

        //Cannot define a template if this attribute directive 
        //is to be used on an element directive that also defines a template
        restrict: "A",
        //shared scope
        controller: function ($scope, $log) {
            $scope.logScope = function () {
                $log.log($scope);
            }


        }
    }
})

angular.module('app2').directive('directiveWithInitialValues', function directiveWithInitialValues() {
    return {

        templateUrl: 'directiveWithInitialValues.html',
        restrict: "E",
        scope: {
            myval: '@',
            //'status' is the attribute you will use in the HTML
            //'otherVal' is what it will map to in this controller
            //useful for avoiding collisions
            otherVal: '@status'
        },
        controller: function ($scope, $log) {

        }
    }
})

angular.module('app2').directive('functionParameters', function functionParameters() {
    return {
        restrict: 'E',
        templateUrl: 'functionParameters.html',
        scope: {
            //The ampersand means we're going to pass a function into this directive
            //via an attribute called 'method' in the html
            //Whatever we pass in will have been defined on the parent directive or scope
            //but mapped to a function called 'display' in this directive's scope
            display: '&method',

        },
        controller: function ($scope) {
            $scope.callDisplay = function () {
                console.log('In callDisplay')
                $scope.display();
            }
        }

    }
})

