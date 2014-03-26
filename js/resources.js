
'use strict'

angular.module('ifi.thing', ['ngResource']).factory('Things',['$resource', '$rootScope', function($resource, $rootScope){
    return $resource($rootScope.LOCALHOST + '/things/:id',{
        id:'@_id'
    },{
        getThings:{
            method: 'POST',
            url: $rootScope.LOCALHOST + '/get'
        },
        add:{
            method: 'POST',
            url: $rootScope.LOCALHOST + '/add'
        },
        clear:{
            method: 'POST',
            url: $rootScope.LOCALHOST + '/clear'
        }
    });
}]);
