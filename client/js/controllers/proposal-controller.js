app.controller('proposalController', ['$scope', '$uibModalInstance', 'proposal', function ($scope, $uibModalInstance, proposal) {
    $scope.proposal = proposal;

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);