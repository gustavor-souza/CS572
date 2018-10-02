(function() {

	const item = {
		"name": "Biscuits",
		"type": "Regular",
		"category": "food",
		"price": 2.0
	}

	const applyCoupon = function(category){
		return function (discount){
			return function (item){
				if(category == item.category){
					item.price = item.price - (discount * item.price);
					return item;
				}
			}
		}
	}

	console.log(applyCoupon("food")(0.1)(item).price);

})();
