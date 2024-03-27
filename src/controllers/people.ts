import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import PeopleModel from "../models/people";

const getPeoples = async (req:Request, res: Response) => {

    try {
        const gender = req.query.gender;

        if (!gender) {
            const datos = await PeopleModel.find({});
            res.send(datos);
            
        }else{
            const datos = await PeopleModel.find({ gender: gender });
            res.send(datos);
        }
        //forzar error para test
        //throw new Error('Forzando un error');
    } catch (error) {
        handleHttp(res, 'Error get peoples');
    }
}

export { getPeoples };