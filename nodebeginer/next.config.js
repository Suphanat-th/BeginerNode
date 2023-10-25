/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        HOST:'DB',
        USER:'root',
        PASSWORD:1234,
        PORT_WEB:8000,
    }
}
module.exports = nextConfig
