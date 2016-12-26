app.factory('myFactory', function () {
  var _artist = 'aaa';
  var service = {}

  service.getArtist = function () {
    return _artist
  }

  return service;
})