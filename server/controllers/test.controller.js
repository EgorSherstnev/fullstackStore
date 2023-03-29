const db = require('../db_test');
class TestController {
   async createTest(req,res) {
      const {name} = req.body
      const test = await db.query(`INSERT INTO test (name) values ($1) RETURNING *`, [name])
      res.json(test.rows[0])
   }
}

module.exports = new TestController();