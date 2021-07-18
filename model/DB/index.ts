import { MongoClient } from 'mongodb';
import DBconfig from './Config.json';

class DB {
    DB_Client: MongoClient;
    
    constructor() {
        this.DB_Client = new MongoClient(`mongodb://${DBconfig.user}:${DBconfig.pwd}@${DBconfig.host}/${DBconfig.DataBase}`);
        this.DB_Client.connect();
        console.log("Database Connected");
        
        this.test();
    }

    async test() {
        let tmp = await this.DB_Client.db().collection('Cards').findOne<{id: string}>({id: "0abe19d58f8355399304550bc1e3cdf1847b3d04cf12fa569ff97ab1ef403bc6"});
        if (tmp)
            console.log(tmp);
    }

    GetConnection() {
        return this.DB_Client.db();
    }
}

export default new DB();