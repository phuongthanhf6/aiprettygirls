document.getElementById("imageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("imageId").value;
    const category = document.getElementById("category").value;
    const fileInput = document.getElementById("image");
    const file = fileInput.files[0];

    if (file) {
        const fileName = file.name;
        const src = `./assets/img/${fileName}`;
        const newLine = `{ id: ${id}, category: "${category}", src: "${src}" },`;

        showPopup(newLine);
    }
});

document.getElementById("popupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("popupId").value;
    const aiTools = document.getElementById("aiTools").value;
    const checkpoint = document.getElementById("checkpoint").value;
    const lora = document.getElementById("lora").value;
    const prompt = document.getElementById("prompt").value;
    const negative = document.getElementById("negative").value;
    const size = document.getElementById("size").value;
    const steps = document.getElementById("steps").value;
    const seed = document.getElementById("seed").value;
    const sampler = document.getElementById("sampler").value;
    const cfg = document.getElementById("cfg").value;
    const clipSkip = document.getElementById("clipSkip").value;

    const imageFile = document.getElementById("popupImage").files[0];
    if (!imageFile) {
        alert("Vui lòng tải lên một hình ảnh");
        return;
    }

    const imageName = imageFile.name;
    const imageSrc = `./assets/img/${imageName}`;
    const altText = imageName.split(".")[0];

    const generatedHTML = `
    <!-- item -->
    <div id="popup${id}" class="popup">
        <div class="popup-content">
            <span class="popup-close">&times;</span>
            <img src="${imageSrc}" alt="${altText}" />
            <div class="info">
                <h2>Details</h2>
                <div class="info-tools-container">
                    <div class="info-tools">
                        <p class="left">${aiTools}</p>
                        <p class="right">AI tools</p>
                    </div>
                    <div class="info-tools">
                        <p class="left">${checkpoint}</p>
                        <p class="right">Checkpoint</p>
                    </div>
                    <div class="info-tools">
                        <p class="left">${lora}</p>
                        <p class="right">Lora</p>
                    </div>
                </div>
                <div class="prompt">
                    <div class="prompt-header">
                        <div class="title">Prompt</div>
                        <div class="copy" onclick="copyText()">
                            <i class="fa-regular fa-copy"></i>Copy
                        </div>
                    </div>
                    <p class="desc" id="promptDesc">${prompt}</p>
                </div>
                <div class="prompt">
                    <div class="prompt-header">
                        <div class="title">Negative Prompt</div>
                        <div class="copy" onclick="copyTextNagative()">
                            <i class="fa-regular fa-copy"></i>Copy
                        </div>
                    </div>
                    <p class="desc" id="NagativeDesc">${negative}</p>
                </div>
                <div class="spec">
                    <div class="left">
                        <p class="title">Size</p>
                        <p class="desc">${size}</p>
                        <p class="title">Steps</p>
                        <p class="desc">${steps}</p>
                        <p class="title">Seed</p>
                        <p class="desc">${seed}</p>
                    </div>
                    <div class="right">
                        <p class="title">Sampler</p>
                        <p class="desc">${sampler}</p>
                        <p class="title">Tỷ lệ CFG</p>
                        <p class="desc">${cfg}</p>
                        <p class="title">Clip skip</p>
                        <p class="desc">${clipSkip}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    showPopup(generatedHTML);
});

function showPopup(content) {
    document.getElementById("popupContainer").classList.remove("hidden");
    document.getElementById("generatedCode").textContent = content;

    document.getElementById("copyButton").onclick = function () {
        navigator.clipboard.writeText(content).then(() => {
            alert("Đã sao chép nội dung vào clipboard!");
        });
    };

    document.querySelector(".popup-close").onclick = function () {
        document.getElementById("popupContainer").classList.add("hidden");
    };
}

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Đã sao chép nội dung vào clipboard!");
    });
}
