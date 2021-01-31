module.exports = {
  stories: ["../src/**/*.stories.@(js|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-controls",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ]
}
