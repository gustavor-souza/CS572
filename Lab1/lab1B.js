(function() {

	function isWeekend(){
		const todayDate = new Date();
		const day = todayDate.getDay();
		const refDays = ["weekend", "weekday", "weekday", "weekday", "weekday", "weekday", "weekend"];

		return refDays[day];
	}

	console.log(isWeekend());
})();
