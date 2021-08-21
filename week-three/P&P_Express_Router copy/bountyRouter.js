const express = require('express');
const bountyRouter = express.Router();
const {v4: uuidv4 } = require('uuid');

let bounty = [
    {
        firstname: "Luke",
        lastname: "Skywalker",
        living: true,
        bounty_amount: 5,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstname: "Obi Wan",
        lastname: "Kenoby",
        living: true,
        bounty_amount: 3,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstname: "Darth",
        lastname: "Vader",
        living: true,
        bounty_amount: 10,
        type: "Sith",
        _id: uuidv4()
    },
];

bountyRouter

    .get('/', (req, res) => {
    res.send(bounty);
    })

    .post('/', (req, res) => {
    const newBounty = req.body;
    newBounty._id = uuidv4();
    bounty.push(newBounty);

    console.log(bounty);
    res.send(`New Bounty Alert! Next Objective, Eliminate ${newBounty.firstname} ${newBounty.lastname}`)
    });
module.exports = bountyRouter;
