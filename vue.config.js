module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/'
        : '/dist/',
    outputDir: 'dist'
}