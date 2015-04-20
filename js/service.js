angular.module('musicBrainzSearchApp.services', []).
  factory('musicBrainzAPIservice', function($http) {
  
  var musicBrainzAPI = {};
  musicBrainzAPI.searchTerm = '';
  musicBrainzAPI.selectedOptionValue = '';
  musicBrainzAPI.getDrivers = function() {
    return $http({
      url: 'http://musicbrainz.org/ws/2/artist/?query='+ musicBrainzAPI.selectedOptionValue + ':'+ musicBrainzAPI.searchTerm  +'&limit=100&fmt=json'
  
    });
  }
  
  return musicBrainzAPI;
});

  
  
  