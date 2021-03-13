const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@react-three/drei', 'three'])

module.exports = withPlugins([withTM], {})
