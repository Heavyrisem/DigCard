import { Request, Response } from 'express';
import Card, { Card_T, ERROR } from '../../model/Card';

function ErrorHandler (req: Request, res: Response, err?: ERROR) {
    console.log(req.params);
    console.log(req.body);
    switch (err) {
        case ERROR.DB_FAIL: res.status(500).send({err: "Database Error"}); break;
        case ERROR.INVAILD_PARAMS: res.status(400).send({err: "Invaild Params"}); break;
        case ERROR.NOT_FOUND: res.status(404).send({err: "Not Found"}); break;
        default: res.status(500).send({err: "UNKNOWN_ERR"});
    }
}

export default {
    CreateCard: async (req: Request, res: Response) => {
        
        let Params = req.body as Card_T;
        let result = await Card.Create(Params);

        if (result.id) res.send({id: result.id});
        else ErrorHandler(req, res, result.err);
    },
    DeleteCard: (req: Request, res: Response) => {

        console.log(req.body);
    
        res.send("DeleteCard Process");
    },
    UpdateCard: (req: Request, res: Response) => {

        console.log(req.body);
    
        res.send("UpdateCard Process");
    },
    ReadCard: async (req: Request<{id: string}>, res: Response) => {

        const result = await Card.Read(req.params.id);

        if (result.card) res.send({card: result.card});
        else ErrorHandler(req, res, result.err);
        
    }
}