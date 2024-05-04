require("dotenv").config();
const mongoose = require("mongoose");
const Produto = require('./modelo')

const url = process.env.MONGODB_URL;

async function main() {
  try {
    await mongoose.connect(url);
    console.log("De boas");
  } catch (err) {
    console.log("Deu ruim!", err.message);
  }


    //inserir 1 produto
  const produto = new Produto({
    nome: "uva",
    preco: 12,     
  });
  try {
    await produto.save();
    console.log(produto)

  } catch (err) {
    for(let key in err.errors) {
        console.log(err.errors[key].message);
    }
  }
;



  //inserir 1 produto
  //const produto = new Produto({
    //nome: "banana",
    //preco: 12, 
    //quantidade: 5
  //});
  //await produto.save();
  //console.log(produto);

  //const produto = await Produto.create({
    //nome: "uva",
    //preco: 32.5,
    //quantidade: 10
  //});
  //console.log(produto);
  //inserir N produtos
  //const produtos = await Produto.insertMany([
    //{nome: "maça", preco: 20.7, quantidade: 8},
    //{nome: "pera", preco: 12.5, quantidade: 18},
    //{nome: "laranja", preco: 25.6, quantidade: 28},
  //])
  //console.log(produtos);
//consultar 1 produto
  //const produto = await Produto.findOne({nome: "banana"});
  //console.log(produto);
  //consultar N produtos
  //const produtos = await Produto.find({nome: "banana"});
  //console.log(produtos);
  //atualizar 1 produto
  //const produto = await Produto.findOneAndUpdate(
    //{ nome: "banana" },
    //{ nome: "banana nanica", preco: 15.0, quantidade:20}
  //);
  //console.log(produto);
  //const result = await Produto.updateOne(
    //{ nome: "uva" },
    //{ nome: "uva globo", preco: 19.0, quantidade:11}
  //);
  //console.log(result);
  // remover 1 produto
  //const produto = await Produto.findOneAndDelete({nome:"uva"});
  //console.log(produto);

  // remover N produtos
  //const produto = await Produto.elete({nome:"uva"});
  //console.log(produto);
  
  
  await mongoose.disconnect();
}

main();