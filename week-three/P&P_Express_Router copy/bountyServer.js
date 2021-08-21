const express = require('express');
const bounty = express();

const bountyRouter = require('./bountyRouter');
const PORT = 3000;
bounty.use(express.json());

bounty.use('/bounty', bountyRouter);
bounty.listen(PORT, () => {
    console.log(`The Bounty Server started on ${PORT}`);
});
