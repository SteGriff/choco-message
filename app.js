var app = new Vue({
  el: '#app',
  data: {
    message: 'Your message here',
	cake: 1,
	font: 1,
	cakes: [
		{id : 1, bgColour: '#d8c7cf'},
		{id : 2, bgColour: '#d8c7cf'},
		{id : 3, bgColour: '#d8c7cf'},
	],
	bgCol2 : "blue"
  },
  computed : {
	bodyStyle() {
		return {
			background : this.bgColour
		}
	},
	cakeUrl() {
		return 'img/cake' + this.cake + '.jpg';
	},
	imgStyle() {
		return {
			boxShadow: '0 0 20px 20px ' + this.bgColour + ' inset',
			//boxShadow: '0 0 20px 20px red inset',
			background: 'url(' + this.cakeUrl + ') center center no-repeat'
		}
	},
    bgColour() {
		return this.cakes.find(c => c.id === this.cake).bgColour;
	}
  },
  methods : {
    doThing() {
      this.message = 'Hai';
    }
  }
});