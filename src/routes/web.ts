import express, {Express} from 'express'

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get('/', (req,res) => {
        res.render('home.ejs')
    });
    
    router.get('/louisdev', (req,res) => {
        res.send(`<h1>Hi, Louis here. How are You?</h1>`)
    });
    
    router.get('/abc_angel', (req,res) => {
        res.send("🫰 Hi. abc_Angel Group Dance")
    });

    app.use('/', router);
}

export default webRoutes;