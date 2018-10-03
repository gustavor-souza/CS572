(function() {

	Array.prototype.removeDuplicate = function(){
		console.log("ES6 Features: " + this.filter( function( item, index, inputArray ) {
			return inputArray.indexOf(item) == index;
	 		}));
	}

	Array.prototype.asyncAwaitRemoveDuplicate = async function() {
		try{
			const arrayWithoutDuplicates = await this.filter( function( item, index, inputArray ) {
					return inputArray.indexOf(item) == index;
				 });
			console.log("From async/await: " + arrayWithoutDuplicates);
		}catch{
			console.log("error!");
		}
	}

	Array.prototype.RemoveDuplicateFromPromisse = async function() {
		const arr = this; 	
		var promise = new Promise(function(resolve, reject){	
			if(arr) {
				console.log("From promise: " + arr.filter( function( item, index, inputArray ) {
					return inputArray.indexOf(item) == index;
				 }));
				resolve('all good !!')
			} else {
				reject('Something is not right !!')
			}
		})
	}

	Array.prototype.removeDupsObservable = function(){
		const { from } = rxjs;
		const { distinct, reduce } = rxjs.operators;
		from(this)
			.pipe(
				distinct(),	
				reduce(
					(acc,cur) => {
						acc.push(cur);
						return acc;
					},[]),
			)
			.subscribe(
				data => console.log(data),
				null,
				() => console.log("")
			)
	}
	
	const arr = [1,1,2,4,4,4,5,6,77,7,7,8,9];
	
	console.log("Original array: " + arr);
	[1,1,2,4,4,4,5,6,77,7,7,8,9].removeDuplicate();
	[1,1,2,4,4,4,5,6,77,7,7,8,9].asyncAwaitRemoveDuplicate();
	[1,1,2,4,4,4,5,6,77,7,7,8,9].RemoveDuplicateFromPromisse();
	[1,1,2,4,4,4,5,6,77,7,7,8,9].removeDupsObservable()

	
})();