var app = angular.module("abm",[]);
app.controller('user', ['$scope', 'servicio', 'myFactory', '$http', function ($scope, servicio, myFactory, $http) {

    $scope.user = servicio.getUser();
    //$http.get("http://10.0.0.112:3000/").then(function (json) {
    //    console.log("from api", json);
     

    //}, function () {
    //    console.log("error");
    //});

    $scope.subir = function (d) {
        console.log(d);
        var promise = servicio.getUserFromApi();
        promise.then(function (json) {
            $scope.user = json.data;

        });
    }
}]);



