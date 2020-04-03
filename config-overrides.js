
const { override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy, disableEsLint } = require('customize-cra');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const path = require('path');


const addStyledComponents = () => (config, env) => {
    return rewireStyledComponents(config, env);;
}

module.exports = {
    webpack: override(
        addStyledComponents(),
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css'
        }),
        addWebpackAlias({
            "@": path.resolve(__dirname, "src"),
            "@pages": path.resolve(__dirname, "src/pages"),
        }),
        addDecoratorsLegacy(),
        disableEsLint(),
    )
};