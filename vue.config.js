


module.exports = {
    publicPath: '/',
    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
    outputDir: 'dist',//构建输出目录
    assetsDir: 'assets',//静态资源目录(js,css,img,fonts)
    lintOnSave: false,
    // productionSourceMap：{ type:Bollean,default:true } 生产源映射
    // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    productionSourceMap: false,


    devServer: {
        port: 8085, // 端口号
        host: '192.168.0.164',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        proxy: 'http://192.168.0.233:9120' // 配置跨域处理,只有一个代理

    },
    pluginOptions: {

    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5
                    })
                  
                ]
            }
        }
    },
   
}