let passport = {
    name: "Petr",
    surname: "Petrov",
};

let clon = JSON.parse(JSON.stringify(passport));
clon.name = "Ivan";
console.log(passport.name)
console.log(clon.name)
