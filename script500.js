// Funções e variáveis comuns a todos os jogos
function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    event.target.classList.add('dragging');
}

function onDragEnd(event) {
    event.target.classList.remove('dragging');
    removePlaceholder();
}

function onDragOver(event) {
    event.preventDefault();

    const dropzone = event.target.closest('.columnx');
    if (!dropzone || !document.querySelector('.dragging')) return;

    const draggingItem = document.querySelector('.dragging');
    const items = Array.from(dropzone.querySelectorAll('.item'));
    const rect = dropzone.getBoundingClientRect();
    const offsetY = event.clientY - rect.top;

    let insertBefore = null;

    for (let item of items) {
        const itemRect = item.getBoundingClientRect();
        const itemMiddle = itemRect.top + itemRect.height / 2;

        if (offsetY < itemMiddle) {
            insertBefore = item;
            break;
        }
    }

    if (insertBefore) {
        dropzone.insertBefore(createPlaceholder(), insertBefore);
    } else {
        dropzone.appendChild(createPlaceholder());
    }
}

function onDrop(event) {
    event.preventDefault();

    const id = event.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target.closest('.columnx');

    if (!dropzone || !draggableElement) return;

    const placeholder = document.querySelector('.placeholder');
    dropzone.insertBefore(draggableElement, placeholder);
    removePlaceholder();
}

function createPlaceholder() {
    let placeholder = document.querySelector('.placeholder');
    if (!placeholder) {
        placeholder = document.createElement('div');
        placeholder.classList.add('placeholder');
        placeholder.style.height = '0.2px';  // Reduz o tamanho do placeholder para melhorar a responsividade
    }
    return placeholder;
}

function removePlaceholder() {
    const placeholder = document.querySelector('.placeholder');
    if (placeholder) {
        placeholder.remove();
    }
}

// Função para embaralhar os elementos do array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// Jogo 1 - Algoritmo Idades
function checkSequenceClassificacao() {
    const correctSequence = [
        "int idade1 = int.Parse(Console.ReadLine());",
        "int idade2 = int.Parse(Console.ReadLine());",
        "int idade3 = int.Parse(Console.ReadLine());",
        "if (idade1 < 13 && idade2 < 13 && idade3 < 13) {",
        "Console.WriteLine('Todos são crianças');",
        "} else if (idade1 >= 13 && idade1 < 18 && idade2 >= 13 && idade2 < 18 && idade3 >= 13 && idade3 < 18) {",
        "Console.WriteLine('Todos são adolescentes');",
        "} else {",
        "Console.WriteLine('Idades mistas');",
        "}"
    ];
    checkSequence(correctSequence, 'drop-column1');
}

// Jogo 2 - Algoritmo Comparação
function checkSequenceComparacao() {
    const correctSequence = [
        "float preco1 = float.Parse(Console.ReadLine());",
        "float preco2 = float.Parse(Console.ReadLine());",
        "float preco3 = float.Parse(Console.ReadLine());",
        "if (preco1 == preco2 && preco2 == preco3) {",
        "Console.WriteLine('Todos os preços são iguais');",
        "} else if (preco1 != preco2 && preco2 != preco3 && preco1 != preco3) {",
        "Console.WriteLine('Todos os preços são diferentes');",
        "} else {",
        "Console.WriteLine('Dois preços são iguais');",
        "}"
    ];
    checkSequence(correctSequence, 'drop-column2');
}

// Jogo 3 - Algoritmo Temperatura
function checkSequenceTemperat() {
    const correctSequence = [
        "float temp1 = float.Parse(Console.ReadLine());",
        "float temp2 = float.Parse(Console.ReadLine());",
        "float temp3 = float.Parse(Console.ReadLine());",
        "if (temp1 < 15 && temp2 < 15 && temp3 < 15) {",
        "Console.WriteLine('Todas as temperaturas são frias');",
        "} else if (temp1 >= 15 && temp1 <= 25 && temp2 >= 15 && temp2 <= 25 && temp3 >= 15 && temp3 <= 25) {",
        "Console.WriteLine('Todas as temperaturas são agradáveis');",
        "} else {",
        "Console.WriteLine('Temperaturas variadas');",
        "}"
    ];
    checkSequence(correctSequence, 'drop-column3');
}

