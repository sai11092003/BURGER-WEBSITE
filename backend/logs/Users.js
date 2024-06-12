const bcrypt = require('bcryptjs');

const Users = [
    {
        name: "sai",
        email: "sai@sai.com",
        password: bcrypt.hashSync('123', 10),
        isAdmin: true
    },
    {
        name: "lekha",
        email: "lekha@sai.com",
        password: bcrypt.hashSync('1234', 10),
        isAdmin: false
    },
    {
        name: "user",
        email: "user@sai.com",
        password: bcrypt.hashSync('12345', 10),
        isAdmin: false
    }
];

module.exports = Users;
