module.exports = {
  reactScriptsVersion: "react-scripts",
  webpack: {
    configure: (webpackConfig) => {
      // Disable CSS Minimizer plugin
      webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.filter(
        (plugin) => plugin.constructor.name !== "CssMinimizerPlugin"
      );
      return webpackConfig;
    },
  },
};
