require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5eb6b746cc74c32ff40d3cc5').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount("5eb6b7f72d156c33f8f2ecef").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})