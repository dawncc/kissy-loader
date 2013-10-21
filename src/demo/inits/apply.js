/**
 * @fileoverview header页面脚本初始化
 * @author: dawncc <dawncc.022@gmail.com>
 *
 **/
KISSY.add(function(S, Header) {

    return function(){
        Header();
        return 'demo header init';
    }

}, {requires:['../mods/header']});
