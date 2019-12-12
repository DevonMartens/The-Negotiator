var db = require("../models");
var express = require("express")
// var router = require(express.Router())
module.exports = router => {

    router.get("/api/contact", (req,res) => {
        db.dealer.findAll({
            include : [db.Application, db.User]
        }).then (dbdealer => {
            res.json(dbdealer);
        });
    });

    router.get("/api/contact/:id", (req,res) => {
        db.dealer.findOne({
            where : {
                id : req.params.id
            }, include : [db.Application, db.User]
        }).then (dbdealer => {
            res.json(dbdealer);
        });
    });

    router.post("/api/contact", (req, res) => {
        console.log(req.body)
        db.dealer.create(req.body).then(dbdealer => {
            console.log(dbdealer)
            res.json(dbdealer);
        });
    });

    router.put("/api/contact/:id", (req, res)=> {
        db.dealer.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(dbdealer => {
            res.json(dbdealer);
        });
    });

    router.delete("/api/contact/:id", (req,res) => {
        db.dealer.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbdealer => {
            res.json(dbdealer)
        });
    });

};