module.exports = {
  reactScriptsVersion: "react-scripts",
  style: {
    css: {
      loaderOptions: () => {
        return { url: false };
      },
    },
  },
};
// for fixing a bug related to images in public not being detected in CSS files in src
