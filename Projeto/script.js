
const input_email = document.querySelector("#input_email")

const email = input_email.value;


// função responsavem por Integração oom planilha 
document.addEventListener('DOMContentLoaded', function () {
    const script_do_google = 'https://script.google.com/macros/s/AKfycbyAShP3CSyRHzUwWh5MAvq77_0qteg-XexZCytUKbEOSeaIxJaNRybVsujVC3SO35Mo/exec';
    const dados_do_form = document.getElementById('Formulario');

    dados_do_form.addEventListener('submit', function (event) {
        e.preventDefault();

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







