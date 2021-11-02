import { db } from '../db.js'

export const checkIfUserExists = (req, res, next) => {
  const { id } = req.params
  db.query('SELECT * FROM users WHERE user_id=$1', [id])
    .then((result) => {
      if (!result.rows[0]) return res.sendStatus(404)
      next()
    })
    .catch((err) => console.log(err))
}
