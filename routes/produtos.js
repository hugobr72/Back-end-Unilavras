var express = require('express');
var router = express.Router();

const produtos = require("../public/Json/produtos.json")

/* GET users listing. */
router.get('/', function (req, res, next) {

  res.send("Get na raiz do cominho produtos");

  //if (!req.query.TOKEN) {
  //res.status(400).send("Usuário sem Token de acesso ou inválido!")
  // return
  //}
  //res.status(200).json(produtos)
});

router.post('/add', function (req, res, next) {

  res.send("Post do caminho produtos/add, seria para adicionar um produto!");

  // if (!req.query.TOKEN) {
  //   res.status(400).send("Usuário sem Token de acesso ou inválido!")
  //   return
  // }

  // if (!req.body) {
  //   res.status(400).send("Sem valores para serem adicionados!")
  //   return
  // }
  // const resProdutos = {
  //   ...produtos, 7: {
  //     id: 8,
  //     name: req.body.name,
  //     description: req.body.description,
  //     price: req.body.price
  //   }
  // }

  // res.status(200).json(resProdutos)

})

module.exports = router;
