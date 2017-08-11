/**
 * Restaurant.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      
      name :{
          type: 'string'
      },
      
      img :{
          type: 'string'          
      },
      
      description:{
          type: 'string'
          
      },
      
      location: {
            // Collection -> Nombre del Modelo en Sails
            collection: 'Location',
            // Via-> Es el campo por el cual vamos a relacionar FOREIGN KEY
            via: 'idRestaurant'
      },
      
      categorie: {
          // Model-> es el nombre de la tabla padre
          model: 'Categorie',
          // Required es OPCIONAL si no queremos registros huerfanos de raza
          required:true
      },       
      
      
      contact: {
          collection: 'Contact',
          via: 'idRestaurant'
      }
      


  }
};

