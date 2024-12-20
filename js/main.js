function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}

//expanded itens solu

// document.addEventListener("DOMContentLoaded", function () {
//   const items = document.querySelectorAll(".itens-expanded");
//   let currentIndex = 0;
//   let hoverPaused = false;

//   items.forEach((item, index) => {
//     item.addEventListener("mouseover", () => {
//       hoverPaused = true;
//       items.forEach((item) => {
//         item.classList.remove("active");
//       });
//       item.classList.add("active");
//     });

//     item.addEventListener("mouseout", () => {
//       hoverPaused = false;
//       items.forEach((item) => {
//         item.classList.remove("active");
//       });
//     });
//   });

//   setInterval(() => {
//     if (!hoverPaused) {
//       items[currentIndex].classList.remove("active");
//       currentIndex = (currentIndex + 1) % items.length;
//       items[currentIndex].classList.add("active");
//     }
//   }, 4000);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let clicked = false;

//   function handleClick(event) {
//     event.preventDefault();

//     if (clicked) {
//       console.log("click ok");
//     }

//     clicked = true;
//   }

//   const linkInsideCurrLider = document.querySelector(".curr-lider a");

//   if (linkInsideCurrLider) {
//     linkInsideCurrLider.addEventListener("click", handleClick);
//   }
// });

// document
//   .getElementById("btn-conta")
//   .addEventListener("click", function (event) {
//     event.preventDefault();

//     // função para detectar o sistema operacional
//     function getOperatingSystem() {
//       var userAgent = navigator.userAgent || navigator.vendor || window.opera;

//       if (/android/i.test(userAgent)) {
//         return "Android";
//       }

//       if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//         return "iOS";
//       }

//       if (/Win/i.test(userAgent)) {
//         return "Windows";
//       }

//       if (/Mac/i.test(userAgent)) {
//         return "macOS";
//       }

//       if (/Linux/i.test(userAgent)) {
//         return "Linux";
//       }

//       return "unknown";
//     }

//     var os = getOperatingSystem();

//     if (os === "Android") {
//       window.location.href =
//         "https://play.google.com/store/apps/details?id=br.com.ctminvest.customers&hl=en";
//     } else if (os === "iOS") {
//       window.location.href =
//         "https://apps.apple.com/br/app/ctm-investimentos/id1429100165";
//     } else if (os === "Windows") {
//       window.location.href =
//         "https://play.google.com/store/apps/details?id=br.com.ctminvest.customers&hl=en";
//     } else if (os === "macOS") {
//       window.location.href =
//         "https://apps.apple.com/br/app/ctm-investimentos/id1429100165";
//     } else if (os === "Linux") {
//       window.location.href =
//         "https://apps.apple.com/br/app/ctm-investimentos/id1429100165";
//     } else {
//       alert("Seu sistema operacional não é suportado para este download.");
//     }
//   });

$(".titulosCentral").each(function () {
  $("#resultsTitle").append($(this));
});

document.addEventListener("DOMContentLoaded", function () {
  var accordion = new bootstrap.Collapse(document.getElementById("conce"), {
    toggle: false,
  });

  var accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(function (item) {
    item.addEventListener("show.bs.collapse", function () {
      accordionItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          var collapse = new bootstrap.Collapse(
            otherItem.querySelector(".collapse"),
            {
              toggle: false,
            }
          );
          collapse.hide();
        }
      });
    });
  });
});

