const atividades = require("./atividades");
const readline = require('readline-sync');

    do{
        switch (op = readline.questionInt("Qual atividade deseja realizar? (1-5) -> ")) {
            case 1:
                atividades.atividade1();
                break;
            case 2:
                atividades.atividade2();
                break;
            case 3:
                atividades.atividade3();
                break;
            case 4:
                atividades.atividade4();
                break;
            case 5:
                atividades.atividade5();
                break;
            case 0:
                console.log("Saindo do menu...");
                break;
        }

        var opcao = readline.question("Deseja conferir outra atividade?(s/n) -> ").toLowerCase();

    }while(opcao == "s")



    
