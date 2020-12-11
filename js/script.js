// - creare una lista di cose da fare e mostrarla in pagina con Vue;
// - aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;
// - cancellare un item dalla lista, al click sulla relativa icona 'X'.
// Bonus:
// - Oltre al click sul pulsante, consentire l'inserimento del nuovo item anche premendo il tasto Invio della tastiera, dopo aver scritto il testo nel campo di input.
// Consiglio del giorno: per alcuni task, potrebbe essere necessario fare delle ricerche e capire come lavorano alcune funzioni o direttive leggendo le documentazioni ufficiali ed analizzando i relativi esempi.


var app = new Vue(
  {
    el: '#root',
    data: {
      toDoList: ['imparare Javascript', 'Andare in palestra', 'fare la spesa', 'Conquistare il mondo'],
      newToDo: ''
    },
    methods: {
      addElement: function (item) {
        this.toDoList.push(this.newToDo);
        this.newToDo = '';
      }
    },
    methods: {
      removeElement: function (index) {
        this.toDoList.splice(index, 1);
      }
    }

  }
);











// methods: {
//   avanti: function () {
//     this.imageIndex++;
//     if (this.imageIndex == this.images.length) {
//       this.imageIndex = 0;
//     }
//   },
//   indietro: function () {
//     this.imageIndex--;
//     if (this.imageIndex == -1) {
//       this.imageIndex = this.images.length -1;
//     }
//   }
// }