function redirectTo(event, contentId) {
  event.preventDefault();

  var targetElement = document.getElementById(contentId);

  if (targetElement) {
    var offset = -520;
    var targetPosition = targetElement.offsetTop - offset;

    var links = document.querySelectorAll(".list a");
    links.forEach(function (link) {
      link.classList.remove("active");
    });

    event.target.classList.add("active");

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

function updateActiveLink() {
  var links = document.querySelectorAll(".list a");
  var scrollPosition = window.scrollY;

  links.forEach(function (link) {
    var targetId = link.getAttribute("data-target");
    var targetElement = document.getElementById(targetId);

    if (targetElement) {
      var offset = 150;
      var targetPosition = targetElement.offsetTop - offset;

      if (
        scrollPosition >= targetPosition &&
        scrollPosition < targetPosition + targetElement.clientHeight
      ) {
        links.forEach(function (link) {
          link.classList.remove("active");
        });

        link.classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

window.addEventListener("load", updateActiveLink);

$(".searchbox input").focus(function () {
  $(".searchbox .input-group").addClass("focused-border");
});

$(".searchbox input").focusout(function () {
  $(".searchbox .input-group").removeClass("focused-border");
});

// opens and closes the search box.

$(".open-searchbox, .close-searchbox").click(function () {
  $(".searchbox").toggleClass("active");
  $("body").toggleClass("open-menu");
});

// manages the status of the mobile menu.

$(".toggle-mobile-menu").click(function () {
  $(".mobile-menu-div").toggleClass("active");
  $(".header").toggleClass("open-menu");
  $("body").toggleClass("open-menu");
});

$(".button-mapa-site").click((e) => {
  $(".button-mapa-site").toggleClass("active");
});

// Código responsável por fazer o collapse das tables.

//$('.table:not(.table-not-break)').basictable({
//  breakpoint: 767
//});

// Animações para aparecer o elemento
AOS.init({
  once: true,
});

window.addEventListener(
  "scroll",
  debounce(() => {
    AOS.refresh();
  }, 200)
);

// Tooltip

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Contraste

function accessApplyTheme(theme) {
  localStorage.setItem("access_theme", theme);

  if (theme == "dark") {
    $("body").attr("data-theme", "dark");
  } else {
    $("body").attr("data-theme", "light");
  }
}

var access_theme = "light";

if (localStorage.getItem("access_theme")) {
  access_theme = localStorage.getItem("access_theme");
  accessApplyTheme(access_theme);
}

$("#contrast-toggle").on("click", function (e) {
  if (access_theme == "light") {
    access_theme = "dark";
  } else {
    access_theme = "light";
  }
  accessApplyTheme(access_theme);
});

/* Hover do menu */

const counterUp = window.counterUp.default;

const callback = (entries) => {
  entries.forEach((entry) => {
    const el = entry.target;
    if (entry.isIntersecting && !el.classList.contains("is-visible")) {
      counterUp(el, {
        duration: 2000,
        // delay: 16,
      });
      el.classList.add("is-visible");
    }
  });
};

const IO = new IntersectionObserver(callback, { threshold: 1 });
const elements = document.querySelectorAll(".counter");

elements.forEach((el) => {
  IO.observe(el);
});

$(
  ".header .nav-menu-header .header-navigation-item > .dropdown-toggle"
).removeAttr("data-bs-toggle");

document
  .querySelectorAll(".header .nav-menu-header .header-navigation-item")
  .forEach((i) => {
    const dropdown = i.querySelector(".dropdown-menu");
    const toggle = i.querySelector(".dropdown-toggle");

    i.addEventListener("mouseover", () => {
      dropdown.classList.add("show");
      toggle.classList.add("active");
      setTimeout(() => {
        dropdown.style.opacity = "1";
      }, 10);
    });

    i.addEventListener("mouseleave", () => {
      dropdown.style.opacity = "0";
      toggle.classList.remove("active");
      dropdown.classList.remove("show");
    });
  });

/* Carousels */

// ff carrosel item home
const items = document.querySelectorAll(".container-swiper-solutions .item");
let currentIndex = 0;
let interval;

const startAutoSwitch = () => {
  interval = setInterval(() => {
    items[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add("active");
  }, 5000);
};

const stopAutoSwitch = () => {
  clearInterval(interval);
};

items.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    stopAutoSwitch();
    items[currentIndex].classList.remove("active");
    currentIndex = index;
    item.classList.add("active");
  });

  item.addEventListener("mouseleave", startAutoSwitch);
});

startAutoSwitch();

/* Focus no input */

function activeInputsFocus() {
  const inputs = document.querySelectorAll(
    ".div-input input, .div-input select, .div-input textarea"
  );

  inputs.forEach((input) => {
    if (input.value != "") {
      input.parentNode.classList.add("focus");
    }
    input.addEventListener("focus", (e) => {
      input.parentNode.classList.add("focus");
    });
    input.addEventListener("blur", (e) => {
      if (input.value == "") {
        input.parentNode.classList.remove("focus");
      }
    });
  });
}

activeInputsFocus();

/* Parar o vídeo quando fechar o modal */

function stopVideo() {
  let leg = $("#modalVideo iframe").attr("src");
  $("#modalVideo iframe").attr("src", leg);
}
if ($("modalVideo")) {
  $("#modalVideo").on("click", () => {
    setTimeout(() => {
      if (!$("#modalVideo").hasClass("show")) {
        stopVideo();
      }
    }, 200);
  });
}

/* Scroll to accordion */
// $(document).ready(function () {
//   let buttonAccordions = document.querySelectorAll(
//     ".accordion:not(#accordionMenuMobile) button.accordion-button"
//   );
//   buttonAccordions.forEach((i) => {
//     i.addEventListener("click", () => {
//       setTimeout(() => {
//         if (!i.classList.contains("collapsed")) {
//           const id = i.getAttribute("data-bs-target");
//           const section = $(id);
//           const topo = section.offset().top;
//           window.scrollTo({
//             top: topo - 230,
//             behavior: "smooth",
//           });
//         }
//       }, 410);
//     });
//   });
// });

const storys = new PrismaStories("slide", "openStorys", "closeStorys");
storys.init();
