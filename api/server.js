// implement your server here
// require your posts router and connect it here
const express = require("express")
const server = express()
const PostsRouter = require('./posts/posts-router')
server.use(express.json())

server.use('/api/posts', PostsRouter)



module.exports = server