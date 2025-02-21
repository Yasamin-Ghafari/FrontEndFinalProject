const menuButton = document.getElementById("menuButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const btn = document.getElementById("btn");
const listButton = document.getElementById("listButton");
const buttons = document.querySelectorAll('button');
const contents = document.querySelectorAll('.content');

// tabs left part
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            buttons.forEach((btn) => btn.classList.remove("border-green-700"));
            this.classList.add("focus:border-green-700");

            contents.forEach((content) => content.classList.add("hidden"));

            const tabId = this.getAttribute("data-tab");
            document.getElementById(tabId).classList.remove("hidden");
        });
    });
});


menuButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");

    if (dropdownMenu.classList.contains("hidden")) {
        menuButton.innerHTML = "☰";
    } else {
        menuButton.innerHTML = "❌";
    }
});
window.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.add('hidden');
    }
  });

  btn.addEventListener("click", () => {
    listButton.classList.toggle("hidden");
  });
  window.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !listButton.contains(e.target)) {
      listButton.classList.add('hidden');
    }
  });


// footer click vector for responsive
document.addEventListener("DOMContentLoaded", function () {
    const toggleMenus = [
        { buttonId: "arrow", menuId: "menu1" },
        { buttonId: "arrow1", menuId: "menu2" },
        { buttonId: "arrow2", menuId: "menu3" },
        { buttonId: "arrow3", menuId: "menu4" },
        { buttonId: "arrow4", menuId: "menu5" },
        { buttonId: "arrow5", menuId: "menu6" },
    ];

    toggleMenus.forEach(({ buttonId, menuId }) => {
        const button = document.getElementById(buttonId);
        const menu = document.getElementById(menuId);

        button.addEventListener("click", function () {
            if (window.innerWidth < 1024) {
                menu.classList.toggle("hidden");
                const isRotated = button.style.transform === "rotate(180deg)";
                button.style.transform = isRotated ? "rotate(0deg)" : "rotate(180deg)";
                button.style.transition = "transform 0.3s ease-in-out";
            }
        });
    });
});


new Swiper('.myswiper',{
    slidesPerView: 1,
    loop: true,
    speed: 400,
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
    autoplay: {
        delay: 2000,
    },
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 2
        },
        480: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 5
        }
    }})

new Swiper('.myswiper1',{
    pagination: {
        el: ".swiper-pagination",
    },

    slidesPerView: 1,
    loop: true,
    speed: 400,
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 2
        },
        640: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }})

// blue section
    function setupSearchableSelect(selectContainer) {
        const selectBtn = selectContainer.querySelector("[data-select-btn]");
        const dropdown = selectContainer.querySelector("[data-dropdown]");
        const selectedOption = selectContainer.querySelector("[data-selected-option]");
        const searchInput = selectContainer.querySelector("[data-search-input]");
        const optionsList = selectContainer.querySelector("[data-options-list]").getElementsByTagName("li");
    
        selectBtn.addEventListener("click", (e) => {
            e.preventDefault();
            dropdown.classList.toggle("hidden");
            searchInput.value = "";
            filterOptions("", optionsList);
            searchInput.focus();
        });
    
        Array.from(optionsList).forEach(option => {
            option.addEventListener("click", () => {
                selectedOption.textContent = option.textContent;
                dropdown.classList.add("hidden");
            });
        });
    
        searchInput.addEventListener("input", (e) => {
            filterOptions(e.target.value, optionsList);
        });
    
        function filterOptions(searchText, options) {
            Array.from(options).forEach(option => {
                if (option.textContent.includes(searchText)) {
                    option.classList.remove("hidden");
                } else {
                    option.classList.add("hidden");
                }
            });
        }
    
        document.addEventListener("click", (e) => {
            if (!selectBtn.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.add("hidden");
            }
        });
    }
    
    document.querySelectorAll("[data-select-container]").forEach(setupSearchableSelect);


// لست مشاغل(مواردبیشتر)
document.addEventListener("DOMContentLoaded", function () {
    // گرفتن تمام دکمه‌های "موارد بیشتر" برای هر ستون
    document.querySelectorAll("[id^=toggleButton]").forEach(button => {
        button.addEventListener("click", function () {
            // پیدا کردن ستون مربوطه و نمایش آیتم‌های مخفی
            let parentDiv = this.closest("div").parentElement;
            parentDiv.querySelectorAll(".more-items").forEach(item => {
                item.classList.toggle("hidden");
            });

            // تغییر متن دکمه
            this.textContent = this.textContent === "موارد بیشتر" ? "موارد کمتر" : "موارد بیشتر";
        });
    });

    // عملکرد دکمه کلی برای حالت دسکتاپ
    document.getElementById("toggleButton").addEventListener("click", function () {
        let hiddenItems = document.querySelectorAll(".more-items.hidden");
        let visibleItems = document.querySelectorAll(".more-items:not(.hidden)");

        if (hiddenItems.length > 0) {
            hiddenItems.forEach(item => item.classList.remove("hidden"));
            this.textContent = "موارد کمتر";
        } else {
            visibleItems.forEach(item => item.classList.add("hidden"));
            this.textContent = "موارد بیشتر";
        }
    });
});
