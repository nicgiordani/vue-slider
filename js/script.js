

var app = new Vue(
  {
    el: '#root',
    data: {
      imageIndex: 0,
      images: ["img/doria.jpg", "img/duemila.jpg", "img/earth.png", "img/osom2.jpg"]
    },
    methods: {
      avanti: function () {
        this.imageIndex++;
        if (this.imageIndex == this.images.length) {
          this.imageIndex = 0;
        }
      },
      indietro: function () {
        this.imageIndex--;
        if (this.imageIndex == -1) {
          this.imageIndex = this.images.length -1;
        }
      }
    }
  }
);
