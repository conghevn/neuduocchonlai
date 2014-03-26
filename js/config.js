'use strict';

//Setting up route
// TODO: Nghiên cứu lại cái này cái ĐCM
//angular.module('ifi')
//    .config(function ($compileProvider){
//        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
//    })
//    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
//
//        $urlRouterProvider
//        .when('/c?id', '/profile')
//        .otherwise('/');
//
////        $stateProvider
////        .state('homepage', {
////            url: '/',
////            templateUrl: 'views/homepage.html',
////            controller: 'thingController'
////        })
//
//
//    }]).run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
//        console.log('Config:  ');
//        $rootScope.$state = $state;
//        $rootScope.$stateParams = $stateParams;
//    }]);

// Cài đặt các giá trị mặc định
angular.module('ifi').run(['$rootScope',function($rootScope){
    $rootScope.LOCALHOST = 'http://neuduocchonlai.herokuapp.com';
}]);
