import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";

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
        res.redirect("/admin")
    }
};

// Login
restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin');
        res.render('login');  
    } catch (error) {
        console.log("Error, getLogin", error);
        res.redirect("/admin")
    }
}

// ProcessSignup
restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log('processSignup');
        const file = req.file;
        if (!file)
            throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);
        console.log("file:", file);

        const newMember: MemberInput = req.body;
        newMember.memberImage = file?.path; 
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);

        req.session.member = result;
        req.session.save(function() {
            res.redirect("/admin/product/all");
        });

    } catch (error) {
        console.log("Error, processSignup", error);
        const message = error instanceof Errors ? error.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('admin/signup') </script>`);
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
            res.redirect("/admin/product/all");
        });

    } catch (error) {
        console.log("Error, processLogin", error);
        const message = error instanceof Errors ? error.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('admin/login') </script>`);
    }
}

// Logout
restaurantController.logout = async (req: AdminRequest, res: Response) => {
    try {
        console.log('logout');
        req.session.destroy(function() {
            res.redirect("/admin")
        });
    } catch (error) {
        console.log("Error, logout", error);
        res.redirect("/admin")
    }
}

// GetUsers
restaurantController.getUsers = async (req: AdminRequest, res: Response) => {
    try {
        console.log('getUsers');
        const result = await memberService.getUsers();
        res.render("users", { users: result });
        console.log("result:", result);
        
     
    } catch (error) {
        console.log("Error, getUsers", error);
        res.redirect("/admin/login")
    }
}

// UpdateChosenUsers
restaurantController.updateChosenUsers = async (req: AdminRequest, res: Response) => {
    try {
        console.log('updateChosenUsers');
    
    } catch (error) {
        console.log("Error, updateChosenUsers", error);
        res.redirect("/admin/l")
    }
}

// checkAuth
restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => {
    try {
        console.log('checkAuthSession');
        if (req.session?.member) 
            res.send(`<script> alert("${req.session.member.memberNick}")</script>`)
        else res.send(`<script>alert('${Message.NOT_AUTHENTICATED}')</>`)
    
    } catch (error) {
        console.log("Error, checkAuthSession", error);
        res.send(error);
    }
}
// verifyRes
restaurantController.verifyRestaurant = (req: AdminRequest, res: Response, next: NextFunction) => {
    if (req.session?.member?.memberType === MemberType.RESTAURANT) {
        req.member = req.session.member;
        next();
    } else {
        const message = Message.NOT_AUTHENTICATED;
        res.send(`<script>alert('${message}'); window.location.replace('/admin/login'); </script>`);
    }
}



export default restaurantController;