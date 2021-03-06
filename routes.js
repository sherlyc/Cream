const express = require('express')
const router = express.Router()
var funcs = require('./functions')
var data = require('./data.json')


router.get('/', (req, res) => {
  res.render('home', {data})
})

router.post('/', (req, res) => {
  var newTask = req.body.newTask
  funcs.addTask(newTask)
  res.redirect('/')
})

router.get('/delete/:id', (req, res) => {
  var deleteId=req.params.id
  funcs.deleteTask(deleteId);
  res.redirect('/')
})

router.get('/edit/:id', (req, res) => {
  var editId = req.params.id
  var itemToEdit = data[editId]
  res.render('edit', { item: itemToEdit, query:editId})
})

router.post('/edit/:id', (req, res) => {
  var editId = req.params.id
  funcs.editTask(editId, data, req.body);
  res.redirect('/')
})

module.exports = router
