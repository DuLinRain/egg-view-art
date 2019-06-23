# egg-view-art
art-template for eggjs

# usage

    // {app_root}/config/plugin.js
    exports.art = {
        enable: true,
        package: 'egg-view-art',
    };

    // 配置egg-view
    // {app_root}/config/config.default.js
    exports.view = {
        mapping: {
            '.art': 'art',
        },
    };

    // art config 配置art, 参考http://aui.github.io/art-template/docs/options.html
    exports.art = {};
