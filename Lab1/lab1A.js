(function() {
	console.log("teste");
	
	const arr = [1,1,2,4,4,4,5,6,77,7,7,8,9]
	
	console.log("Original array: " + arr);
	console.log("ES6 Features: " + removeDuplicate(arr));
	asyncremoveDuplicate(arr);

	function removeDuplicate(arr){
		return arr.filter(function(item, pos) {
				return arr.indexOf(item) == pos;
			})
	}
	
	var promise = new Promise(function(resolve, reject){	
		if(arr) {
			console.log("From promise: " + removeDuplicate(arr));
			resolve('all good !!')
		} else {
			reject('Something is not right !!')
		}
	})

	async function asyncremoveDuplicate(arrayWithDuplicates) {
		try{
			const arrayWithoutDuplicates = await removeDuplicate(arrayWithDuplicates);
			console.log("From async/await: " + removeDuplicate(arrayWithoutDuplicates));
		}catch{
			console.log("error!");
		}
	}

	
})();
