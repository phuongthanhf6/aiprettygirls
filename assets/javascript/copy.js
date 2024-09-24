function copyText(copyButton) {
    // Tìm thẻ p có class 'copy-prompt' gần nhất với nút đã bấm
    const copyprompt = copyButton
        .closest(".prompt")
        .querySelector(".copy-prompt").innerText;

    // Tạo một textarea tạm thời để sao chép văn bản
    const tempInput = document.createElement("textarea");
    tempInput.value = copyprompt;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Hiển thị thông báo (tùy chỉnh thông báo của bạn)
    const copyNotification = document.getElementById("copyNotification");
    if (copyNotification) {
        copyNotification.classList.add("show");

        // Ẩn thông báo sau 2 giây
        setTimeout(() => {
            copyNotification.classList.remove("show");
        }, 2000);
    }
}
