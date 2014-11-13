function findArrayDuplicate () {

var myarr = [10,10,12,5,2,20,5,5,5,22,30,30,30,10];
myarr.sort(function(a, b) {
  return a - b;
});
console.log(myarr);
console.log(findDupes(myarr));
}

function findDupes(myarr) {
		var	dupeElets =[];
		for (var i = 0; i < myarr.length; i++) {
			if(myarr[i] === myarr[i+1])  {
				if(dupeElets.indexOf(myarr[i]) < 0) // removing repeated elements
					dupeElets.push(myarr[i]);
			}
		}
		return dupeElets;
	}
