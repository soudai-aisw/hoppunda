import { helloWorld } from "./module/module1.js";

function unko() {
    let env = [navigator.appName, navigator.appVersion, navigator.userAgent]
    console.log(env)
    let target = document.getElementById("env")
    target.innerHTML = "あなたの閲覧環境は<br>" + env + "<br>です"
    let firstValue = document.getElementById("contents")
    window.alert("現在の値は" + firstValue.value + "です")
    env = 1
}

// ウインドウ読み込み時に実行
// window.onload = function () {
//     // let env = [navigator.appName, navigator.appVersion, navigator.userAgent]
//     // let target = document.getElementById("env")
//     // target.innerHTML = "あなたの閲覧環境は<br>" + env + "<br>です"
//     // let firstValue = document.getElementById("contents")
//     // window.alert("現在の値は" + firstValue.value + "です")

// }

let env = 2
console.log(env)

window.onload = unko()

// リアルタイムで時間を表示
setInterval(function () {
    document.getElementById("d2").innerHTML = new Date().toLocaleString();
}, 1000);


// ボタンクリックでh文字列を書き換える
document.getElementById("changeButton").addEventListener("click", function () {
    let newContent = document.getElementById("contents");
    document.getElementById("content").innerHTML = newContent.value;
    if (newContent.value != "") {
        alert("内容が書き換えられました。")
    }
    else {
        alert("空白で内容か書き換えられました。")
    }
    console.log(newContent.value)
    helloWorld()
});


let button = document.getElementById("changeButton")
let default_button_style = button.style.backgroundColor
console.log(button.style.backgroundColor)

// マウスオーバーをトリガーに何かを実行する
button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "orange"
    console.log("マウスカーソルがボタンに重なったよ")
})
// マウスが離れたことをトリガーに何かを実行する
button.addEventListener("mouseout", () => {
    button.style.backgroundColor = default_button_style
    console.log("マウスカーソルがボタンから離れたよ")
})


