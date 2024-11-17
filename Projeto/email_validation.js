const input_nome = document.querySelector("#input_nome") 
const input_email = document.querySelector("#input_email")
const input_phone = document.querySelector("#input_phone")
const resultMessage = document.querySelector("#resultMessage")
const form = document.querySelector("#Formulario")

// validacao em tempo real 
input_email.addEventListener("input", function() {
    const email = input_email.value;
    const isValid = valida_input_email(email); 

    if (isValid) {
        resultMessage.textContent = "E-mail válido!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "E-mail inválido!";
        resultMessage.style.color = "red";
    }
});

form.addEventListener("submit", function(event){
    event.preventDefault();
    
    const email = input_email.value;

      //validar email 
      const IsValid = valida_input_email(email); 

      if(IsValid)
      {
        resultMessageesultMessage.textContent = "E-mail válido!";
      }
      else
      {
          resultMessage.textContent = "E-mail inválido!";

      }

})

const valida_input_email = (email) =>{
    // const Regex = /^{^\s}+@[^\s]+\.{^\s}+$/;
    const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return Regex.test(email); 
}

// input_phone.addEventListener("input", () =>{

//     //remove caracteres não numérios
//     const limparPhone = input_phone.value.replace(/\D/g, "").substring(0,11);

//     //Dividir a string em um array de caracteres individuais
//     const PhoneArray = limparPhone.split("");

//     //Cria a variavel para receber número formatado
//     const numero_formatado  = "";

//     //Acessa o IF quando a quantidade de números é maior do que zero 
//     //(12)91917-7775
//     if(PhoneArray.length > 0)
//     {
//         numero_formatado += `(${PhoneArray.slice(0,2).join("")})`;
//     }

//     //envia valor formatado para campo telefone
//     input_phone.value = numero_formatado; 
// })

input_phone.addEventListener("input", () => {
    // Remove caracteres não numéricos e limita a 11 dígitos
    const limparPhone = input_phone.value.replace(/\D/g, "").substring(0, 11);

    // Cria a variável para receber o número formatado
    let numero_formatado = "";

    // Adiciona os parênteses e o DDD
    if (limparPhone.length > 0) {
        numero_formatado += `(${limparPhone.slice(0, 2)}) `;
    }

    // Adiciona os cinco dígitos do início do número (após o DDD)
    if (limparPhone.length >= 7) {
        numero_formatado += `${limparPhone.slice(2, 7)}-`;
    } else if (limparPhone.length > 2) {
        numero_formatado += limparPhone.slice(2, limparPhone.length);
    }

    // Adiciona os quatro dígitos finais
    if (limparPhone.length > 7) {
        numero_formatado += limparPhone.slice(7, 11);
    }

    // Envia valor formatado para o campo telefone
    input_phone.value = numero_formatado;
});

// função responsavel por Integração oom planilha 
document.addEventListener('DOMContentLoaded', function () {
    const script_do_google = 'https://script.google.com/macros/s/AKfycbyAShP3CSyRHzUwWh5MAvq77_0qteg-XexZCytUKbEOSeaIxJaNRybVsujVC3SO35Mo/exec';
    const dados_do_form = document.getElementById('Formulario');

    dados_do_form.addEventListener('submit', function (event) {
        event.preventDefault();

        fetch(script_do_google, {
            method: 'POST',
            body: new FormData(dados_do_form)
        })
        .then(response => {
            console.log('Response:', response);
            if (response.ok) {
                alert('Obrigado pelo interesse em ser um agregado JL Transp. Logo entraremos em contato através do WhatsApp!');
                dados_do_form.reset();
            } else {
                alert('Ocorreu um erro no envio dos dados. Tente novamente mais tarde.');
            }
        })
        .catch(error => {
            console.error('Erro no envio dos dados', error);
        });

    });
});
