var app = new Vue({
  el: "#app",
  data: {
    from: "Me",
    message: "Type your message here",
    cake: 1,
    font: 1,
    fonts: [
      { id : 1, name : 'Neat', size: 1 },
      { id : 2, name : 'Piped', size: 1.5},
      { id : 3, name : 'Curly', size: 1 },
    ],
    icingColour: "#222222",
    icingColours: ["#222222", "#eadbd8", "#fdeded", "#e7eef3"],
    cakes: [
      { id: 1, bgColour: "#d8c7cf" },
      { id: 2, bgColour: "#d8c7cf" },
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
