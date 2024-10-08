import { Request, Response } from "express";
import { T } from "../libs/types/common"
import MemberService from "../models/member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";

const memberService = new MemberService();

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log('signup');

        const input: MemberInput = req.body,
            result: Member = await memberService.signup(input);
        // TODO: TOKENS AUTHENTICATION

        res.json( {member: result} );
    } catch (error) {
        console.log("Error, signup", error);
        if (error instanceof Errors) res.status(error.code).json(error);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log('login');

        const input: LoginInput = req.body,
            result = await memberService.login (input);
        // TODO: TOKENS AUTHENTICATION
        
        res.json( {member: result} );
    } catch (error) {
        console.log("Error, login", error);
        if (error instanceof Errors) res.status(error.code).json(error);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

export default memberController;