import { Request, Response } from 'express';
import { getPeoples } from '../src/controllers/people';
import PeopleModel from '../src/models/people';

type PeopleQuery = {
    gender?: string;
};

const mockRequest = (query: PeopleQuery = {}) => ({
    query,
});

const mockResponse = () => {
    const res: Partial<Response> = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    return res as Response;
};

describe('Test people', () => {
    it('should return all people if no gender is provided', async () => {
        const req = mockRequest();
        const res = mockResponse();

        PeopleModel.find = jest.fn().mockResolvedValue([{ name: 'John', gender: 'male' }, { name: 'Alice', gender: 'female' }]);
        
        await getPeoples(req as Request, res as Response);

        expect(res.send).toHaveBeenCalledWith([{ name: 'John', gender: 'male' }, { name: 'Alice', gender: 'female' }]);
    });

    it('should return people filtered by gender if gender is provided', async () => {
        const req = mockRequest({ gender: 'male' });
        const res = mockResponse();

        PeopleModel.find = jest.fn().mockResolvedValue([{ name: 'John', gender: 'male' }]);
        
        await getPeoples(req as Request, res as Response);

        expect(res.send).toHaveBeenCalledWith([{ name: 'John', gender: 'male' }]);
    });

    it('should handle errors properly', async () => {
        const req = mockRequest();
        const res = mockResponse();
    
        await getPeoples(req as Request, res as Response);
    
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith({ error: 'Error get peoples' });
    });
});
