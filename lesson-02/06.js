let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportWithAddressCopy = structuredClone(passportWithAddress);
passportWithAddressCopy.address.city = 'Bobryisk';
console.log(passportWithAddress);
console.log(passportWithAddressCopy)