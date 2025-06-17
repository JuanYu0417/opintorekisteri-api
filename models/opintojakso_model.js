const db = require('../database');

const opintojakso = {
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from opintojakso where id_opintojakso=?', [id], callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (nimi,koodi,opintopisteet,laajuus) values(?,?,?,?)',
      [opintojakso.nimi, opintojakso.koodi, opintojakso.opintopisteet, opintojakso.laajuus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where id_opintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set nimi=?, koodi=?, opintopisteet=?, laajuus=? where id_opintojakso=?',
      [opintojakso.nimi, opintojakso.koodi, opintojakso.opintopisteet, opintojakso.laajuus, id],
      callback
    );
  }
};
module.exports = opintojakso;


