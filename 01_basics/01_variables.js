const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "pune"

console.log(accountId);

// Prefer not to usse var
// because of issue in block scope and functional scope

console.table([accountId, accountEmail, accountPassword, accountCity])