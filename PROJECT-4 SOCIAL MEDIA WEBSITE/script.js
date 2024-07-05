//blue side line on active item
const menuItems = document.querySelectorAll(".menu-item");
const messagesNotifications = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");

const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");


const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

const fontSizes = document.querySelectorAll(".choose-size span");

var root = document.querySelector(":root");

const colorPallete = document.querySelectorAll(".choose-color span");


const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");


//remove active class from all menu items

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    })
}
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        if (item.id != 'notifications') {
            document.querySelector(".notifications-popup").style.display = "none";
        } else {
            document.querySelector(".notifications-popup").style.display = "block";
            document.querySelector("#notifications .notification-count").style.display = "none";
        }
    })
})



// MESSAGES
//highlighting message box when clicked on message menu item

messagesNotifications.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary--)";
    messagesNotifications.querySelector(".notification-count").style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
})


const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector("h5").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }
    })
}

messageSearch.addEventListener("keyup", searchMessage);


// THEME CUSTOMIZATION

// opens modal
const openThemeModal = () => {
    themeModal.style.display = "grid";
}
const closeThemeModal = (e) => {
    if (e.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none";
    }
}

// close modal
themeModal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);


// CHANGING FONTSIZE

// remove size

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}






fontSizes.forEach(size => {
    let fontSize;
    size.classList.toggle("active");

    size.addEventListener("click", () => {
        removeSizeSelector();
        if (size.classList.contains("font-size1")) {
            fontSize = "10px";
            root.style.setProperty("--sticky-top-left--", "5.4rem");
            root.style.setProperty("--sticky-top-right--", "5.4rem");
        } else if (size.classList.contains("font-size2")) {
            fontSize = "13px";
            root.style.setProperty("--sticky-top-left--", "5.4rem");
            root.style.setProperty("--sticky-top-right--", "-7rem");
        } else if (size.classList.contains("font-size3")) {
            fontSize = "16px";
            root.style.setProperty("--sticky-top-left--", "5.4rem");
            root.style.setProperty("--sticky-top-right--", "-17rem");
        } else if (size.classList.contains("font-size4")) {
            fontSize = "19px";
            root.style.setProperty("--sticky-top-left--", "-5rem");
            root.style.setProperty("--sticky-top-right--", "-25rem");
        } else if (size.classList.contains("font-size5")) {
            fontSize = "22px";
            root.style.setProperty("--sticky-top-left--", "-10rem");
            root.style.setProperty("--sticky-top-right--", "-33rem");
        }

        document.querySelector("html").style.fontSize = fontSize;
    })
})


// Change primary colors

colorPallete.forEach(color => {
    color.addEventListener("click", () => {
        if (color.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52;
        } else if (color.classList.contains("color-3")) {
            primaryHue = 352;
        } else if (color.classList.contains("color-4")) {
            primaryHue = 152;
        } else if (color.classList.contains("color-5")) {
            primaryHue = 202;
        }

        root.style.setProperty("--primary-color-hue", primaryHue);

    })
})

// BACKGROUND


let lightColorLightness;
let DarkColorLightness;
let WhiteColorLightness;

const changeBG = () => {
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--white-color-lightness", WhiteColorLightness);
    root.style.setProperty("--dark-color-lightness", DarkColorLightness);
}

bg2.addEventListener("click", () => {
    DarkColorLightness = "95%";
    WhiteColorLightness = "20%";
    lightColorLightness = "15%";

    bg2.classList.add("active");

    bg1.classList.remove("active");
    bg3.classList.remove("active");
    changeBG();
})

