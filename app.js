// Validar Formulário de Contato
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('message').value;

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Mensagem enviada com sucesso!');
        this.reset();
    }
});