(async ()=>{
  const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
  // retorna uma promise console.log(response);
   const data = await response.json()
   for (var item = 0; item<data.USDBRL.length; item ++){
     return item
   }
   document.querySelector("#name").innerHTML = data.USDBRL.name
   document.querySelector("#compra").innerHTML = data.USDBRL.bid
   document.querySelector("#venda").innerHTML = data.USDBRL.ask
   document.querySelector("#variacao").innerHTML = data.USDBRL.varBid
   document.querySelector("#alta").innerHTML = data.USDBRL.high
   document.querySelector("#baixa").innerHTML = data.USDBRL.low
   document.querySelector("#data").innerHTML = `Consulta realizada: ${data.USDBRL.create_date}`
  // console.log(data.USDBRL.cide);

})() 