import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
 
const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHomes');
        res.send("Home Page");
    } catch (error) {
        console.log("Error, goHome", error);
    }
}

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin');
        res.send("Login Page");  
    } catch (error) {
        console.log("Error, getLogin", error);
    }
}

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup');
        res.send("Signup Page");
    } catch (error) {
        console.log("Error, getSignup", error);
    }
};

restaurantController.processSignup = (req: Request, res: Response) => {
    try {
        console.log('processSignup');
        res.send("DONE");
    } catch (error) {
        console.log("Error, processSignup", error);
    }
};

restaurantController.processLogin = (req: Request, res: Response) => {
    try {
        console.log('processLogin');
        res.send("DONE"); 
    } catch (error) {
        console.log("Error, processLogin", error);
    }
};

export default restaurantController;