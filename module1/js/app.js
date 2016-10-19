angular.module('app', []);

angular.module('app')
    .controller('mainCtrl', mainCtrl)
    .directive('userInfoCard', userInfoCard);
function mainCtrl() {

}

function userInfoCard() {

    return {
        template: "User Info Card",
        restrict: "E",
    }
}