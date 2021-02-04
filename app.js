var app = new Vue({
  el: '#app',
  data: {
    recipient: 'Person1',
    message: 'Your message here',
    sender: 'Person2',
    cake: 5,
    font: 1,
    icingColour: '#000000',
    cakes: [
      { id: 1, bgColour: '#d8c7cf' },
      { id: 2, bgColour: '#d8c7cf' },
      { id: 3, bgColour: '#d8c7cf' },
      { id: 4, bgColour: '#d8c7cf' },
      { id: 5, bgColour: '#d8c7cf' },
    ],
    bgCol2: 'blue',
  },
  computed: {
    bodyStyle() {
      return {
        background: this.bgColour,
      };
    },
    cakeUrl() {
      return 'img/cake' + this.cake + '.jpg';
    },
    imgStyle() {
      return {
        boxShadow: '0 0 20px 20px ' + this.bgColour + ' inset',
        //boxShadow: '0 0 20px 20px red inset',
        background: 'url(' + this.cakeUrl + ') center center no-repeat',
      };
    },
    bgColour() {
      return this.cakes.find((c) => c.id === this.cake).bgColour;
    },
    combinedMessage() {
      let outMessage = '';
      outMessage += this.recipient.length > 0 ? this.recipient + '\r\n' : '';
      outMessage += this.message.length > 0 ? this.message + '\r\n' : '';
      outMessage += this.sender.length > 0 ? this.sender + '\r\n' : '';

      return outMessage;
    },
  },
  methods: {
    doThing() {
      this.message = 'Hai';
    },
  },
});
