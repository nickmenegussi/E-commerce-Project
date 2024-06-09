document.addEventListener('DOMContentLoaded', function () {
    const cadastreButton = document.querySelector('.btn-primary');

    cadastreButton.addEventListener('click', function () {
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('company-name').value;
        const address = document.getElementById('street-address').value;
        const city = document.getElementById('town-city').value;
        const phoneNumber = document.getElementById('phone-number').value;
        const emailAddress = document.getElementById('email-address').value;

        // Verifica se todos os campos estão preenchidos
        if (firstName && lastName && address && city && phoneNumber && emailAddress) {
            // Exibe mensagem de sucesso
            alert(`Cadastro realizado com sucesso!\nNome Cadastrado: ${firstName}\nSegundo nome Cadastrado: ${lastName}\n Email Cadastrado: ${emailAddress}`);
        } else {
            // Exibe mensagem de erro se algum campo estiver vazio
            alert('Por favor, preencha todos os campos.');
        }
    });
});
