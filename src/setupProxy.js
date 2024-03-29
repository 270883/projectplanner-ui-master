const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/spi', {
        target: 'http://localhost:9002',
        pathRewrite: {
            '^/spi': ''
        }
    }));
};