import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

routerAdmin.get("/", restaurantController.goHome);

routerAdmin
.get("/login", restaurantController.getLogin)
.post("/login", restaurantController.processLogin);

routerAdmin.post("/login/process", restaurantController.processLogin)

routerAdmin
.get("/signup", restaurantController.getSignup)
.post("/signup", restaurantController.processSignup);

export default routerAdmin;

function post(arg0: string, processLogin: any) {
    throw new Error("Function not implemented.");
}
