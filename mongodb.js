/*const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID*/

const {MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id)
console.log(id.getTimestamp())
MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log("Unable to connect to DB")
    }

    const db = client.db(databaseName)
    db.collection('users').findOne({name: 'Harshit'} , (error, user) => {
        if(error) {
            return console.log('Error')
        }
        console.log(user)

    })

    db.collection('users').find().toArray((error, users) => {
        console.log(users)
    })
    db.collection('tasks').updateOne({
        _id: new ObjectID("5eb50e0575fbe61a0c430f70")
    }, {
        $set: {
            name: "Lionel",
            age: 28
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})
