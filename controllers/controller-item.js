const Model = require('../models/item-model')

class Controller{
    static getItem(req,res){
        Model.find()
        .then(items=>{
            res.status(200).json({
                message: 'get Data',
                items
            })
        })
        .catch(err=> {
            res.status(400).json({
                message: err
            })
        })
    }
    static postItem(req,res){
        console.log(req.body)
        let obj = {
            itemName: req.body.itemName,
            price: req.body.price,
            imgSrc: req.body.imgSrc,
            brand: req.body.brand,
            gender: req.body.gender,
            released: req.body.released,
            typeJersey: req.body.typeJersey
        }
        let newPost = new Model(obj)
        newPost.save()
        .then(items=> {
            res.status(200).json({
                message: 'sukses posting',
                items
            })
        })
        .catch(err=> {
            res.status(400).json({
                message: err
            })
        })
    }
    static deleteItem(req,res) {
        Model.findByIdAndRemove({
            _id: req.params.id
        })
        .then(()=>{
            res.status(200).json({
                message: "item deletd"
            })
        })
    }
    static updateItem (req,res) {
        let id = req.params.id
        let obj = {
            itemName: req.body.itemName,
            price: req.body.price,
            imgSrc: req.body.imgSrc,
            brand: req.body.brand,
            gender: req.body.gender,
            released: req.body.released,
            typeJersey: req.body.typeJersey
        }
        Model.findByIdAndUpdate(id,obj)
        .then(updated=> {
            res.json({
                message: 'succesfully update',
                updated
            })
        })
    }
}

module.exports = Controller