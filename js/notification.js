// notification.js

// Função para gerar um nome aleatório
function randomName() {
    var names = ["Miguel","Jane", "Marcos", "Natanael", "Gael", "Theo", "Sandra", "Geovane", "Cida", "Ingrid", "Anderson", "Angelo", "Jéssica", "Patricia", "Kauan", "Sophia", "Davi", "Viviane", "Monica", "Maicon", "Nelson", "Andreia", "Julia", "Arthur", "Edson", "Alice", "Gabriel", "Manuela", "Pedro", "Isabella", "Lucas", "Laura", "Matheus", "Maria Eduarda", "Bernardo", "Giovanna", "Rafael", "Valentina", "Guilherme", "Beatriz", "Enzo", "Luiza", "Felipe", "Helena", "Gustavo", "Maria Luiza", "Nicolas", "Isadora", "Heitor", "Mariana", "Cleiton", "Samuel", "Gabriela", "João Pedro", "Ana Clara", "Pedro Henrique", "Rafaela", "Cauã", "Maria Clara", "Henrique", "Isabelly", "Murilo", "Yasmin", "Eduardo", "Ana Julia", "Vitor", "Lívia", "Daniel", "Lara", "Lorenzo", "Lorena", "Vinicius", "Heloísa", "Pietro", "Melissa", "João Vitor", "Sarah", "Leonardo", "Ana Luiza", "Théo", "Letícia", "Caio", "Nicole", "Isaac", "Ana Beatriz", "Lucca", "Emanuelly", "João", "Esther", "Davi Lucas", "Lavínia", "Enzo Gabriel", "Marina", "Wallace", "Yuri", "Vanessa", "Cecília", "Bryan", "Rebeca", "Thiago", "Vitória", "João Gabriel", "", "Maria Fernanda", "Benjamin", "Larissa", "Joaquim", "Clara", "Emanuel", "Carolina", "Thomas", "Bianca", "Ryan", "Alícia", "Carlos Eduardo", "Fernanda", "Rodrigo", "Gabrielly", "Ian", "Rubia","Catarina", "Fernando", "Ana Laura", "Bruno", "Emilly", "Otávio", "Eduarda", "Francisco", "Karoline", "Thaina", "Amanda", "Calebe", "Pietra", "Igor", "Agatha", "Antonio", "Jorge", "Milena", "Erick", "Maria Alice", "João Lucas", "Laís", "Luiz Felipe", "Maria Julia", "Queila", "Michele", "André", "Maria", "Maurício", "Davi Lucca", "Elisa", "Kaique", "Stella", "Nathan", "Maria Vitória", "Higor", "Luiz Miguel", "Bruna", "Breno", "Ana Sophia", "Vitor Hugo", "Bárbara", "João Guilherme", "Maria Cecília", "Benício", "Olivia", "Augusto", "Nathalia", "João Miguel", "Camila", "Pedro Lucas", "Ana Carolina", "Levi", "Maitê", "Anthony", "Eloá", "Yago", "Luana", "Danilo", "Karina", "Luna", "Juan", "Ana Lívia", "Kauê", "Brenda", "Diego", "Alana", "Vicente", "Sophie", "André", "Davi Luiz", "Ana", "Luiz Gustavo", "Isabel", "Alexandre", "Marco", "Mirella", "Alex", "Raul", "Juliana", "Silvio", "André Luiz", "Jefferson", "Luan", "Jean", "Marcela", "Diogo", "Isis", "Marcelo", "Iara", "Ricardo", "Antônia", "Luiz Henrique", "Kamilly", "Henry", "Sofia", "Alexia", "Noah", "Lis", "Enrico", "Renato", "Maria Sophia", "Lucas Gabriel", "Debora", "Joana", "Renan", "Clarice", "Neide", "Luiz Otávio", "Ayla", "Pedro Miguel", "Caroline", "William", "Antonella", "Ícaro", "Evellyn", "Giovanni", "Malu", "João Paulo", "Maria Laura", "Paulo", "Mikaela", "Adryan", "Stefany"]; // Lista de nomes
    return names[Math.floor(Math.random() * names.length)]; // Retorna um nome aleatório da lista
}

// Função para gerar um valor de compra aleatório
function randomValue() {
    var values = [15.00, 25.00, 35.00]; // Valores permitidos
    return values[Math.floor(Math.random() * values.length)]; // Retorna um valor aleatório da lista
}

// Função para exibir a notificação de compra
function showNotification() {
    var purchaseNotification = document.getElementById('purchaseNotification');
    var name = randomName(); // Gera um nome aleatório
    var value = randomValue().toFixed(2); // Gera um valor de compra aleatório e arredonda para duas casas decimais
    var action = Math.random() < 0.5 ? "comprou" : "renovou"; // Escolhe aleatoriamente entre "comprou" e "renovou"
    purchaseNotification.textContent = name + " " + action + " por R$" + value; // Define o conteúdo da notificação
    purchaseNotification.style.left = '10px'; // Move a notificação para a posição visível
    setTimeout(function() {
        purchaseNotification.style.left = '-200px'; // Move a notificação para fora da tela após 5 segundos
    }, 5000);
}

// Exibe uma notificação inicial após 10 a 20 segundos
setTimeout(showNotification, Math.floor(Math.random() * (20000 - 10000) + 10000)); // Exibe a primeira notificação após um intervalo aleatório entre 10 e 20 segundos

// Exibe notificações de compra em loop
setInterval(showNotification, Math.floor(Math.random() * (90000 - 30000) + 60000)); // Exibe uma notificação a cada intervalo aleatório entre 30 e 60 segundos


// JavaScript para repetir a animação a cada 5 segundos
setInterval(function() {
    $('.whatsapp-button').toggleClass('swing');
}, 5000);


// Script para incrementar o número de downloads 

        // Função para aumentar o contador de downloads
        function aumentarDownloads() {
            // Recupera o elemento do contador de downloads
            var downloadsCounter = document.getElementById('downloads-counter');

            // Obtém o valor atual do contador de downloads
            var currentCount = parseInt(downloadsCounter.dataset.count);

            // Incrementa o contador
            var newCount = currentCount + 1;

            // Atualiza o valor do contador de downloads no DOM
            downloadsCounter.textContent = newCount;
            downloadsCounter.dataset.count = newCount;
        }

        // Chama a função para aumentar o contador de downloads ao carregar a página
        window.onload = aumentarDownloads;



        // Script para mostrar a notificação de cookie após 5 segundos e escondê-lo após 30 segundos //

        // Função para definir um cookie
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        // Função para obter um cookie
        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        // Função para fechar a notificação de cookie
        function fecharNotificacao() {
            document.getElementById('cookieNotification').style.display = 'none';
        }

        // Exibir a notificação de cookie apenas se o cookie de notificação não estiver definido
        if (!getCookie("cookieNotification")) {
            setTimeout(function(){
                document.getElementById('cookieNotification').style.display = 'block';
                setTimeout(function(){
                    setCookie("cookieNotification", "true", 30); // Define um cookie chamado "cookieNotification" com valor "true" que expira em 30 dias
                    fecharNotificacao(); // Fecha a notificação após 30 segundos
                }, 30000); // Esconde a notificação após 30 segundos
            }, 5000); // Exibe a notificação após 5 segundos
        }