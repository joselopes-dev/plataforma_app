function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

  const columns = document.querySelectorAll(".column6");
  
  document.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
  });
  
  document.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
  });
  
  columns.forEach((item) => {
    item.addEventListener("dragover", (e) => {
        const dragging = document.querySelector(".dragging");
        const applyAfter = getNewPosition(item, e.clientY);
  
        if (applyAfter) {
            applyAfter.insertAdjacentElement("afterend", dragging);
        }
        else {
            item.prepend(dragging);
        }
  
        checkSequence(); // Verifica a sequência após a movimentação de um item
    }); 
  });
  
  function getNewPosition(column, posY) {
    const cards = column.querySelectorAll(".item:not(.dragging)");
    let result;
  
    for (let refer_card of cards){
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.y + box.height / 2;
  
        if (posY >= boxCenterY) result = refer_card;
    }
  
    return result;
  }
  let confeteLancado1 = false; // Variável para controlar se o confete já foi lançado

  function checkSequence() {
      const correctSequence = [

        "public class ExemploFuncoes {",
        "public static void main(String[] args) {",
        "int resultado = soma(5, 10);",
        "System.out.println(“A soma é: “ + resultado);",
        "}",        
        "public static int soma(int a, int b) {",
        "return a + b;",
        "}",
        "}"];
  
      const items = document.querySelectorAll('.column6 .item');
  
      let sequenceCorrect = true;
  
      items.forEach((item, index) => {
          // Verifica se o texto do item atual está correto na sequência
          if (item.textContent.trim() !== correctSequence[index]) {
              // Se estiver errado, a linha é destacada em vermelho
              item.style.color = "red";
              sequenceCorrect = false;
          } else {
              // Se estiver correto, a linha é destacada em preto
              item.style.color = "green";
          }
      });
  
      if (sequenceCorrect && !confeteLancado1 && items.length === correctSequence.length) {
          // Se todas as linhas estiverem corretas, se o confete ainda não tiver sido lançado
          // e se o número de itens for igual ao número de linhas na sequência
          // Lança o confete apenas uma vez
          let params = {
              particleCount: 10, // Quantidade de confetes
              spread: 90, // O quanto eles se espalham
              startVelocity: 70, // Velocidade inicial
              origin: { x: 0, y: 0.5 }, // Posição inicial na tela
              angle: 45 // Ângulo em que os confetes serão lançados
          };
  
          // Joga confetes da esquerda pra direita
          confetti(params);
  
          // Joga confetes da direita para a esquerda
          params.origin.x = 1;
          params.angle = 135;
          confetti(params);
  
          // Marca que o confete foi lançado
          confeteLancado = true;
      }
  }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    document.addEventListener("DOMContentLoaded", function() {
        const respostas = [
            
          "public class ExemploFuncoes {",
        "public static void main(String[] args) {",
        "int resultado = soma(5, 10);",
        "System.out.println(“A soma é: “ + resultado);",
        "}",        
        "public static int soma(int a, int b) {",
        "return a + b;",
        "}",
        "}"];
  
        const respostasEmbaralhadas = shuffle(respostas);
    
        const items = document.querySelectorAll('.column5 .item');
        items.forEach((item, index) => {
            item.textContent = respostasEmbaralhadas[index];
        });
    });
