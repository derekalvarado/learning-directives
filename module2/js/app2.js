angular.module('app', []);

angular.module('app')
    .controller('mainCtrl', mainCtrl)


    .directive('userInfoCardUsingTemplate', userInfoCardUsingTemplate)


function mainCtrl($scope) {
    $scope.user = {
        name: "Derek Alvarado",
        address: {
            city: "Austin, TX"
        }
    }

    $scope.showMessage = function () {
        alert("Message button was clicked! But the directive called a function on the controller. That\'s breaking encapsulation")
    }
}


function userInfoCardUsingTemplate() {
    return {

        templateUrl: "userInfoCardTemplate.html",
        restrict: "E",
        
    }
}
