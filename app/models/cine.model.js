//Utilizamos module.export para exportar objetos para que puedan ser utilizados en otras clases
module.exports = (sequelize, Sequelize) => {
// usamos el sequelize.defina para "definir" el nombre de la entity en la BD, en este caso "cliente"
// Usamos type.Sequelize para definir el tipo de datos de cada atributo de la entidad 
    const Cine = sequelize.define("cine", {
        nombre: {
            type: Sequelize.STRING
        },
        sinopsis: {
            type: Sequelize.STRING
        },
        actores: {
            type: Sequelize.STRING
        },
        duracion_en_minutos: {
            type: Sequelize.INTEGER
        },
        
        tipo: {
            type: Sequelize.STRING
        },
        categoria:{
            type: Sequelize.STRING
        },
        anio_lanzamiento: {
            type: Sequelize.INTEGER
        }
    });
    return Cine;
};