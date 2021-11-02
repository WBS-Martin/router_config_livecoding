import { db } from '../db.js'

export const getUsers = (req, res) => {
  db.query('SELECT * FROM users')
    .then((result) => res.json(result.rows))
    .catch((err) => console.log(err))
}

export const getUser = (req, res) => {
  const { id } = req.params
  db.query('SELECT * FROM users WHERE user_id=$1', [id])
    .then((result) => res.json(result.rows))
    .catch((err) => console.log(err))
}

export const deleteUser = (req, res) => {}
