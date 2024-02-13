let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let copyPass = structuredClone(passportWithAddress);
copyPass.address.city =  'Bobryisk';
console.log(passportWithAddress.address.city);
console.log(copyPass.address.city);