const db = require('../database');

const opiskelija = {
  getAll: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from opiskelija where id_opiskelija=?', [id], callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'insert into opiskelija (etunimi,sukunimi,puoli,sähköposti,puhelinnumero) values(?,?,?,?,?)',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.puoli, opiskelija.sähköposti, opiskelija.puhelinnumero],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opiskelija where id_opiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    return db.query(
      'update opiskelija set etunimi=?,sukunimi=?, puoli=?,sähköposti=?,puhelinnumero=? where id_opiskelija=?',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.puoli, opiskelija.sähköposti, opiskelija.puhelinnumero, id],
      callback
    );
  }
};
module.exports = opiskelija;



