module.exports = (app) => {
    // /api
    app.use('/api', require('./api/index'))
}