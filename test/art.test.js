'use strict';

// const path = require('path');
const mm = require('egg-mock');


describe('test/egg-view-art.test.js', () => {

  describe('render', () => {
    let app;
    before(() => {
      app = mm.app({
        baseDir: 'apps/art-view',
      });
      return app.ready();
    });
    after(() => app.close());

    it('should render with locals', () => {
      return app.httpRequest()
        .get('/locals')
        .expect('hello world\n')
        .expect(200);
    });

    it('should render with include', () => {
      return app.httpRequest()
        .get('/include')
        .expect('hello header\nhello footer\n')
        .expect(200);
    });

    it('should render with helper', () => {
      return app.httpRequest()
        .get('/helper')
        .expect('hello world\n')
        .expect(200);
    });


    it('should render with html extension', () => {
      return app.httpRequest()
        .get('/htmlext')
        .expect('hello world\n')
        .expect(200);
    });
  });

  describe('renderString', () => {
    let app;
    before(() => {
      app = mm.app({
        baseDir: 'apps/art-view',
      });
      return app.ready();
    });
    after(() => app.close());

    it('should renderString with data', () => {
      return app.httpRequest()
        .get('/render-string')
        .expect('hello world')
        .expect(200);
    });

    it('should renderString with helper', () => {
      return app.httpRequest()
        .get('/render-string-helper')
        .expect('hello world')
        .expect(200);
    });
  });
});
