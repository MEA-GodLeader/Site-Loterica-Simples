document.addEventListener('DOMContentLoaded', () => {
    const ageWarning = document.getElementById('age-warning');
    const mainContent = document.getElementById('main-content');

    document.getElementById('yes-btn').addEventListener('click', () => {
        ageWarning.style.display = 'none';
        mainContent.style.display = 'block';
    });

    document.getElementById('no-btn').addEventListener('click', () => {
        alert("Você não pode acessar este site.");
        window.location.href = "https://www.google.com"; // Redireciona para outro site
    });
});


// Smooth scroll para o topo ao clicar no logo
document.querySelector('.logo-container a').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Função para alternar entre as opções do cartão
function showOption(optionNumber) {
    const allOptions = document.querySelectorAll('.option-content');
    const buttons = document.querySelectorAll('.option');

    // Remover a classe 'active' de todas as opções
    allOptions.forEach((option) => {
        option.classList.remove('active');
    });

    // Adicionar a classe 'active' na opção selecionada
    const selectedOption = document.querySelector(`#opcao${optionNumber}`);
    if (selectedOption) {
        selectedOption.classList.add('active');
    }

    // Atualizar os botões para destacar o botão ativo
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
    buttons[optionNumber - 1].classList.add('active');
}

// Função para rolar até o botão de "Apostar Agora" correspondente à opção ativa
function scrollToApostar() {
    // Identifica a opção ativa
    const opcaoAtiva = document.querySelector('.option-content.active');
    
    if (opcaoAtiva) {
        // Identifica o ID da opção ativa
        const opcaoId = opcaoAtiva.id;
        
        // Seleciona o botão correspondente
        let activeButton;
        if (opcaoId === 'opcao1') {
            activeButton = document.querySelector('.btn-apostar-opcao1');
        } else if (opcaoId === 'opcao2') {
            activeButton = document.querySelector('.btn-apostar-opcao2');
        }
        
        if (activeButton) {
            // Rola até o botão ativo
            activeButton.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Adiciona a classe para o efeito de piscar
            activeButton.classList.add('flash');

            // Remove o efeito de piscar após 1,5 segundos
            setTimeout(() => {
                activeButton.classList.remove('flash');
            }, 1500);
        }
    }
}

// Adiciona o evento ao botão do cabeçalho para rolar até o botão "Apostar Agora"
const apostarHeaderButton = document.querySelector('#btn-apostar-header');
if (apostarHeaderButton) {
    apostarHeaderButton.addEventListener('click', scrollToApostar);
}
document.getElementById("como-apostar").addEventListener("click", function () {
    // Rolagem suave até a seção
    const targetSection = document.getElementById("como-apostar-section");
    targetSection.scrollIntoView({ behavior: "smooth" });

    // Selecionar todos os cartões
    const cards = document.querySelectorAll(".cardText");

    // Aplicar animação de piscar no fundo em sequência
    cards.forEach((card, index) => {
        // Adiciona a animação pisca-bg ao cartão
        card.classList.add('flash');
        
        // Após a animação pisca-bg, remova a classe flash se necessário
        setTimeout(() => {
            card.classList.remove('flash');
        }, 1500); // Tempo do pisca-bg (500ms)
    });
    
    });


const contactInner = document.getElementById('contact-inner');
const toggleButtons = document.querySelectorAll('.toggle');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        if (button.dataset.side === 'front') {
            contactInner.classList.remove('flipped');
        } else {
            contactInner.classList.add('flipped');
        }
    });
});




