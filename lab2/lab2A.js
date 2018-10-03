(function() {
	Array.prototype.odd = function(){		
		odds = this.filter((number) => number%2!==0);
		setTimeout(() => {console.log(odds)}, 0);		
	};	

	Array.prototype.even = function(){		
		evens = this.filter((number) => number%2===0);
		setTimeout(() => {console.log(evens)}, 0);		
	};

	console.log("start");
	[1,2,3,4,5,6,7,8,9,0,11].odd();
	[1,2,3,4,5,6,7,8,9,0,11].even();
	console.log("end");
	
})();
