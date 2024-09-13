import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
 
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

restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log('processLogin');
        console.log("body:", req.body);
        const input: LoginInput = req.body;

        const memberService = new MemberService();
        const result = await memberService.processLogin(input);

        res.send(result); 
    } catch (error) {
        console.log("Error, processLogin", error);
        res.send(error);
    }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log('processSignup');

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);
        console.log('Incoming Body:', req.body);
        console.log('Final MemberType:', newMember.memberType);

        res.send(result);
    } catch (error) {
        console.log("Error, processSignup", error);
        res.send(error)
    }
};

export default restaurantController;