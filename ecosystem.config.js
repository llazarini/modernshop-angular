module.exports = {
    apps : [{
        name: "ssr.mordern-app.com.br",
        script: "./dist/mordern-app/server/main.js",
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}