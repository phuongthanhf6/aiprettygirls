function copyText() {
    const promptDesc = document.getElementById("promptDesc").innerText;
    
    // Tạo một textarea tạm thời để sao chép văn bản
    const tempInput = document.createElement("textarea");
    tempInput.value = promptDesc;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    
    // Hiển thị thông báo
    const copyNotification = document.getElementById("copyNotification");
    copyNotification.classList.add("show");

    // Ẩn thông báo sau 2 giây
    setTimeout(() => {
        copyNotification.classList.remove("show");
    }, 2000);
}


function copyTextNagative() {
    const promptDesc = document.getElementById("NagativeDesc").innerText;
    
    // Tạo một textarea tạm thời để sao chép văn bản
    const tempInput = document.createElement("textarea");
    tempInput.value = promptDesc;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    
    // Hiển thị thông báo
    const copyNotification = document.getElementById("copyNotification");
    copyNotification.classList.add("show");

    // Ẩn thông báo sau 2 giây
    setTimeout(() => {
        copyNotification.classList.remove("show");
    }, 2000);
}