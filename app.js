var app = new Vue({
  el: "#app",
  data: {
    from: "Me",
    message: "Type your message here",
    cake: 1,
    font: 1,
    icingColour: "#000000",
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
        background: "url(" + this.cakeUrl + ") center center no-repeat",
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
