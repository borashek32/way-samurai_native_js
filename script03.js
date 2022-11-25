function pickIt(arr){
    var odd=[],even=[];
    //coding here
    for (let i = 0; i<=arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    console.log([odd, even]);
    return [odd,even];
}
pickIt([32, 45, 56]);