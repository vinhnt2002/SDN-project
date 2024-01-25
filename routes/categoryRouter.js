const express = require("express");
const bodyParser = require("body-parser");
const Category = require("../models/category");
const categoryRouter = express.Router();

categoryRouter.use(bodyParser.json());
categoryRouter
    .route("/")
    .get((req, res, next) => {
        Category.find({})
            .then(
                (category) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json(category);
                },
                (err) => next(err)
            )
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Category.create(req.body)
            .then(
                (category) => {
                    console.log("Category Created ", category);
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json(category);
                },
                (err) => next(err)
            )
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /category");
    })
    .delete((req, res, next) => {
        Category.deleteMany({})
            .then(
                (resp) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json(resp);
                },
                (err) => next(err)
            )
            .catch((err) => next(err));
    });
module.exports = categoryRouter;