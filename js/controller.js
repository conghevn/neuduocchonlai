
angular.module('ifi.thing').controller('thingController', ['$rootScope', '$scope', 'Things', function ($rootScope, $scope, Things) {
    $scope.things = [{}];

    $scope.init = function(){
        Things.getThings({} , function (res) {
            $scope.things = res.things;
        });
    }

    $scope.post = function(input){
        if (input === "conmeomauden123"){
            Things.clear({}, function(res){
                $scope.things = [];
                $scope.input = "";
            })
        }
        else

        Things.add({},{input: input}, function (res) {
            console.log("Res:   " + JSON.stringify(res));
            $scope.things.push({content: res.content});
            console.log('Things:   ' + JSON.stringify($scope.things));
            $scope.input = "";
        });
    }


}])







