// Função para gerenciar o Local Storage
(function manageLocalStorage() {
    if (!localStorage.getItem("quantidadeMortes")) {
        // Cria o dicionário com os jogos e suas mortes
        const jogos = {
            "Sekiro": 0,
            "DarkSouls3": 0,
            "EldenRing": 0,
            "TheWitcher3": 0,
            "ShadowOfTheErdtree": 0,
            "LiesofP": 0,
            "Bloodborne": 0
        };

        // Salva no Local Storage (apenas se não existir)
        localStorage.setItem('quantidadeMortes', JSON.stringify(jogos));
        console.log("Dicionário criado e salvo no Local Storage.");
    } else {
        console.log("Dados recuperados");
    }
})();

