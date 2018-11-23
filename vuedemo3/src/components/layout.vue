<template>
    <div>
        <div class="app-head">
            <div class="app-head-inner">
                <img src="../assets/logo.png">
                <div class="head-nav">
                    <a>登录</a>
                    <a>注册</a>
                    <a>关于</a>
                </div>
            </div>
        </div>

        <div class="app-content">
            <<keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>

        <div class="app-footer">安徽新华电脑学院</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                
            }
        }
    }
</script>

<style scoped>
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
    display: block;
    }
    body {
    line-height: 1;
    }
    ol, ul {
    list-style: none;
    }
    blockquote, q {
    quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
    content: '';
    content: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }
    a {
    color: inherit;
    text-decoration: none;
    }
    body {
    background: #f0f2f5;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
    }
    .app-head{
        width: 100%;
        height: 90px;
        background: #363636;
        color: #b2b2b2;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .app-head-inner{
        width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .head-nav{
        width: 200px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .app-footer{
        width: 100%;
        height: 80px;
        display: felx;
        justify-content: center;
        align-items: center;
    }
</style>