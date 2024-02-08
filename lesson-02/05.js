const passport = {
    name: "Petr",
    surname: "Petrov",
};

const passportCopy = {...passport};
passportCopy.name = 'Ivan';
console.log(passport.name);
console.log(passportCopy.name);
