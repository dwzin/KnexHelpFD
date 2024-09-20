const knex = require("knex");
const knexfile = require("./knexfile");

const db = knex(knexfile.development);

// Function to register a new user
function Register() {
  const userData = {
    username: "david",
    password: "wendel",
  };

  db("users")
    .insert(userData)
    .then(() => {
      console.log("User inserted successfully");
    })
    .catch((err) => {
      console.error("Error inserting user:", err);
    })
    .finally(() => {
      db.destroy();
    });
}

// Function to login a user
function Login(username, password) {
  db("users")
    .where({ username })
    .first()
    .then((user) => {
      if (!user) {
        console.log("User not found");
        return;
      }

      if (user.password === password) {
        console.log("Login successful");
      } else {
        console.log("Invalid password");
      }
    })
    .catch((err) => {
      console.error("Error logging in:", err);
    })
    .finally(() => {
      db.destroy();
    });
}

// Example usage
Register();

// handling error
Login("oi", "123456");

// succesfull login
Login("david", "wendel");
