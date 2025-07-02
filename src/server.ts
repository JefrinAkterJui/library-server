import {Server} from 'http'
import app from './app';
import mongoose from 'mongoose';
import { connectDb } from './app/config/db';

const PORT = 5000;
let server : Server;


async function main(){
    try {
        connectDb()
        server = app.listen(PORT, ()=>{
            console.log(`App Listening on Port ${PORT}`);
        });
    } catch (error) {
        console.log(error)
    }
}

main()
