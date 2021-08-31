module.exports = (app) => {
    // /api
    app.use('/api', require('./api/index'))
    // /auth
    app.use('/auth', require('./auth/index'))
}