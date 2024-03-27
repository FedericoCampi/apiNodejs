import { Request, Response } from 'express';
import { getPlanets } from '../src/controllers/planets';
import PlanetModel from '../src/models/planet';

const mockRequest = (query: any = {}) => ({
    query,
});

const mockResponse = () => {
    const res: Partial<Response> = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    return res as Response;
};

describe('Test planets', () => {
    it('should return all planets if no climate is provided', async () => {
        const req = mockRequest();
        const res = mockResponse();

        PlanetModel.find = jest.fn().mockResolvedValue([{ name: 'Planet 1', climate: 'temperate' }, { name: 'Planet 2', climate: 'arid' }]);
        
        await getPlanets(req as Request, res as Response);

        expect(res.send).toHaveBeenCalledWith([{ name: 'Planet 1', climate: 'temperate' }, { name: 'Planet 2', climate: 'arid' }]);
    });

    it('should return planets filtered by climate if climate is provided', async () => {
        const req = mockRequest({ climate: 'temperate' });
        const res = mockResponse();

        PlanetModel.find = jest.fn().mockResolvedValue([{ name: 'Planet 1', climate: 'temperate' }]);
        
        await getPlanets(req as Request, res as Response);

        expect(res.send).toHaveBeenCalledWith([{ name: 'Planet 1', climate: 'temperate' }]);
    });

    it('should handle errors properly', async () => {
        const req = mockRequest();
        const res = mockResponse();
    
        await getPlanets(req as Request, res as Response);
    
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith({ error: 'Error get planets' });
    });
});