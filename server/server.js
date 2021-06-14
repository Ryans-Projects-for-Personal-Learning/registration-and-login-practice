require ("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());

//Get user by ID route
app.get("/api/v1/users/:id", async (req,res) => {
    console.log(req.params);

    try {
        const user = await db.query(`select * from users where id = $1;`, [req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                user: user.rows[0]
            },
        });
    } catch (err) {
        console.log(err);
    }

    });

//Send login details to server
app.post("/api/v1/users/login", async (req,res) => {
    console.log(req.body);

    try {
        const count = await db.query(`select count(username) from users where username = $1 and password = $2;`, [req.body.username,req.body.password]);
        const countvar = count.rows[0].count;
        if(countvar == 0) throw "User or password is incorrect";
        const user = await db.query(`select * from users where username = $1 and password = $2;`, [req.body.username,req.body.password]);
        res.status(201).json({
            status: "success",
            data: {
                count,
                user: user.rows[0]
            },
        });
    } catch (err) {
        console.log(err);
    }

    });

//Create user
app.post("/api/v1/users", async (req,res) => {
    console.log(req.body);

    try {
        const user = await db.query("insert into users (username,password) VALUES ($1,$2) returning *;",[req.body.username,req.body.password]);
        console.log(user);
        res.status(201).json({
            status: "success",
            data: {
                username: user.rows[0],
            }
        });
    } catch (err) {
        console.log(err);
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});
