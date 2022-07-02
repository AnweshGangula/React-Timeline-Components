module.exports = {
  "stories": [
    "../Storybook/stories/**/*.stories.mdx",
    "../Storybook/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}