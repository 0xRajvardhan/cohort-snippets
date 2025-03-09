
function getFirstElement <T>(arr: T[]):T{
    return arr[0];
}

const el = getFirstElement(["Rajvardhan Singh", "Harkirat Singh", "Rajveer Singh"]);
const el2 = getFirstElement([1, 2, 3, 4, 5]);
const el3 = getFirstElement([true, false, true, false]);
console.log(el.toLowerCase()); // rajvardhan singh