import { Request, Response } from 'express';
import { getFilms } from '../src/controllers/films';
import FilmModel from '../src/models/film';

const mockRequest = (query: any = {}) => ({
    query,
});

const mockResponse = () => {
    const res: Partial<Response> = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    return res as Response;
};

describe('Test films', () => {
    it('should return all films if no release_date is provided', async () => {
        const req = mockRequest();
        const res = mockResponse();

        FilmModel.find = jest.fn().mockResolvedValue([{ title: 'Film 1', release_date: '2022-01-01' }, { title: 'Film 2', release_date: '2023-01-01' }]);
        
        await getFilms(req as Request, res as Response);

        expect(res.send).toHaveBeenCalledWith([{ title: 'Film 1', release_date: '2022-01-01' }, { title: 'Film 2', release_date: '2023-01-01' }]);
    });

    it('should return films filtered by release_date if release_date is provided', async () => {
        const req = mockRequest({ release_date: '2023-01-01' });
        const res = mockResponse();

        FilmModel.find = jest.fn().mockResolvedValue([{ title: 'Film 2', release_date: '2023-01-01' }]);
        
        await getFilms(req as Request, res as Response);

        expect(res.send).toHaveBeenCalledWith([{ title: 'Film 2', release_date: '2023-01-01' }]);
    });

    it('should handle errors properly', async () => {
        const req = mockRequest();
        const res = mockResponse();
    
        await getFilms(req as Request, res as Response);
    
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith({ error: 'Error get films' });
    });
});