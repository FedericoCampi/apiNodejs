import 'dotenv/config';
import { connect } from 'mongoose';

async function dbConnect(): Promise<void> {

    const DB_URI = <string>process.env.DB_URI;

    try {
        await connect(DB_URI);
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

export default dbConnect;