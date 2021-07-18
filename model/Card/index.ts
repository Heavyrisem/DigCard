import DB from '../DB';
import crypto from 'crypto';

export interface Card_T {
    [index: string]: string | undefined,
    id?: string | undefined,
    name: string,
    job: string,
    email: string,
    phone: string,
    URL: string,
    author: string
}

export enum ERROR {
    INVAILD_PARAMS,
    DB_FAIL,
    NOT_FOUND
}

export default {
    Create: (card: Card_T): Promise<{id?: string, err?: ERROR}> => {
        return new Promise(async resolve => {
            const KEYS = ["name", "job", "email", "author", "phone", "URL"];
            for (const NM of KEYS) if (!card[NM]) return resolve({err: ERROR.INVAILD_PARAMS});

            const db = DB.GetConnection();
            card.id = crypto.createHash('sha256').update(card.author + Date.now().toString()).digest('hex');

            if ((await db.collection('Cards').insertOne(card)).insertedId) return resolve({id: card.id});
            else return resolve({err: ERROR.DB_FAIL});
        })
    },
    Read: (ID: string): Promise<{card?: Card_T, err?: ERROR}> => {
        return new Promise(async resolve => {
            if (!ID) return resolve({err: ERROR.INVAILD_PARAMS});

            const db = DB.GetConnection();
            const card = await db.collection('Cards').findOne<Card_T>({id: ID});
            
            if (card) return resolve({card: card});
            else return resolve({err: ERROR.NOT_FOUND});
        })
    }
}