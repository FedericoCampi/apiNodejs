import { Request, Response } from 'express';
import { getStarships } from '../src/controllers/starships';
import StarshipModel from '../src/models/starship';

type StarshipsQuery = {
    passengers?: string;
};

const mockRequest = (query: StarshipsQuery = {}) => ({
    query,
});

const mockResponse = () => {
    const res: Partial<Response> = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    return res as Response;
};

describe('Test starships', () => {
    it('should return all starships if no passengers is provided', async () => {
        const req = mockRequest();
        const res = mockResponse();

        StarshipModel.find = jest.fn().mockResolvedValue([{ name: 'Starship 1', passengers: 100 }, { name: 'Starship 2', passengers: 200 }]);
        
        await getStarships(req as Request, res as Response);

        expect(res.send).toHaveBeenCalledWith([{ name: 'Starship 1', passengers: 100 }, { name: 'Starship 2', passengers: 200 }]);
    });

    it('should return starships filtered by passengers if passengers is provided', async () => {
        const req = mockRequest({ passengers: '100' });
        const res = mockResponse();

        StarshipModel.find = jest.fn().mockResolvedValue([{ name: 'Starship 1', passengers: 100 }]);
        
        await getStarships(req as Request, res as Response);

        expect(res.send).toHaveBeenCalledWith([{ name: 'Starship 1', passengers: 100 }]);
    });

    it('should handle errors properly', async () => {
        const req = mockRequest();
        const res = mockResponse();
    
        await getStarships(req as Request, res as Response);
    
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith({ error: 'Error get starships' });
    });
});