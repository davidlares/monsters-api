const Router = require('express')
const pool = require('../db')

const router = Router()

router.get('/', (req, res, next) => {
  pool.query('SELECT * FROM lives', (err, res) => {
    if(err) return next(err)
    res.json(res.rows)
  })
})

router.get('/conditions', (req, res, next) => {
  pool.query('SELECT * FROM lives JOIN habitats ON habitats.name == lives.habitats', (err, res) => {
    if(err) return next(err)
    res.json(res.rows)
  })
})

module.exports = router
