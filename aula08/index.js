const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb+srv://sasaestudo2018:Mongo85412421@cluster0.ztjtz3c.mongodb.net/'

async function conectar() {
    try {
      const mongoClient = await MongoClient.connect(url);
      return mongoClient.db("loja");
    } catch (error) {
      console.log("Deu ruim!", error);
    }
  }
  
  async function inserir(produto) {
    const db = await conectar();
    return db.collection("produtos").insertOne(produto);
  }
  
  async function listar() {
    const db = await conectar();
    return db.collection("produtos").find({}).toArray();
  }
  
  async function atualizar(id, produtoAtualizado) {
    const db = await conectar();
    return db
      .collection("produtos")
      .updateOne({ _id: new ObjectId(id) }, { $set: produtoAtualizado });
  }
  
  async function remover(id) {
    const db = await conectar();
    return db.collection("produtos").deleteOne({ _id: new ObjectId(id) });
  }
  
  async function testar() {
    const result = await inserir({ nome: "banana", preco: 20.0 });
    console.log("Produto inserido", result);
  
    const produtos = await listar();
    console.log("Listagem de produtos", produtos);
  
    const atual = await atualizar("66284ea61025a240b4edfc55", {
      nome: "banana nanica",
      preco: 18.0,
    });
    console.log("Produto atualizado", atual);
  
    const removido = await remover("66284ea61025a240b4edfc55");
    console.log('Produto removido', removido);

}

testar();