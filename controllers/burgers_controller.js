const db = require("../models");
;

//set-up routes
module.exports = function (app) {

    app.get("/", function (req, res) {
        db.burger.findAll({}).then(result =>{
            const hbsObject = {
                burgers: result
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        })
    });

    app.post("/api/burgers", function (req, res) {
        console.log(req.body)
        db.burger.create({
            burger_name: req.body.name,
            devoured: req.body.devoured
        }).then(result =>{
            res.json({ id: result.insertId });
        })
    });
    app.put("/api/burgers/:id", function (req, res) {

        const id = req.params.id;

        console.log(id);
        console.log(req.body);

        db.burger.update({
            burger_name: req.body.name,
            devoured: req.body.devoured
        },{
            where: {id: id}
        }).then(result => {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(200).end();
            } else {
                res.status(200).end();
            }
        })
    });
}
