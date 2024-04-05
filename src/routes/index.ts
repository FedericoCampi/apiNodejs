import { Router } from "express";
import { readdirSync } from 'fs';

interface ModuleRouter {
    router: Router;
}

const PATH_ROUTER = `${__dirname}`;

const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift()
    return file;
}

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if(cleanName !== 'index'){
        import(`./${cleanName}`).then((moduleRouter: ModuleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})

export { router };