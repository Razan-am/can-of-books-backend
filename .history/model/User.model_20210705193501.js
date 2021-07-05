const mongoose = require('mongoose');

const testingbooks = new mongoose.Schema({
    email: { type: String },
    books: { type: Array }
})

const UserModel = mongoose.model('testingbooks', testingbooks);

// const BookSchema = () => {
//     books.push({
//         name: 'name',
//         description: 'description',
//         status: 'status'
//     })
// }
console.log('new message');
const userObject = () => {
    let data = new UserModel({
        email: 'email@gmail.com',
        books: `hello`
    })
    console.log('user', data)
    data.save()
}

module.exports = UserModel