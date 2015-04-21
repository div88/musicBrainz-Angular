
angular.module('musicBrainzSearchApp.controllers', []).
  controller('searchController', function($scope, musicBrainzAPIservice) {
    
    this.searchTerm = "";
    this.selectedOptionValue = 'artist';
    this.options = ['artist', 'recording', 'release','area'];
        
    this.selectedOption = function selectedOption() {
    musicBrainzAPIservice.searchTerm = this.searchTerm;
    musicBrainzAPIservice.selectedOptionValue = this.selectedOptionValue;
      console.log("Selected country is " + this.searchTerm + " and its search term is " + this.selectedOptionValue);
      musicBrainzAPIservice.getDrivers().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.artists = response.artists;
      });
  };
});
  
  
  