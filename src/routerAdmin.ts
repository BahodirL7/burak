import express from "express";
const router = express.Router();
import restaurantController from "./controllers/member.controller";

router.get("/", restaurantController.goHome);

router.get("/login", restaurantController.getLogin)

router.get("/signup", restaurantController.getSignup)

export default router;