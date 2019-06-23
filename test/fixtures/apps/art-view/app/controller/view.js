'use strict';

exports.renderWithLocals = function* (ctx) {
  yield ctx.render('locals.art', {
    data: 'world',
  });
};

exports.include = function* (ctx) {
  yield ctx.render('include/index.art');
};

exports.renderWithHelper = function* (ctx) {
  yield ctx.render('helper.art');
};

exports.cache = function* (ctx) {
  yield ctx.render('cache.art');
};

exports.htmlext = function* (ctx) {
  yield ctx.render('art.html');
};

exports.error = function* (ctx) {
  try {
    yield ctx.render('error.art');
  } catch (err) {
    this.body = err.message;
  }
};

exports.renderStringWithData = function* (ctx) {
  ctx.body = yield ctx.renderString('hello {{ data }}', {
    data: 'world',
  });
};

exports.renderStringWithHelper = function* (ctx) {
  ctx.body = yield ctx.renderString('hello {{ helper.data() }}');
};

exports.renderStringError = function* (ctx) {
  try {
    yield ctx.renderString('{{ a');
  } catch (err) {
    ctx.body = err.message;
  }
};
