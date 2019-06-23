'use strict';

const art = require('art-template');
const RENDER = Symbol('ArtView#_render');

module.exports = class ArtView {

  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
    this.config = ctx.app.config.art;
  }

  [RENDER](filename, data, config = {}) {

    config.filename = filename;
    const render = art.compile(config);
    return render(data);
  }

  async render(filename, data, viewOptions) {
    const config = Object.assign({}, this.config, viewOptions, { filename });
    return await this[RENDER](filename, data, config);
  }

  renderString(tpl, data) {
    const render = art.compile(tpl);
    // return render(data);
    try {
      return Promise.resolve(render(data));
    } catch (err) {
      return Promise.reject(err);
    }
  }

};
