const express = require('express')
const { ServerConfig} = require('./config')



dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/stories', storyRoutes);


app.listen(ServerConfig.PORT, ()=>{
    console.log(`Successfully started the server on port : ${ServerConfig.PORT}`);
    
});