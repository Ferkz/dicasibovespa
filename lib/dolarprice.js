const axios = require ('axios').default
const fs = require ('fs');

async function getCotacao(){
  const {data} = await axios.get ('https://economia.awesomeapi.com.br/last/USD-BRL')
  console.log(data);
  fs.writeFile('cotacao.json',JSON.stringify(data,null,2),erro =>{
    if(erro) throw new Error ('EROU')
    console.log('tudo ok');
  })
}
getCotacao()