// Jogo 4 - Algoritmo Pontuação
function checkSequencePontuacao() {
    const correctSequence = [
       "int pontuacao1 = int.Parse(Console.ReadLine());",
        "int pontuacao2 = int.Parse(Console.ReadLine());",
        "int pontuacao3 = int.Parse(Console.ReadLine());",
        "if (pontuacao1 == pontuacao2 && pontuacao2 == pontuacao3) {",
        "Console.WriteLine('Todos têm a mesma pontuação');",
        "} else if (pontuacao1 != pontuacao2 && pontuacao2 != pontuacao3 && pontuacao1 != pontuacao3) {",
        "Console.WriteLine('Todos têm pontuações diferentes');",
        "} else {",
        "Console.WriteLine('Dois jogadores têm a mesma pontuação');",
        "}"
    ];
    checkSequence(correctSequence, 'drop-column4');
}

// Jogo 5 - Algoritmo Cores
function checkSequenceCores() {
    const correctSequence = [
        "string cor1 = Console.ReadLine();",
        "string cor2 = Console.ReadLine();",
        "string cor3 = Console.ReadLine();",
        "if (cor1 == cor2 && cor2 == cor3) {",
        "Console.WriteLine('Todas as camisas são da mesma cor');",
        "} else if (cor1 != cor2 && cor2 != cor3 && cor1 != cor3) {",
        "Console.WriteLine('Todas as camisas são de cores diferentes');",
        "} else {",
        "Console.WriteLine('Duas camisas têm a mesma cor');",
        "}"
    ];
    checkSequence(correctSequence, 'drop-column5');
}

// Jogo 6 - Algoritmo Contador
function checkSequenceContador() {
    const correctSequence = [
        "int contador = 1;",
        "int limite = int.Parse(Console.ReadLine());",
        "while (contador <= limite) {",
        "Console.WriteLine('Número: ' + contador);",
        "contador++;",
        "}"
    ];
    checkSequence(correctSequence, 'drop-column6');
}

// Jogo 7 - Adivinhação de Número
function checkSequenceContagem() {
    const correctSequence = [
        "Console.Write('Digite um número para a contagem regressiva: ');",
        "int numeroInicial = int.Parse(Console.ReadLine());",
        "for (int i = numeroInicial; i >= 0; i--) {",
        "Console.WriteLine('Contagem: ' + i);",
        "}",
        "Console.WriteLine('Fim da contagem!');"
    ];
    checkSequence(correctSequence, 'drop-column7');
}

// Jogo 8 - Jogo de Tabuada
function checkSequenceTabuada() {
    const correctSequence = [
            "Console.Write('Digite um número para ver a tabuada: ');",
            "int numero = int.Parse(Console.ReadLine());",
            "int contador = 1;",
            "while (contador <= 10) {",
            "Console.WriteLine(numero + ' x ' + contador + ' = ' + (numero * contador));",
            "contador++;",
            "}"
    ];
    checkSequence(correctSequence, 'drop-column8');
}

// Jogo 9 - Contagem Regressiva
function checkSequenceRegressiva() {
    const correctSequence = [
        "Console.Write('Digite o número inicial para a contagem regressiva: ');",
        "int numeroInicial = int.Parse(Console.ReadLine());",
        "while (numeroInicial >= 0) {",
        "Console.WriteLine('Contagem: ' + numeroInicial);",
        "numeroInicial--;",
        "}",
        "Console.WriteLine('Tempo esgotado!');"
    ];
    checkSequence(correctSequence, 'drop-column9');
}

// Jogo 10 - Algoritmo Conversor de Temperatura 2


