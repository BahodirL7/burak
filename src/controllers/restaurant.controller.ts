import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { Message } from "../libs/Errors";

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
restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log('processSignup');

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);

        req.session.member = result;
        req.session.save(function() {
            res.send(result);
        });

    } catch (error) {
        console.log("Error, processSignup", error);
        res.send(error)
    }
};

// ProcessLogin
restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log('processLogin');
        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input);

        req.session.member = result;
        req.session.save(function() {
            res.send(result);
        });

    } catch (error) {
        console.log("Error, processLogin", error);
        res.send(error);
    }
}

restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => {
    try {
        console.log('checkAuthSession');
        if (req.session?.member) res.send(`Hi, ${req.session.member.memberNick}`)
        else res.send(`<script>alert('${Message.NOT_AUTHENTICATED}')</script>`)
    
    } catch (error) {
        console.log("Error, checkAuthSession", error);
        res.send(error);
    }
}

export default restaurantController;