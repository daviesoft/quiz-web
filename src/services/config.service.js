angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quiz-api-rd.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);