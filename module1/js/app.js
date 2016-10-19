angular.module('app', []);

angular.module('app')
    .controller('mainCtrl', mainCtrl)
    .directive('userInfoCard', userInfoCard)
    .directive('userInfoCardUsingScope', userInfoCardUsingScope);

function mainCtrl($scope) {
    $scope.user = {
        name: "Derek Alvarado",
        address: {
            city: "Austin, TX"
        }
    }
}

function userInfoCard() {

    return {
        template: "User Info Card",
        restrict: "E",
    }
}

function userInfoCardUsingScope() {
    return {
        //'name' will be available on the enclosing scope of controller
        template: "Name: {{user.name}} <br/> City: {{user.address.city}}",
        restrict: "E",
    }
}