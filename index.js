function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    window.scrollTo({
        top: section.offsetTop - document.querySelector('header').offsetHeight,
        behavior: 'smooth'
    });
}


const horaAtual = new Date().getHours();

if (horaAtual >= 6 && horaAtual < 12) {

    document.body.style.backgroundColor = '#ffe4b5';
} else if (horaAtual >= 12 && horaAtual < 18) {
    document.body.style.backgroundColor = '#87ceeb';
} else {
    document.body.style.backgroundColor = '#f8f8f8';
}

function exibirAlerta(receita) {
    alert(`Você escolheu a receita: ${receita}`);
}

const receitas = ['Lasanha', 'Risoto', 'Bolo de Chocolate', 'Salmão Grelhado'];

const listaDeReceitas = document.getElementById('lista-de-receitas');

for (let i = 0; i < receitas.length; i++) {
    const itemDaLista = document.createElement('li');
    itemDaLista.textContent = receitas[i];
    itemDaLista.addEventListener('click', function() {
        exibirAlerta(receitas[i]);
    });
    listaDeReceitas.appendChild(itemDaLista);
}