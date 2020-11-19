// const registerUser = {
//   email: 'testuser@mail.com',
//   password: 'testpass123',
//   name: 'test1234',
//   role: '1'
// }
// const loginUser = {
//   email: 'testuser@mail.com',
//   password: 'testpass123'
// }
// let token;
// beforeAll(async ()=> {
//   await db('users').truncate()
//   request(server)
//   .post('/api/auth/register')
//   .send(registerUser)
//   .then(res => {
//       console.log("register response -->", res.body)
//   })
// })
// beforeAll((done) => {
//   request(server)
//     .post('/api/auth/login')
//     .send(loginUser)
//     .then((response) => {
//       token = response.body.token
//       console.log("the response you're looking for -->", token)
//       done();
//     });
// });
// afterAll(async () => {
//     await db('users').truncate()
// })
// beforeAll(async ()=> {
//   await db('posts').truncate()
// })
