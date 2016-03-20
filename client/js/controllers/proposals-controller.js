app.controller('proposalsController', ['$scope', '$uibModal', '$resource', function ($scope, $uibModal, $resource) {
    $scope.showNewProposalButton = true;
    $scope.showProposalForm = false;

    $scope.openProposal = function (proposal) {
        var uibModalInstance = $uibModal.open({
            templateUrl: 'views/proposal.html',
            controller: 'proposalController',
            resolve: {
                proposal: function () {
                    return proposal;
                }
            }
        });
    };

    var Proposal = $resource('/api/proposals');

    Proposal.query(function (results) {
        $scope.proposals = results;
    });

    $scope.proposals = [];

    $scope.createProposal = function () {
        var proposal = new Proposal();
        proposal.building = $scope.proposalBuilding;
        proposal.room = $scope.proposalRoom;
        proposal.gender = $scope.proposalGender;
        proposal.name = $scope.proposalName;
        proposal.$save(function (result) {
            $scope.proposals.push(result);
            $scope.proposalBuilding = '';
            $scope.proposalRoom = '';
            $scope.proposalGender = '';
            $scope.proposalName = '';
        });
    }
}]);