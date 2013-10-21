(function(S) {
    window.Package = {
        init:function(){
            //包配置
            S.config({packages: [{
                name: 'demo',
                path: './src',
                charset: 'gbk'
            }]});
        }
    }
})(KISSY);