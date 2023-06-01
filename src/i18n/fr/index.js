const requireModule = require.context('.', true, /\.js$/);
const modules = {};

requireModule.keys().forEach(fileName => {
    if (fileName === './index.js') return;

    // Replace ./ and .js
    const path = fileName.replace(/(\.\/|\.js)/g, '');

    modules[path] = requireModule(fileName).default;
});

export default {
    ...modules
}