// Função genérica para checar a sequência e lançar confete
function checkSequence(correctSequence, dropColumnId) {
    const dropColumn = document.getElementById(dropColumnId);
    const items = dropColumn.querySelectorAll('.item');
    let sequenceCorrect = true;

    items.forEach((item, index) => {
        if (item.textContent.trim() !== correctSequence[index]) {
            item.style.color = 'red';
            sequenceCorrect = false;
        } else {
            item.style.color = 'green';
        }
    });

    if (sequenceCorrect && items.length === correctSequence.length) {
        let params = {
            particleCount: 150,
            spread: 90,
            startVelocity: 70,
            origin: { x: 0, y: 0.5 },
            angle: 45
        };
        confetti(params);
        params.origin.x = 1;
        params.angle = 135;
        confetti(params);
    }
}

// Embaralha e insere os textos nos itens
document.addEventListener('DOMContentLoaded', function() {
    const jogos = {
        game1: [
            "int idade1 = int.Parse(Console.ReadLine());",
            "int idade2 = int.Parse(Console.ReadLine());",
            "int idade3 = int.Parse(Console.ReadLine());",
            "if (idade1 < 13 && idade2 < 13 && idade3 < 13) {",
            "Console.WriteLine('Todos são crianças');",
            "} else if (idade1 >= 13 && idade1 < 18 && idade2 >= 13 && idade2 < 18 && idade3 >= 13 && idade3 < 18) {",
            "Console.WriteLine('Todos são adolescentes');",
            "} else {",
            "Console.WriteLine('Idades mistas');",
            "}"
        ],

        game2: [
            "float preco1 = float.Parse(Console.ReadLine());",
            "float preco2 = float.Parse(Console.ReadLine());",
            "float preco3 = float.Parse(Console.ReadLine());",
            "if (preco1 == preco2 && preco2 == preco3) {",
            "Console.WriteLine('Todos os preços são iguais');",
            "} else if (preco1 != preco2 && preco2 != preco3 && preco1 != preco3) {",
            "Console.WriteLine('Todos os preços são diferentes');",
            "} else {",
            "Console.WriteLine('Dois preços são iguais');",
            "}"
        ],

        game3: [
            "float temp1 = float.Parse(Console.ReadLine());",
            "float temp2 = float.Parse(Console.ReadLine());",
            "float temp3 = float.Parse(Console.ReadLine());",
            "if (temp1 < 15 && temp2 < 15 && temp3 < 15) {",
            "Console.WriteLine('Todas as temperaturas são frias');",
            "} else if (temp1 >= 15 && temp1 <= 25 && temp2 >= 15 && temp2 <= 25 && temp3 >= 15 && temp3 <= 25) {",
            "Console.WriteLine('Todas as temperaturas são agradáveis');",
            "} else {",
            "Console.WriteLine('Temperaturas variadas');",
            "}"
        ],

        game4: [
            "int pontuacao1 = int.Parse(Console.ReadLine());",
            "int pontuacao2 = int.Parse(Console.ReadLine());",
            "int pontuacao3 = int.Parse(Console.ReadLine());",
            "if (pontuacao1 == pontuacao2 && pontuacao2 == pontuacao3) {",
            "Console.WriteLine('Todos têm a mesma pontuação');",
            "} else if (pontuacao1 != pontuacao2 && pontuacao2 != pontuacao3 && pontuacao1 != pontuacao3) {",
            "Console.WriteLine('Todos têm pontuações diferentes');",
            "} else {",
            "Console.WriteLine('Dois jogadores têm a mesma pontuação');",
            "}"
            ],

        game5: [
            "string cor1 = Console.ReadLine();",
            "string cor2 = Console.ReadLine();",
            "string cor3 = Console.ReadLine();",
            "if (cor1 == cor2 && cor2 == cor3) {",
            "Console.WriteLine('Todas as camisas são da mesma cor');",
            "} else if (cor1 != cor2 && cor2 != cor3 && cor1 != cor3) {",
            "Console.WriteLine('Todas as camisas são de cores diferentes');",
            "} else {",
            "Console.WriteLine('Duas camisas têm a mesma cor');",
            "}"
            ],

        game6: [
            "int contador = 1;",
            "int limite = int.Parse(Console.ReadLine());",
            "while (contador <= limite) {",
            "Console.WriteLine('Número: ' + contador);",
            "contador++;",
            "}"
            ],

        game7: [
            "Console.Write('Digite um número para a contagem regressiva: ');",
            "int numeroInicial = int.Parse(Console.ReadLine());",
            "for (int i = numeroInicial; i >= 0; i--) {",
            "Console.WriteLine('Contagem: ' + i);",
            "}",
            "Console.WriteLine('Fim da contagem!');"
        ],

        game8: [
            "Console.Write('Digite um número para ver a tabuada: ');",
            "int numero = int.Parse(Console.ReadLine());",
            "int contador = 1;",
            "while (contador <= 10) {",
            "Console.WriteLine(numero + ' x ' + contador + ' = ' + (numero * contador));",
            "contador++;",
            "}"
            ],

        game9: [
            "Console.Write('Digite o número inicial para a contagem regressiva: ');",
            "int numeroInicial = int.Parse(Console.ReadLine());",
            "while (numeroInicial >= 0) {",
            "Console.WriteLine('Contagem: ' + numeroInicial);",
            "numeroInicial--;",
            "}",
            "Console.WriteLine('Tempo esgotado!');"
        ]

      
    };

    const game1Items = document.querySelectorAll('#game1-items .item');
    const game2Items = document.querySelectorAll('#game2-items .item');
    const game3Items = document.querySelectorAll('#game3-items .item');
    const game4Items = document.querySelectorAll('#game4-items .item');
    const game5Items = document.querySelectorAll('#game5-items .item');
    const game6Items = document.querySelectorAll('#game6-items .item');
    const game7Items = document.querySelectorAll('#game7-items .item');
    const game8Items = document.querySelectorAll('#game8-items .item');
    const game9Items = document.querySelectorAll('#game9-items .item');
    

    if (game1Items.length > 0) {
        shuffle(jogos.game1).forEach((text, index) => {
            game1Items[index].textContent = text;
        });

        document.querySelectorAll('#game1-items .item').forEach(item => {
            item.addEventListener('dragstart', onDragStart);
            item.addEventListener('dragend', onDragEnd);
        });

        const dropColumn1 = document.getElementById('drop-column1');
        if (dropColumn1) {
            dropColumn1.addEventListener('dragover', onDragOver);
            dropColumn1.addEventListener('drop', onDrop);
        }
    }

    if (game2Items.length > 0) {
        shuffle(jogos.game2).forEach((text, index) => {
            game2Items[index].textContent = text;
        });

        document.querySelectorAll('#game2-items .item').forEach(item => {
            item.addEventListener('dragstart', onDragStart);
            item.addEventListener('dragend', onDragEnd);
        });

        const dropColumn2 = document.getElementById('drop-column2');
        if (dropColumn2) {
            dropColumn2.addEventListener('dragover', onDragOver);
            dropColumn2.addEventListener('drop', onDrop);
        }
    }

    if (game3Items.length > 0) {
        shuffle(jogos.game3).forEach((text, index) => {
            game3Items[index].textContent = text;
            });

        document.querySelectorAll('#game3-items .item').forEach(item => {
            item.addEventListener('dragstart', onDragStart);
            item.addEventListener('dragend', onDragEnd);
            });

        const dropColumn3 = document.getElementById('drop-column3');
        if (dropColumn3) {
            dropColumn3.addEventListener('dragover', onDragOver);
            dropColumn3.addEventListener('drop', onDrop);
        }
    }

    if (game4Items.length > 0) {
        shuffle(jogos.game4).forEach((text, index) => {
            game4Items[index].textContent = text;
            });

        document.querySelectorAll('#game4-items .item').forEach(item => {
            item.addEventListener('dragstart', onDragStart);
            item.addEventListener('dragend', onDragEnd);
            });

        const dropColumn4 = document.getElementById('drop-column4');
        if (dropColumn4) {
            dropColumn4.addEventListener('dragover', onDragOver);
            dropColumn4.addEventListener('drop', onDrop);
        }
    }

    if (game5Items.length > 0) {
        shuffle(jogos.game5).forEach((text, index) => {
            game5Items[index].textContent = text;
            });

        document.querySelectorAll('#game5-items .item').forEach(item => {
            item.addEventListener('dragstart', onDragStart);
            item.addEventListener('dragend', onDragEnd);
            });

        const dropColumn5 = document.getElementById('drop-column5');
        if (dropColumn5) {
            dropColumn5.addEventListener('dragover', onDragOver);
            dropColumn5.addEventListener('drop', onDrop);
        }
    }

    if (game6Items.length > 0) {
        shuffle(jogos.game6).forEach((text, index) => {
            game6Items[index].textContent = text;
            });

        document.querySelectorAll('#game6-items .item').forEach(item => {
            item.addEventListener('dragstart', onDragStart);
            item.addEventListener('dragend', onDragEnd);
            });

        const dropColumn6 = document.getElementById('drop-column6');
        if (dropColumn6) {
            dropColumn6.addEventListener('dragover', onDragOver);
            dropColumn6.addEventListener('drop', onDrop);
        }
    }

    if (game7Items.length > 0) {
        shuffle(jogos.game7).forEach((text, index) => {
            game7Items[index].textContent = text;
            });

        document.querySelectorAll('#game7-items .item').forEach(item => {
            item.addEventListener('dragstart', onDragStart);
            item.addEventListener('dragend', onDragEnd);
            });

        const dropColumn7 = document.getElementById('drop-column7');
        if (dropColumn7) {
            dropColumn7.addEventListener('dragover', onDragOver);
            dropColumn7.addEventListener('drop', onDrop);
        }
    }

    if (game8Items.length > 0) {
        shuffle(jogos.game8).forEach((text, index) => {
            game8Items[index].textContent = text;
            });

        document.querySelectorAll('#game8-items .item').forEach(item => {
            item.addEventListener('dragstart', onDragStart);
            item.addEventListener('dragend', onDragEnd);
            });

        const dropColumn8 = document.getElementById('drop-column8');
        if (dropColumn8) {
            dropColumn8.addEventListener('dragover', onDragOver);
            dropColumn8.addEventListener('drop', onDrop);
        }
    }

    if (game9Items.length > 0) {
        shuffle(jogos.game9).forEach((text, index) => {
            game9Items[index].textContent = text;
            });

        document.querySelectorAll('#game9-items .item').forEach(item => {
            item.addEventListener('dragstart', onDragStart);
            item.addEventListener('dragend', onDragEnd);
            });

        const dropColumn9 = document.getElementById('drop-column9');
        if (dropColumn9) {
            dropColumn9.addEventListener('dragover', onDragOver);
            dropColumn9.addEventListener('drop', onDrop);
        }
    }


            
});


