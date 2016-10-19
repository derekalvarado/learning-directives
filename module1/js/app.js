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
        //Double curly items here will be available on the enclosing scope of controller
        //Note the use of !! as shorthand
        template: "Name: {{user.name}} <br/> <div ng-show='!!user.address.city'> City: {{user.address.city}} </div>",
        restrict: "E",
    }
}