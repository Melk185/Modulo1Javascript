(async () => {
    const readline = require("readline");
    let run = true;
    while (run) {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
  
      function readLineAsync(message) {
        return new Promise((resolve, reject) => {
          rl.question(message, (answer) => {
            resolve(answer);
          });
        });
      }
  
      // Leverages Node.js' awesome async/await functionality
      async function demoSynchronousPrompt() {
        var promptInput = await readLineAsync("Digite qual a Operações Aritméticas você deseja: \n- 1 soma \n- 2 Subtração \n- 3 Multiplicação \n- 4 Divisão\n- 0 para sair das Operações\n >");
  
        console.log(
          "Você digitou: ",
          promptInput
        );

        // Criar uma função soma 2 numeros
        function soma(sum1,sum2){
          const ValorSoma = (sum1+sum2)
          return ValorSoma; 
        }

        // Criar uma função soma 2 numeros
        function subtracao(sub1,sub2){
          const ValorSub = (sub1-sub2)
          return ValorSub; 
        }

        function multiplicacao(mult1,mult2){
          const ValorMult = (mult1*mult2)
          return ValorMult; 
        }

        function divisao(div1,div2){
          const ValorDiv= (div1/div2)
          return ValorDiv; 
        }
        
  
        switch (Number(promptInput)) {
          case 1:
            console.log("Você escolheu uma Soma")
            let sum1 = await readLineAsync("Digite o Primeiro Numero >");
            let sum2 = await readLineAsync("Digite o segundo  Numero >");
            let pegaValorSoma = soma(Number(sum1),Number(sum2));
            console.log("Sua Resposta é: "+pegaValorSoma);
            break;
          case 2:
            console.log("Você escolheu uma Subtração")
            let valorSub1 = await readLineAsync("Digite o Primeiro Numero >");
            let valorSub2 = await readLineAsync("Digite o segundo  Numero >");
            let pegaValorSub = subtracao(Number(valorSub1),Number(valorSub2));
              console.log("Sua Resposta é: "+pegaValorSub);   
            break;
          case 3:
            console.log("Você escolheu uma Multiplicação")
            let valorMult1 = await readLineAsync("Digite o Primeiro Numero >");
            let valorMult2 = await readLineAsync("Digite o segundo  Numero >");
            let pegaValorMult = multiplicacao(Number(valorMult1),Number(valorMult2));
            console.log("Sua Resposta é: "+pegaValorMult);
            break;
          case 4:
            console.log("Você escolheu uma Divisão")
            let valorDiv1 = await readLineAsync("Digite o Primeiro Numero >");
            let valorDiv2 = await readLineAsync("Digite o segundo  Numero >");
            let pegaValorDiv = divisao(Number(valorDiv1),Number(valorDiv2));
            console.log("Sua Resposta é: "+pegaValorDiv);
            break;
          case 0:
            run = false;
            console.log("Você Saiu da Operação. HUHA");
            break;
          default:
            console.log("Por Favor escolha uma valor válido ente 0 até 4.");
        }
  
        rl.close();
      }
  
      await demoSynchronousPrompt();
    }
  })();