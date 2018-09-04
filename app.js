
///crime-categories
fetch(' https://data.police.uk/api/crime-categories').then(function(res){
	 return res.json();
}).then(function(res){
	 console.log(res);


	 	///Showing Value Inn Select box
	 console.log(res[1].url)
	 for(var i = 0 ; i<=res.length; i++ ){

	var x = document.getElementById("categories");
	var c = document.createElement("option");
	c.text = res[i].url;

	x.options.add(c, [i])




}
})








///Forces
fetch('https://data.police.uk/api/forces').then(function(res){
	 return res.json();
}).then(function(res){
	 console.log(res);


	 	///Showing Value Inn Select box
	 console.log(res[1].name)
	 for(var i = 0 ; i<=res.length; i++ ){

	var x = document.getElementById("forces");
	var c = document.createElement("option");
	c.text = res[i].name;

	x.options.add(c, [i])



}
})






function seacrh(){


	var crime = document.getElementById("categories")
	var Result1= crime.options[crime.selectedIndex].value;
	var Result1= Result1.toLowerCase();

	var forces = document.getElementById("categories")
	var result2= forces.options[forces.selectedIndex].value;

	var table= document.getElementById("table")
	

	//fetching Api

	fetch('https://data.police.uk/api/crimes-no-location?category=all-crime&force=leicestershire').then(function(res){
				return res.json();
				}).then(function(res){
					console.log(res)
				
				debugger

				for(var i = 0; i<25;i++){

					if (Result1==res[i].category) {

						var x=document.getElementById('table').insertRow();
   
  
    						 var y=  x.insertCell();
     						y.innerHTML="ID: "+res[i].id; 
     						 var y=  x.insertCell();
  							y.innerHTML="Crime: " + res[i].category; 
  							var y=  x.insertCell();
  							y.innerHTML= "REPORT: "+res[i].outcome_status.category;



					}

					
					

				}
				


















				})














}