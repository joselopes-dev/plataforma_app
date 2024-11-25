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


// Jogo 1 - Algoritmo Triângulo
function checkSequenceTriangulo() {
    const correctSequence = [
        "lado1 = float(input('Digite o comprimento do primeiro lado: '))",
        "lado2 = float(input('Digite o comprimento do segundo lado: '))",
        "lado3 = float(input('Digite o comprimento do terceiro lado: '))",
        "if lado1 == lado2 == lado3:",
        "print('Triângulo equilátero')",
        "elif lado1 != lado2 != lado3 != lado1:",
        "print('Triângulo escaleno')",
        "else:",
        "print('Triângulo isósceles')"
    ];
    checkSequence(correctSequence, 'drop-column');
}

// Jogo 2 - Algoritmo Fatorial
function checkSequenceFatorial() {
    const correctSequence = [
        "num = int(input('Digite um número: '))",
        "fatorial = 1",
        "if num >= 0:",
        "for i in range(1, num + 1):",
        "fatorial *= i",
        "print('O fatorial de', num, 'é', fatorial)",
        "else:",
        "print('Entrada inválida!')"
    ];
    checkSequence(correctSequence, 'drop-column2');
}

// Jogo 3 - Algoritmo Fatorial
function checkSequenceVogal() {
    const correctSequence = [
        "letra = input('Digite uma letra: ').lower()",
        "if letra in 'aeiou':",
        "print('É uma vogal')",
        "else:",
        "print('É uma consoante')"
    ];
    checkSequence(correctSequence, 'drop-column3');
}

// Jogo 4 - Algoritmo IMC
function checkSequenceImc() {
    const correctSequence = [
        "peso = float(input('Digite seu peso em kg: '))",
        "altura = float(input('Digite sua altura em metros: '))",
        "imc = peso / (altura ** 2)",
        "if imc < 18.5:",
        "print('Abaixo do peso')",
        "elif 18.5 <= imc < 24.9:",
        "print('Peso normal')",
        "elif 25 <= imc < 29.9:",
        "print('Sobrepeso')",
        "else:",
        "print('Obesidade')"
    ];
    checkSequence(correctSequence, 'drop-column4');
}

// Jogo 5 - Algoritmo Média
function checkSequenceMedia() {
    const correctSequence = [
        "nota1 = float(input('Digite a primeira nota: '))",
        "nota2 = float(input('Digite a segunda nota: '))",
        "nota3 = float(input('Digite a terceira nota: '))",
        "media = (nota1 + nota2 + nota3) / 3",
        "if media >= 7:",
        "print('Aprovado')",
        "elif 5 <= media < 7:",
        "print('Recuperação')",
        "else:",
        "print('Reprovado')"
    ];
    checkSequence(correctSequence, 'drop-column5');
}

// Jogo 6 - Algoritmo Par ou Ímpa
function checkSequencePar() {
    const correctSequence = [
        "numero = int(input('Digite um número inteiro: '))",
        "if numero % 2 == 0:",
        "print('Par')",
        "else:",
        "print('Ímpar')"
    ];
    checkSequence(correctSequence, 'drop-column6');
}

// Jogo 7 - Algoritmo Par ou Ímpa
function checkSequenceIdade() {
    const correctSequence = [
        "idade = int(input('Digite sua idade: '))",
        "if idade < 18:",
        "print('Menor de idade')",
        "elif idade <= 65:",
        "print('Adulto')",
        "else:",
        "print('Idoso')"
    ];
    checkSequence(correctSequence, 'drop-column7');
}

// Jogo 8 - Algoritmo Conversor de Temperatura
function checkSequenceTemperatura() {
    const correctSequence = [
        "celsius = float(input('Digite a temperatura em Celsius: '))",
        "fahrenheit = (celsius * 9/5) + 32",
        "print(f'A temperatura em Fahrenheit é {fahrenheit}')"
    ];
    checkSequence(correctSequence, 'drop-column8');
}

// Jogo 9 - Algoritmo Conversor de Temperatura
function checkSequenceAdivinhacao() {
    const correctSequence = [
        "import random",
        "numero_secreto = random.randint(1, 10)",
        "chute = int(input('Tente adivinhar o número (1 a 10): '))",
        "if chute == numero_secreto:",
        "print('Parabéns! Você acertou!')",
        "else:",
        "print(f'Errado! O número era {numero_secreto}')"
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
            "lado1 = float(input('Digite o comprimento do primeiro lado: '))",
            "lado2 = float(input('Digite o comprimento do segundo lado: '))",
            "lado3 = float(input('Digite o comprimento do terceiro lado: '))",
            "if lado1 == lado2 == lado3:",
            "print('Triângulo equilátero')",
            "elif lado1 != lado2 != lado3 != lado1:",
            "print('Triângulo escaleno')",
            "else:",
            "print('Triângulo isósceles')"
        ],
        game2: [
            "num = int(input('Digite um número: '))",
            "fatorial = 1",
            "if num >= 0:",
            "for i in range(1, num + 1):",
            "fatorial *= i",
            "print('O fatorial de', num, 'é', fatorial)",
            "else:",
            "print('Entrada inválida!')"
        ],

        game3: [
            "letra = input('Digite uma letra: ').lower()",
            "if letra in 'aeiou':",
            "print('É uma vogal')",
            "else:",
            "print('É uma consoante')"
        ],

        game4: [
            "peso = float(input('Digite seu peso em kg: '))",
            "altura = float(input('Digite sua altura em metros: '))",
            "imc = peso / (altura ** 2)",
            "if imc < 18.5:",
            "print('Abaixo do peso')",
            "elif 18.5 <= imc < 24.9:",
            "print('Peso normal')",
            "elif 25 <= imc < 29.9:",
            "print('Sobrepeso')",
            "else:",
            "print('Obesidade')"
            ],

        game5: [
            "nota1 = float(input('Digite a primeira nota: '))",
            "nota2 = float(input('Digite a segunda nota: '))",
            "nota3 = float(input('Digite a terceira nota: '))",
            "media = (nota1 + nota2 + nota3) / 3",
            "if media >= 7:",
            "print('Aprovado')",
            "elif 5 <= media < 7:",
            "print('Recuperação')",
            "else:",
            "print('Reprovado')"
            ],

        game6: [
            "numero = int(input('Digite um número inteiro: '))",
            "if numero % 2 == 0:",
            "print('Par')",
            "else:",
            "print('Ímpar')"
            
            ],

        game7: [
            "idade = int(input('Digite sua idade: '))",
            "if idade < 18:",
            "print('Menor de idade')",
            "elif idade <= 65:",
            "print('Adulto')",
            "else:",
            "print('Idoso')"
            ],

        game8: [
            "celsius = float(input('Digite a temperatura em Celsius: '))",
            "fahrenheit = (celsius * 9/5) + 32",
            "print(f'A temperatura em Fahrenheit é {fahrenheit}')"
            ],

        game9: [
            "import random",
            "numero_secreto = random.randint(1, 10)",
            "chute = int(input('Tente adivinhar o número (1 a 10): '))",
            "if chute == numero_secreto:",
            "print('Parabéns! Você acertou!')",
            "else:",
            "print(f'Errado! O número era {numero_secreto}')"
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

        const dropColumn1 = document.getElementById('drop-column');
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
    const dropColumn = document.getElementById('drop-column');
    if (dropColumn) {
        dropColumn.addEventListener('dragover', onDragOver);
        dropColumn.addEventListener('drop', onDrop);
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
