var app = angular.module('ContactListApp', []);

app.controller('AppCtrl', function($scope, $http) {
	console.log("Hello World from controller.js");

	var refresh = function () {
		$http.get('/contactList').success(function(response) {
			console.log("Got the data requested");

			$scope.persons = response;	
			$scope.contact = '';
		});

	}

	refresh();

	$scope.addContact = function() {
		console.log($scope.contact);

		$http.post('/contactList', $scope.contact).success(function(response) {
			console.log(response);
			refresh();
		});

	}

	$scope.remove = function(id) {
		console.log(id);
		
		$http.delete('/contactList/' + id).success(function(response) {
			refresh();
		});
	}

	$scope.edit = function(id) {
		console.log(id);
		
		$http.get('/contactList/' + id).success(function(response) {
			$scope.contact = response;
		});
	}

	$scope.updateContact = function(id) {
		console.log($scope.contact._id);

		$http.put('/contactList/' + $scope.contact._id, $scope.contact).success(function(response){
			refresh();
		});
	}
	
});
