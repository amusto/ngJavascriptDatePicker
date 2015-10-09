angular.module('myApp', [])
  .controller('mainController', function($scope, $filter) {
    $scope.displayResultList = false;

    //Array of government holidays
    $scope.federalHolidayDates = [];
    $scope.federalHolidayDates.push('10/01/2015');
    $scope.federalHolidayDates.push('10/12/2015') ;
    $scope.federalHolidayDates.push('11/26/2015') ;                 
    $scope.invalidCalendarDates = $scope.federalHolidayDates;

    //Array of events
    $scope.eventsArray = [];
    $scope.eventsArray.push({id: 1, startDate: moment('10/10/2015').format('MM/DD/YYYY')});
    $scope.eventsArray.push({id: 2, startDate: moment('10/15/2015').format('MM/DD/YYYY')});        

    $scope.submitDates = function(){
      $scope.displayResultsArray = $scope.eventsArray;
      $scope.displayResultList = true;      
    };

  });