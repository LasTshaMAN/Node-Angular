app.controller('proposalsController', ['$scope', '$resource', function ($scope, $resource) {
    $scope.showNewProposalButton = true;
    $scope.showProposalForm = false;

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