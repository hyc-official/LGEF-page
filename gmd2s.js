// config
var dir = "/md";

function load()
{
    document.getElementById("content").innerHTML = "<center><p>加载中，请稍候...</p></center>";
    let doc = dir + window.location.pathname;
    if (doc[doc.length - 1] == "/") {
        doc += "index.md";
    }
    if (doc.substring(doc.length - 5, doc.length) == ".html") {
        doc = doc.substring(0, doc.length - 5);
    }
    if (doc.substring(doc.length - 3, doc.length) != ".md") {
        doc += ".md";
    }
    console.log(`gmd2s: resource URL ${doc}`);
    let prms = fetch(doc).then((response) => {
        if (response.status == 200) {
            return response.text();
        }
        return {};
    });
    prms.then((result) => {
        try {
            document.getElementById("content").innerHTML = marked.parse(result);
        }
        catch (err) {
            document.getElementById("content").innerHTML = `<center><p style="color:#f00;font-size:1.25em;"><b>加载失败！请检查网址拼写或网络连接！</b><br><br>请求文件：${window.location.protocol}//${window.location.host}${doc}<br><br>错误：${err}</p></center>`;
        }
    });
}

load();