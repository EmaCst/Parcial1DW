// importamos db los modelos en este caso si tenemos uno o mas, se puede referenciar db."nombreModelo".   
const db = require("../models");
const Cine = db.cine;
const Op = db.Sequelize.Op;

// Create and Save a new Cine
exports.create = (req, res) => {
    // Validamos que dentro del  request no venga vacio el nombre, de lo contrario returna error
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a movie, definiendo una variable con la estructura del reques para luego solo ser enviada como parametro mas adelante. 
    const cine = {
        nombre: req.body.nombre,
        sinopsis: req.body.sinopsis,
        actores: req.body.actores, 
        duracion_en_minutos: req.body.duracion_en_minutos,
        tipo: req.body.tipo,
        categoria: req.body.categoria,
        anio_lanzamiento: req.body.anio_lanzamiento,
       };

    // Save a new Cine into the database
    Cine.create(cine)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the movie."
            });
        });
};

// Retrieve all movies from the database.
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Cine.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving movies."
            });
        });
};

// Find a single movie with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Cine.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving movie with id=" + id
            });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Cine.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "movie was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update movie with id=${id}. Maybe Client was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating movie with id=" + id
            });
        });
};

// Delete a movie with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    // utilizamos el metodo destroy para eliminar el objeto mandamos la condicionante where id = parametro que recibimos 
    Cine.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "movie was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete movie with id=${id}. La pelicula no fue encontado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete movie with id=" + id
            });
        });
};

// Delete all movies from the database.
exports.deleteAll = (req, res) => {
    Cine.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} movies were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all movies."
            });
        });
};

// Find a single movie with a name
exports.findOneName = (req, res) => {
    const nombre = req.params.id;

    Cine.findBy(nombre)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving movie with id=" + nomobre
            });
        });
};

