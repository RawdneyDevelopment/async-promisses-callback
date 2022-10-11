console.log(1);
console.log(2);
console.log(3);
/* o javascript executa o código por meio de filas
o código é executado de forma sequencia.
*/

setTimeout(()=>{
    console.log('setTimeOut data')
}, 1);

const promise = new Promise(resolve => {
    resolve('promise data')
});


for(let i= 1; i <= 1000, i++){
    console.log(i)
}

/* no event loop ele irá pula as filas que tem pendencia
assim deixando pra pra realizar na proxima fila.
*/