var app = new Vue({
  el: "#app",
  data: {
    from: "Me",
    message: "Type your message here",
    cake: 1,
    font: 1,
    fonts: [
      { id : 1, name : 'Neat' },
      { id : 2, name : 'Piped' },
      { id : 3, name : 'Curly'  },
    ],
    icingColour: "#222222",
    icingColours: [
      { id : "#222222", name : 'Dark Choc' },
      { id : "#eadbd8", name : 'Choco Glaze'},
      { id : "#fdeded", name : 'Donut Glaze' },
      { id : "#f7a252", name : 'Carotty' },
      { id : "#466c8d", name : 'Blueberry' },
      
    ],
    cakes: [
      { id: 1, bgColour: "#d8c7cf" },
      { id: 2, bgColour: "#d8c7cf" },
      { id: 3, bgColour: "#d8c7cf" },
      { id: 4, bgColour: "#d8c7cf" },
    ],
  },
  watch: {
    message: function () {
      this.setUrl();
    },
  },
  computed: {
    bodyStyle() {
      return {
        background: this.bgColour,
      };
    },
    imgStyle() {
      return {
        background: "url(" + this.cakeUrl + ") no-repeat scroll top center / contain",
      };
    },
    cakeUrl() {
      return "img/cake" + this.cake + ".png";
    },
    bgColour() {
      return this.cakes.find((c) => c.id === this.cake).bgColour;
    },
  },
  methods: {
    setUrl() {
      const params = new URLSearchParams(location.search);
      params.set("message", btoa(this.message));
      params.set("r", "1");

      params.toString(); // => test=123&cheese=yummy
      window.history.replaceState(
        {},
        "",
        `${location.pathname}?${params.toString()}`
      );
    },
  },
});