// Funções para dispositivos móveis 
function onTouchStart(event) {
    const touch = event.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (target && target.classList.contains('item')) {
        target.classList.add('dragging');
        target.setAttribute('data-touch-start', 'true');
    }
}

function onTouchMove(event) {
    event.preventDefault();
    const touch = event.touches[0];
    const draggingItem = document.querySelector('.dragging[data-touch-start="true"]');
    if (!draggingItem) return;

    const dropzone = document.elementFromPoint(touch.clientX, touch.clientY)?.closest('.columnx');
    if (!dropzone) return;

    // Obtenha a posição da dropzone
    const items = Array.from(dropzone.querySelectorAll('.item'));
    const rect = dropzone.getBoundingClientRect();
    const offsetY = touch.clientY - rect.top;

    let insertBefore = null;

    for (let item of items) {
        const itemRect = item.getBoundingClientRect();
        const itemMiddle = itemRect.top + itemRect.height / 2;

        if (offsetY < itemMiddle) {
            insertBefore = item;
            break;
        }
    }

    // Adiciona um placeholder apenas se o dropzone for diferente da coluna de origem
    if (insertBefore) {
        dropzone.insertBefore(createPlaceholder(), insertBefore);
    } else {
        dropzone.appendChild(createPlaceholder());
    }
}

