var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue'
  },
  computed : {
    
  },
  methods : {
    doThing() {
      this.message = 'Hai';
    }
  }
});