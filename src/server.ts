/*
Architectural pattern: MVC, DI, MVP

MVC = MODAL, VIEW, CONTROLLER
DI = DEPENDENCY INJECTION

Design pattern: Middleware, Decorator
*/

/*
MongoDB == CLUSTER => DATABASE => COLLECTION => DOCUMENT = DISTRIBUTED DATABASE (DB);
MySQL == CLUSTER => DATABASE => TABLE => DATA = RELATIONAL DATABASE;
*/

import dotenv from 'dotenv';
dotenv.config();
console.log(dotenv.config());
console.log("PORT:", process.env.PORT);

import mongoose from 'mongoose';
import app from "./app"

mongoose
.connect(process.env.MONGO_URL as string, {})
.then((data) => {
    console.log("MongoDB connection succeed")
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function(){
        console.log(`The server is running successfully on port: ${PORT}`);
    })
})
.catch((err) => console.log("Error on connection to MongoDB", err)
);