const data = require('./data.json')
const fs = require('fs')

function addTask(newId, newTask) {
   var newObj = {
      "id": newId,
      "task": newTask,
      "priority": "Medium",
      "status": "New"
   }
   data.push(newObj)
   updateJSON(data)
   return data
}

function deleteTask(deleteId) {
    var itemToDelete = data.find(function(item){
      return item.id == deleteId
    })
    var indexToDelete = data.indexOf(itemToDelete)
    data.splice((indexToDelete),1)
    updateJSON(data)
}

function editTask(editID, currData, req){
    var itemToEdit = currData.find(function(item){
      return item.id == editID
    })
    var updatedTask = {
      "id": editID,
      "task": req.task,
      "priority": req.priority,
      "status": req.status
   }

   for(var i=0; i< currData.length; i++){
		if(currData[i].id == editID){
            currData[i] = updatedTask
		}
    }
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
