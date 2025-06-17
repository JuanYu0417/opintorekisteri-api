const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from arviointi where id_arviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (arvosana,päivämäärä,id_opiskelija,id_opintojakso) values(?,?,?,?)',
      [arviointi.arvosana, arviointi.päivämäärä, arviointi.id_opiskelija, arviointi.id_opintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where id_arviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set arvosana=?,päivämäärä=?, id_opiskelija=?,id_opintojakso=? where id_arviointi=?',
      [arviointi.arvosana, arviointi.päivämäärä, arviointi.id_opiskelija, arviointi.id_opintojakso,id],
      callback
    );
  }
};
module.exports = arviointi;