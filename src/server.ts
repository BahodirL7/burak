// Architectural pattern: MVC, DI, MVP

// MVC = MODAL, VIEW, CONTROLLER
// DI = DEPENDENCY INJECTION

// Design pattern: Middleware, Decorator

import dotenv from 'dotenv';
dotenv.config();
console.log(dotenv.config());

console.log("PORT:", process.env.PORT);

// MongoDB == CLUSTER => DATABASE => COLLECTION => DOCUMENT = DISTRIBUTED DATABASE (DB);
// MySQL == CLUSTER => DATABASE => TABLE => DATA = RELATIONAL DATABASE;

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL as string, {})
.then((data) => 
    {console.log("MongoDB connection succeed")
    const PORT = process.env.PORT ?? 3003;
})
.catch((err) => console.log("Error on connection to MongoDB", err)
);