const images = [
    { id: 1, category: "anime", src: "./assets/img/hair-1.jpg" },
    { id: 2, category: "realistic", src: "./assets/img/hair-2.jpg" },
    { id: 3, category: "game", src: "./assets/img/hair-3.png" },
    { id: 4, category: "buildings", src: "./assets/img/img1.jpg" },
    { id: 5, category: "photography", src: "./assets/img/img2.jpg" },
    { id: 6, category: "photography", src: "./assets/img/img3.jpg" },

    // Thêm nhiều ảnh hơn nếu cần
];

let filteredImages = images; // Lưu trữ danh sách ảnh sau khi áp dụng bộ lọc

function filterImages(category) {
    filteredImages =
        category === "all"
            ? images
            : images.filter((image) => image.category === category);
    currentPage = 1; // Reset trang hiện tại về 1 khi có bộ lọc mới
    renderGallery(currentPage);
    renderPagination();
}

const imagesPerPage = 40;
let currentPage = 1;
let currentFilter = "all";

function renderGallery(page) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    const startIndex = (page - 1) * imagesPerPage;
    const endIndex = Math.min(
        startIndex + imagesPerPage,
        filteredImages.length
    );

    for (let i = startIndex; i < endIndex; i++) {
        // Tạo thẻ div bao bọc img
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        // Tạo thẻ img
        const img = document.createElement("img");
        img.src = filteredImages[i].src;
        img.alt = `Ảnh ${filteredImages[i].id}`; // Giữ lại ID gốc
        img.onclick = () => openPopup(filteredImages[i].id); // Sử dụng ID gốc để mở đúng popup
        // gallery.appendChild(img);

        // Thêm img vào imageContainer
        imageContainer.appendChild(img);

        // Thêm imageContainer vào gallery
        gallery.appendChild(imageContainer);
    }
}

function renderPagination() {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";
    const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = i;
        link.className = i === currentPage ? "active" : "";
        link.onclick = (e) => {
            e.preventDefault();
            currentPage = i;
            renderGallery(currentPage);
            renderPagination();
        };
        pagination.appendChild(link);
    }
}

function openPopup(id) {
    const popup = document.getElementById(`popup${id}`); // Mở popup theo ID gốc
    if (popup) {
        popup.style.display = "block";
    }
}

// Function to close all popups
function closePopup() {
    const popups = document.querySelectorAll(".popup");
    popups.forEach((popup) => {
        popup.style.display = "none";
    });
}

// Add event listeners to all close buttons
document.querySelectorAll(".popup-close").forEach((button) => {
    button.addEventListener("click", closePopup);
});

// Initialize the gallery and pagination
renderGallery(currentPage);
renderPagination();

// Close popup if clicking outside
window.onclick = function (event) {
    if (event.target.classList.contains("popup")) {
        closePopup();
    }
};

// Add event listeners to filter buttons
document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
        currentFilter = e.target.getAttribute("data-filter");
        currentPage = 1; // Reset to first page on filter change
        renderGallery(currentPage);
        renderPagination();
    });
});
