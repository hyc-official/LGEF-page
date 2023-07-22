var ver = "0.0.1";
var alert = `<p><i class="fa fa-flag-o"></i> 公告：LGEF 正式发布 0.0.1 版本！<br>
<i class="fa fa-code"></i> 当前最新版本：<span style="color: #e67e22">${ver} LRV</span><br>
<i class="fa fa-envelope-o"></i> 访问量统计：<img src="https://badges.toozhao.com/badges/01H5XRS8A83AAJHPPR1WMZRH07/blue.svg" style="height: 1em;" /></p>`;
var bar = `&nbsp;&nbsp;&nbsp;
<span class="BarElement"><i class="fa fa-list"></i> 导航</span>
&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="./index.html" class="BarElement"><i class="fa fa-home"></i> 首页</a>
&nbsp;&nbsp;&nbsp;
<a href="./install.html" class="BarElement"><i class="fa fa-download"></i> 安装</a>
&nbsp;&nbsp;&nbsp;
<a href="./contributors.html" class="BarElement"><i class="fa fa-user"></i> 贡献者</a>
&nbsp;&nbsp;&nbsp;
<a href="./mirrors.html" class="BarElement"><i class="fa fa-sitemap"></i> 镜像站列表</a>
&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="https://github.com/hyc-official/LuoguShowEmoji" class="BarElement" target="_blank"><i class="fa fa-code"></i> GH 仓库</a>`
var foot = `<center>
    <p>Luogu Extend Feed Site</p>
    <p>Developed by <a href="https://blog.heyc.eu.org" target="_blank">Heyc</a>, <a href="https://github.com/hyc-official/LGSE-page" target="_blank">GitHub repo</a></p>
    <br>
</center>`
function set() {
    document.getElementById("alert").innerHTML = `<p>${alert}</p>`;
    document.getElementById("bar").innerHTML = bar;
    document.getElementById("foot").innerHTML = foot;
}
