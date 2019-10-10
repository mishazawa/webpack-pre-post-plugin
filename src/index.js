const { exec } = require('child_process');

const resp = (error, stdout, stderr) => {
  console.log(stdout);
  if (error) console.error(error);
  if (stderr) console.error(stderr);
}

class PrePostPlugin {

  constructor (options) {
    const defaultOptions = {
      pre: [],
      post: []
    };

    this.options = Object.assign(defaultOptions, options);
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('PrePostPlugin', ()=> {
      this.options.pre.forEach((cmd) => exec(cmd, resp))
    });

    compiler.hooks.done.tap('PrePostPlugin', () => {
      this.options.post.forEach((cmd) => exec(cmd, resp))
    });
  }
}

module.exports = PrePostPlugin;
