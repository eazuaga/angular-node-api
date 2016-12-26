app.service('servicio' , function($http){
	var _name = 'hola alka';
	this.getPerson = function(){
		return _name;
		
	}
	var _user = { surname :"alkuete" ,name:"eduardo" , dni: "30103343" }
		this.getUser = function(){
		   return _user;
		}
		
		this.getUserFromApi = function() {

		   return $http.get("http://10.0.0.112:3000/");

		}
})