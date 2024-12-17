document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // 阻止表单提交

    login(); // 调用登录函数
});

function login() {
    // 这里添加你的登录验证逻辑
    // 假设验证成功返回true
    var isValid = validateLogin(); // 调用验证函数

    if (isValid) {
        window.location.href = "nav.html"; // 登录成功后跳转到 nav.html
    } else {
        document.getElementById("message").innerText = "用户名或密码错误"; // 登录失败时显示错误信息
        document.getElementById("message").style.color = "red"; // 设置错误信息的颜色
    }

    return false; // 阻止表单默认的提交行为
}

function validateLogin() {
    // 这里添加你的登录验证逻辑
    // 例如获取用户名和密码并进行验证
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 这里仅作示例，实际应用中应替换为真实的验证逻辑
    if (username === "admin" && password === "password") {
        return true;
    } else {
        return false;
    }
}
