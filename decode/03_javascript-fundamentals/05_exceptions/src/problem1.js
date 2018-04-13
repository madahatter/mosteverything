function first(arr) {
    if(arr.length === 0) throw new Error("Error")
     return arr[0]
}
    // Throw an exception if the array has no elements
    // Otherwise return the first element


function detective(i) {
    function suspect(i) {
        if(i * 7 % 3 == 0) throw new Error("Bad i!");}
        try {
            suspect(i)
            return "everything ok"
        } catch(err) {
            return "something fishy"
                   }
                }
    // detective checks to see if the suspect throws an exception on input i.
    // Returns "everything ok" if the suspect doesn't. 
    // Returns "something fishy" if the suspect does.

function assignFlight(name) {
    var flightNumber = ((name.length * 7) % 20) + "0";
    var terrorSuspects = ["bob", "eric", "susie"];
    // if the name is a terror suspect, throw an exception
    // Otherwise, return the flight number
    for (var i = 0; i < terrorSuspects.length; i++) {
        if (name === terrorSuspects[i]) {
            throw new Error("Bad Guy")
             }
         }
    return flightNumber
    }




module.exports = {first, detective, assignFlight}