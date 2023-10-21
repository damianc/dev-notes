const arr = [3,1,2,3,4];
console.log(
	recSort(arr),
	rsSort(arr)
);
// [1,2,3,3,4]
// [1,2,3,3,4]

function rsSort(arr, asc=true, ri = 1) {
	if (ri > arr.length) return arr;
	
	arr = [...arr];
	const es = arr.slice(ri-1);
	const [,minIdx] = es.reduce((
		acc,curr,idx
	) => {
		if (asc ^ !(curr > acc[0])) {
			return [curr,idx];
		}
		
		return acc;
	}, [es[0],0]);
	
	const si = minIdx + ri - 1;
	const [min] = arr.splice(si, 1);
	arr.unshift(min);
	
	return rsSort(arr, asc, ri+1);
}

function recSort(
	arr, asc=true, sorted = []
) {
	if (arr.length === 0) return sorted;
	
	arr = [...arr];
	const [,minIdx] = arr.reduce((
		acc,curr,idx
	) => {
		if (asc ^ !(curr > acc[0])) {
			return [curr,idx];
		}
		
		return acc;
	}, [arr[0],0]);
	
	const [min] = arr.splice(minIdx, 1);
	
	return recSort(
		arr, asc, [min, ...sorted]
	);
}
