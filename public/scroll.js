const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  const scrollUtilities = {
    ".scroll-x": {
      overflowX: "scroll",
      overflowY: "hidden",
      whiteSpace: "nowrap",
    },
    ".scroll-y": {
      overflowX: "hidden",
      overflowY: "scroll",
    },
    ".scroll-both": {
      overflow: "scroll",
    },
  };

  addUtilities(scrollUtilities);
});
