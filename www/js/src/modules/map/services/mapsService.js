/**
 * Created by gadhamsn on 4/5/15.
 */

define([],function(){


    var mapsService = function($q){

        var getLatLang = function(){
            return getGeoLocation().then(function(positon){

                console.log('latitude '+ positon.coords.latitude);
                console.log('langitude '+ positon.coords.longitude);

                var myLatlng = new google.maps.LatLng(positon.coords.latitude,positon.coords.longitude);

                return myLatlng;
            });
        }

        var getGeoLocation = function(){
         var deferred = $q.defer();
            if(navigator.geolocation){
                console.log('inside if');
                navigator.geolocation.getCurrentPosition(function(result){
                   deferred.resolve(result);
                }, function(erro){
                    deferred.reject(error);
                });
            }
          return deferred.promise;
        };

    return{
        getGeoLocation:getGeoLocation,
        getLatLang: getLatLang
    };

    };
    mapsService.inject = ['$q'];

    return mapsService;
});