import { Request, Response } from 'express';


export default {
    Register: (req: Request, res: Response) => {

        console.log(req.body);
    
        res.send("Register Process");
    },
    Login: (req: Request, res: Response) => {

        console.log(req.body);
    
        res.send("Login Process");
    }
}