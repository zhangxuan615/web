const { override, fixBabelImports, addLessLoader, } = require('customize-cra');

module.exports = override(
    // 针对antd实现按需打包: 根据import来打包(使用babel-plugin-import)
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,  // 根据所引用的组件，自动打包相关的样式，而不用在手动去导入.css样式文件，使用的是编译以后的.css文件
    }),
    // 使用less less-loader对源码中的less文件中的变量进行重新指定
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#1DA57A' },     // @变量名: '变量值'   引入.less文件并重新指定其中的变量值
        }
    }),
)