import {connect} from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();

export const mongoConnect = async () => {
    try {
        console.log("Conectando ao MONGODB...");

        await connect(process.env.MONGO_URL as string);

        console.log("mongo db conectado com sucesso.")

    }catch(e){
        console.log("Erro conexão MONGODB: ", e);
    }
    
}