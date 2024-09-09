import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
    res.send("Home Page");
        
    } catch (error) {
        console.log("Error, goHome", error);
    }
}

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
    res.send("Login Page");  
    } catch (error) {
        console.log("Error, getLogin", error);
    }
}

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
    res.send("Signup Page");
    } catch (error) {
        console.log("Error, getSignup", error);
    }
};

export default restaurantController