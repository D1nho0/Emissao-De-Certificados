const { MongoClient } = require('mongodb');

async function run() {
    const uri = 'mongodb://localhost:27017'; 
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('meuBanco'); 
        const collection = db.collection('Alunos'); 

        const novoDocumento = {
            nome: 'Cláudio Bernardo',
            idade: 18,
            email: 'craudiobernardo13@gmail.com',
            telefone:"81 98577-1141",
            curso: "Desenvolvimento Web",
            datadenascimento: new Date('01-07-2006'), 
        };
        const multipleInsert = await collection.insertMany([
        { nome: "Maria Ávila", idade: 25,email:'senhorwolf78@gmail.com', telefone:"81 98127-1091", curso: "Introdução a MySQL", datadenascimento: new Date('14-02-2000') },
        { nome: "Carlos Alberto", idade: 35,email:"logogama31@gmail.com", telefone:"", curso: "Introdução a python", datadenascimento: new Date('14-02-1990') },
        { nome: "Ana Castela", idade: 28, email:"omegasolitario13@gmail.com", telefone:"", curso: "Introdução a linux", datadenascimento: new Date('09-03-2000') },
        ]);

        const resultado = await collection.insertOne(novoDocumento);
        console.log('Documento inserido com _id:', resultado.insertedId);
    } finally {
        await client.close();
    }
}

run().catch(console.error);