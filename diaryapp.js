try{



localStorage{

	save:function(){
};

	
		localStorage.addEventListener('keyup',function(){
		var input = localStorage.getElementById('field_DATE').value;
		localStorage.getElementById('input_DATE').innerHTML = input;
		
		});


		localStorage.addEventListener('keyup',function(){
		var input = localStorage.getElementById('field_TITLE').value;
		localStorage.getElementById('input_TITLE').innerHTML = input;
		});

		

		localStorage.addEventListener('keyup',function(){
		var input = localStorage.getElementById('field_Feelings').value;
		localStorage.getElementById('input_Feelings').innerHTML = input;
		});


		localStorage.addEventListener('keyup',function(){
		var input = localStorage.getElementById('field_Your Contents').value;
		localStorage.getElementById('Your Content').innerHTML = input;
		});



}

		
	
}

catch(e){
	console.log(e);
}