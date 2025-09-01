const accountId = 144553
let accountEmail = "tanmaymalpure9@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"

//accountId = 2 // not allowed



accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefered not to use var because of issue in block scope and functional scope 

*/

console.table ([accountId, accountEmail , accountCity, accountPassword])