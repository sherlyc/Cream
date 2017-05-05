const data = require('./data.json')
const fs = require('fs')

function addTask(newTask) {
   var newObj = {
      "task": newTask,
      "priority": "Medium",
      "status": "New"
   }
   data.push(newObj)
   updateJSON(data)
   return data
}

function deleteTask(deleteId) {
    data.splice((deleteId),1)
    updateJSON(data)
}

function editTask(editID, currData, req){
    var updatedTask = {
      "task": req.task,
      "priority": req.priority,
      "status": req.status
   }

   currData[editID] = updatedTask
   updateJSON(currData);
}

function updateJSON(newData){
    var fileName = './data.json'
    fs.writeFile(fileName, JSON.stringify(newData), (err) => {
    	if(err){
    	  throw err;
    	}
    })
}

module.exports = {
  addTask,
  deleteTask,
  editTask,
  updateJSON
}
