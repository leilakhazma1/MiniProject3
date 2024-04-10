const pool = require('../db');

class Temperament {
  // Constructor to create a new Temperament object
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  // Static method to get all temperaments from the database
  static async getAll() {
    const [rows, fields] = await pool.query('SELECT * FROM temperaments');
    return rows.map(row => new Temperament(row.id, row.name));
  }

  // Static method to get a temperament by its ID from the database
  static async getById(id) {
    const [rows, fields] = await pool.query('SELECT * FROM temperaments WHERE id = ?', [id]);
    if (rows.length === 0) {
      throw new Error('Temperament not found');
    }
    const { id: temperamentId, name } = rows[0];
    return new Temperament(temperamentId, name);
  }

  // Static method to create a new temperament in the database
  static async create(name) {
    const result = await pool.query('INSERT INTO temperaments (name) VALUES (?)', [name]);
    return new Temperament(result.insertId, name);
  }

  // Static method to update a temperament by its ID in the database
  static async updateById(id, name) {
    await pool.query('UPDATE temperaments SET name = ? WHERE id = ?', [name, id]);
    return new Temperament(id, name);
  }

  // Static method to delete a temperament by its ID from the database
  static async deleteById(id) {
    await pool.query('DELETE FROM temperaments WHERE id = ?', [id]);
  }
}

module.exports = Temperament;
