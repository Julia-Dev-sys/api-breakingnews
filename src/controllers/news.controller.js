import {createService,findAllService} from "../services/news.service.js";


const create = async (req,res) => {

    try {
        
        const {title,text,banner} = req.body;
        if(!title || !banner || !text){
            res.status(400).send({
                message: "Submit all fiels for registration",
            })
        }

        await createService({
            title,
            text,
            banner,
            user: req.userId//{_id: "644d9ffb8264f136509ed8c1"},
        })
        res.send(201);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
    

};

const findAll = async(req,res) => {
    const news = await findAllService();
    if(news.length === 0){
        return res.status(400).send({message: "There are no registered news"})
    }
    res.send(news);
};

export  {create,findAll};