function onTouchEnd(event) {
    const draggingItem = document.querySelector('.dragging[data-touch-start="true"]');
    const placeholder = document.querySelector('.placeholder');
    const dropzone = placeholder?.parentNode;

    if (draggingItem && dropzone) {
        // Verifique se a dropzone é diferente da coluna de origem
        const originalColumn = document.querySelector('.item[data-touch-start="true"]').parentNode;
        if (dropzone !== originalColumn) {
            dropzone.insertBefore(draggingItem, placeholder);
        }
    }

    removePlaceholder();
    if (draggingItem) {
        draggingItem.classList.remove('dragging');
        draggingItem.removeAttribute('data-touch-start');
    }
}


// Adiciona os eventos de toque para todos os itens
document.addEventListener('DOMContentLoaded', function() {
    const gameItems = document.querySelectorAll('.item');

    gameItems.forEach(item => {
        item.addEventListener('touchstart', onTouchStart);
        item.addEventListener('touchmove', onTouchMove);
        item.addEventListener('touchend', onTouchEnd);
    });

    // Adiciona eventos de arrastar e soltar para a drop-column
    const dropColumn1 = document.getElementById('drop-column1');
    if (dropColumn1) {
        dropColumn1.addEventListener('dragover', onDragOver);
        dropColumn1.addEventListener('drop', onDrop);
    }

    // Adiciona eventos de arrastar e soltar para a drop-column2
    const dropColumn2 = document.getElementById('drop-column2');
    if (dropColumn2) {
        dropColumn2.addEventListener('dragover', onDragOver);
        dropColumn2.addEventListener('drop', onDrop);
    }

     // Adiciona eventos de arrastar e soltar para a drop-column3
     const dropColumn3 = document.getElementById('drop-column3');
     if (dropColumn3) {
         dropColumn3.addEventListener('dragover', onDragOver);
         dropColumn3.addEventListener('drop', onDrop);
     }

      // Adiciona eventos de arrastar e soltar para a drop-column4
      const dropColumn4 = document.getElementById('drop-column4');
      if (dropColumn4) {
          dropColumn4.addEventListener('dragover', onDragOver);
          dropColumn4.addEventListener('drop', onDrop);
      }

     // Adiciona eventos de arrastar e soltar para a drop-column5
     const dropColumn5 = document.getElementById('drop-column5');
     if (dropColumn5) {
         dropColumn5.addEventListener('dragover', onDragOver);
         dropColumn5.addEventListener('drop', onDrop);
     }

     // Adiciona eventos de arrastar e soltar para a drop-column6
     const dropColumn6 = document.getElementById('drop-column6');
     if (dropColumn6) {
         dropColumn6.addEventListener('dragover', onDragOver);
         dropColumn6.addEventListener('drop', onDrop);
     }

    // Adiciona eventos de arrastar e soltar para a drop-column7
    const dropColumn7 = document.getElementById('drop-column7');
    if (dropColumn7) {
        dropColumn7.addEventListener('dragover', onDragOver);
        dropColumn7.addEventListener('drop', onDrop);
    }

    // Adiciona eventos de arrastar e soltar para a drop-column8
    const dropColumn8 = document.getElementById('drop-column8');
    if (dropColumn8) {
        dropColumn8.addEventListener('dragover', onDragOver);
        dropColumn8.addEventListener('drop', onDrop);
    }

    // Adiciona eventos de arrastar e soltar para a drop-column9
    const dropColumn9 = document.getElementById('drop-column9');
    if (dropColumn9) {
        dropColumn9.addEventListener('dragover', onDragOver);
        dropColumn9.addEventListener('drop', onDrop);
    }

    // Adiciona eventos de arrastar e soltar para a drop-column10
   
});
