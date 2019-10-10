# webpack-pre-post-plugin

Execute shell commands on each compilation (before and after).


### Install

`npm i -D webpack-pre-post-plugin`

### Use

```js
const PrePostPlugin = require('webpack-pre-post-plugin');

// ...webpack config file...

  plugins: [
    new PrePostPlugin({
      pre: ['echo "Webpack Start"'],
      post: ['echo "Webpack End"']
    })
  ],

```
