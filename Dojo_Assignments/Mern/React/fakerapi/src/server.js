const express = require("express");
const app = express();
const port = 8000;

const faker = require('faker');

    
// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

class User {
    constructor() {
        this._id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});
app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});
app.get("/api/user/company", (req, res) => {
    res.json({User: new User(), Company: new Company()});
});



// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
console.log(new User());