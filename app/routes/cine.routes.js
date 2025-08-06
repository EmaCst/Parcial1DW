module.exports = app => {
    const cine = require("../controllers/cine.controller.js");
    var router = require("express").Router();
    // Create a new movie
    router.post("/create/", cine.create);
    // Retrieve all movie
    router.get("/", cine.findAll);
    // Retrieve a single movie with id
    router.get("/:id", cine.findOne);
      // Retrieve a single movie with name
    router.get("/name/:id", cine.findOneName);
    // Update a movie with id
    router.put("/update/:id", cine.update);
    // Delete a movie with id
    router.delete("/delete/:id", cine.delete);
    // Delete all movie
    router.delete("/delete/", cine.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/cine/
    app.use("/api/cine", router);
};