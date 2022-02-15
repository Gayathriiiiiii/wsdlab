// Create AngularJS application
var app = angular.module('demoLearningTurn',[]);

// Create Controller with name mainCtrl
app.controller('mainCtrl', function($scope,$http){

	
    $scope.rowlimit=4;
    $scope.fullName ;
    $scope.today = new Date();
	// Employees record List
	// $scope.employees = [
	// 	  {
	// 	    "age": 40,
	// 	    "full_name": "Page Cabrera",
	// 	    "gender": "male",
	// 	    "company": "IMKAN",
	// 	    "email": "pagecabrera@imkan.com",
	// 	    "phone": "+91 8618897671",
    //         "designation":"secretary",
	// 	    "salary": "4227",
    //         "dob":"16/12/1999"
	// 	  },
	// 	  {
	// 	    "age": 21,
	// 	    "full_name": "Macdonald Rosales",
	// 	    "gender": "male",
	// 	    "company": "AFFLUEX",
	// 	    "email": "macdonaldrosales@affluex.com",
	// 	    "phone": "+91 7531548920",
    //         "designation":"gen secretary",
	// 	    "salary": "8878",
    //         "dob":"15/1/1998"
	// 	  },
	// 	  {
	// 	    "age": 31,
	// 	    "full_name": "Cash Marsh",
	// 	    "gender": "male",
	// 	    "company": "REMOLD",
	// 	    "email": "cashmarsh@remold.com",
	// 	    "phone": "+91 8541026973",
    //         "designation":"manager",
	// 	    "salary": "9686",
    //         "dob":"21/12/1980"
	// 	  },
	// 	  {
	// 	    "age": 39,
	// 	    "full_name": "Ofelia Cooley",
	// 	    "gender": "female",
	// 	    "company": "GEEKETRON",
	// 	    "email": "ofeliacooley@geeketron.com",
	// 	    "phone": "+91 9574100863",
    //         "designation":"general manager",
	// 	    "salary": "9321",
    //         "dob":"05/05/1985"
	// 	  },
	// 	  {
	// 	    "age": 21,
	// 	    "full_name": "Erma Chase",
	// 	    "gender": "female",
	// 	    "company": "MEGALL",
	// 	    "email": "ermachase@megall.com",
	// 	    "phone": "+91 8845963110",
    //         "designation":"HR MANAGER",
	// 	    "salary": "8145",
    //         "dob":"16/11/2000"
	// 	  },
	// 	  {
	// 	    "age": 33,
	// 	    "full_name": "Maryanne Mullins",
	// 	    "gender": "female",
	// 	    "company": "OLUCORE",
	// 	    "email": "maryannemullins@olucore.com",
	// 	    "phone": "+91 9988741250",
    //         "designation":"ACCOUNT manager",
	// 	    "salary": "9564",
    //         "dob": "16/12/1999"
	// 	  },
	// 	  {
	// 	    "age": 21,
	// 	    "full_name": "Christina Dickerson",
	// 	    "gender": "female",
	// 	    "company": "HALAP",
	// 	    "email": "christinadickerson@halap.com",
	// 	    "phone": "+91 8541203997",
    //         "designation":"ChIEF EXEVUTIVE",
	// 	    "salary": "7966",
    //         "dob":"15/05/1997"
	// 	  }
	// 	];

	
    $http.get('https://gayathriiiiiii.github.io/json/employee.json')
    .success(function(response)
    {
        $scope.names=response.employees;

    });
        
	
});

app.filter('findEmployee', function(){

	// pass employees recored to function and return output
	return function (records, minSalary, minAage) {

		// check if employees array did not have any record
		if(!records){
			return;
		}

		// check if minSalary is not define
		// if minSalary is not define then consider it as 0
		if(!minSalary){
			minSalary = 0;
		}

		// check if minAage is not define
		// if minAage is not define then consider it as 0
		if(!minAage){
			minAage = 0;
		}

		// declear output array
		var output = [];

		// loop of record array
	    // forEach is angular function
	    // check if employee employee record have salary more then minSalary
	    // if employee salary is more then minSalary push that record to out array
	    // check if employee employee record have age more then minAage
	    // if employee age is more then minAage push that record to out array
		angular.forEach(records, function(record){

			if(record.salary > minSalary && record.age > minAage){
				output.push(record);
			}

		});
	   
	   	// return output array as filter output
	    return output;

	  };
});


app.filter('shortname', function(){

	// pass fullname to function and return output
	return function (name, arg) {

		// check if input name is empty then return it
		if(name == ''){
			return name;
		}
	    // process name and prepare output
	    // split the name on base of space
	    var names_arr = name.split(' ');

	    // declear output variable
	    var output = [];

	    // loop of names_arr array
	    // forEach is angular function
	    // we are taking first character of names_arr array   
	    // we are appending dot(.) with each character
	    // we are pusing characer in output array variable
	    angular.forEach(names_arr, function(item){
	    	output.push(item.substring(0,1) + '.');

	    });

	    // we are making string from output array using javaScript join() function

	    output = output.join(''); 

	    if (arg == 'C'){
	    	// we are converting characet to upper case using javaScript toUpperCase() function
	    	output = output.toUpperCase();
	    }
	    else if (arg == 'S'){
	    	// we are converting characet to lower case using javaScript toLowerCase() function
	    	output = output.toLowerCase();
	    }
	    
	    // we are removing last dot(.) from output string
	    return output.substring(0, output.length - 1);

	  };
});