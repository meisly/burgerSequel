const express = require("express");

const router = express.Router();

const burgers = require("../models/burger");

//set-up routes
router.get("/", function (req, res) {
    burgers.selectAll(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log(req.body)
    burgers.insertOne(req.body.name, function (result) {
        console.log(result)
        res.json({ id: result.insertId });
    })
});
router.put("/api/burgers/:id", function (req, res) {
    const id = req.params.id;

    console.log(id);
    console.log(req.body);

    burgers.updateOne(
        req.body.devoured,
        id, function (result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(200).end();
            } else {
                res.status(200).end();
            }
        });
});
module.exports = router;