import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();

// Home
const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome');
        res.render('home');
    } catch (error) {
        console.log("Error, goHome", error);
    }
}

// Signup
restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup');
        res.render('signup');
    } catch (error) {
        console.log("Error, getSignup", error);
    }
};

// Login
restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin');
        res.render('login');  
    } catch (error) {
        console.log("Error, getLogin", error);
    }
}

// ProcessSignup
restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log('processSignup');

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);
        // TODO: SESSIONS AUTHENTICATION

        res.send(result);
    } catch (error) {
        console.log("Error, processSignup", error);
        res.send(error)
    }
};

// ProcessLogin
restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log('processLogin');
        console.log("body:", req.body);
        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input);
        // TODO: SESSIONS AUTHENTICATION

        res.send(result); 
    } catch (error) {
        console.log("Error, processLogin", error);
        res.send(error);
    }
};

export default restaurantController;