/**
 * Contact.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      
      phone: {
          type: 'string'
      },
      
      facebook: {
          type: 'string'
      },
      
      twitter: {
          type: 'string'
      },
      
      idRestaurant: {
          // Model-> es el nombre de la tabla padre
          model: 'Restaurant',
          // Required es OPCIONAL si no queremos registros huerfanos de raza
          unique: true
          //required:true
      } 

  }
};

