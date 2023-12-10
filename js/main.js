window.addEventListener("load", () => {
  loadLoader();
  loadCurrentYear();
  loadSwiperSlider();
  loadMetismenu();
  loadTippy();
  loadIziToast();
  loadNiceSelect2();
  loadRaterJS();
  loadMixitup();
});

/* ---------> Scripts <---------- */

/* -> Progressbar <- */
let step_counter = 0;

element = document.querySelectorAll(".step-container");
element &&
  element.forEach((e) => {
    const steps_content = e.querySelectorAll(".step-content");
    const buttons_prev = e.querySelectorAll(".btn-prev-step");
    const buttons_next = e.querySelectorAll(".btn-next-step");
    const progressbar = e.querySelectorAll(".progressbar div");

    buttons_prev.forEach((btn_prev) => {
      btn_prev.addEventListener("click", (e) => {
        step_counter--;
        stepUpdate(steps_content, step_counter, progressbar, "prev");
      });
    });

    buttons_next.forEach((btn_next) => {
      btn_next.addEventListener("click", (e) => {
        step_counter++;
        stepUpdate(steps_content, step_counter, progressbar, "next");
      });
    });
  });

/* -> Reset Progressbar <- */
element = document.querySelectorAll(".btn-reset-progressbar");
element &&
  element.forEach((element) => {
    element.addEventListener("click", (e) => {
      const target = e.currentTarget;
      setTimeout(() => {
        const parent = document.querySelector(
          target.getAttribute("data-target")
        );
        const progressbar = parent.querySelectorAll(".progressbar div");
        const step_number = parent.querySelectorAll(".step-number div");
        const steps_content = parent.querySelectorAll(".step-content");

        progressbar.forEach((e) => {
          e.classList.replace("w-full", "w-0");
        });

        steps_content.forEach((e, i) => {
          e.classList.remove("active");
          step_number[i].classList.remove("active");
        });

        step_counter = 0;
        steps_content[0].classList.add("active");
        step_number[0].classList.add("active");
      }, 300);
    });
  });

/* -> See more <- */
element = document.querySelectorAll(".btn-see-more");
element &&
  element.forEach((element) => {
    element.addEventListener("click", (e) => {
      const father = e.currentTarget.closest(".see-more");
      const see_more_container = father.querySelector(".see-more-container");
      const see_more_content = father.querySelector(".see-more-content");
      const icon_rotate = father.querySelector("i");

      see_more_container.classList.toggle("gradient-bottom");
      icon_rotate.classList.toggle("rotate-180");

      see_more_container.style.transition = "max-height 1s ease";
      see_more_container.style.maxHeight = see_more_content.offsetHeight + "px";

      let duration = see_more_container.style.transitionDuration;

      if (duration.includes("ms")) {
        duration = parseInt(duration);
      } else if (duration.includes("s")) {
        duration = 1000 * parseFloat(duration);
      }

      if (icon_rotate.classList.contains("rotate-180")) {
        setTimeout(
          () => (see_more_container.style.maxHeight = "max-content"),
          duration
        );
      } else {
        setTimeout(() => (see_more_container.style.maxHeight = ""), 10);
      }
    });
  });

/* -> Tabs <- */
const tabs_container = document.querySelectorAll(".tabs-container");

tabs_container.forEach((e) => {
  const tabs_buttons = e.querySelectorAll(".btn-tabs");
  const tabs_content = e.querySelectorAll(".tab-content");

  //contains all tabs
  tabs_buttons &&
    tabs_buttons.forEach((element, i) => {
      //an event is added to each of the tabs
      element.addEventListener("click", (event) => {
        //remove the active state along with its transition
        tabs_buttons.forEach((button, i) => {
          tabs_content[i].style.cssText = "";
          tabs_content[i].classList.remove("active");
          button.classList.remove("active");
        });

        //we activate and add the transition to the clicked element
        tabs_content[i].style.cssText = "transition : all .8s ease";
        tabs_content[i].classList.add("active");
        element.classList.add("active");
      });
    });
});

/* -> Open/Close Search <- */
element = document.querySelector(".btn-search-mob");
element &&
  element.addEventListener("click", (e) => {
    document.querySelector(".header-search").classList.toggle("hidden");
  });

/* -> Close Modals <- */
element = document.querySelectorAll(".btn-close-modal");
element &&
  element.forEach((element) => {
    element.addEventListener("click", (e) => {
      const modal = e.target.closest(".modal");
      const modal_content = modal.querySelector(".modal-content");
      const tab_content_active = modal.querySelector(".tab-content.active");
      document.body.classList.remove("overflow-hidden");

      modal.classList.replace("opacity-100", "opacity-0");
      modal.classList.replace("visible", "invisible");

      if (modal_content.classList.contains("scale-100")) {
        modal_content.classList.replace("scale-100", "scale-0");
        modal_content.classList.replace("opacity-100", "opacity-0");
      }
      if (modal_content.classList.contains("right-0")) {
        modal_content.classList.replace("right-0", "right-[-999px]");
      }
      if (modal_content.classList.contains("left-0")) {
        modal_content.classList.replace("left-0", "left-[-999px]");
      }
      if (tab_content_active) {
        setTimeout(() => tab_content_active.classList.remove("active"), 300);
      }
    });
  });

/* -> Counter <- */
element = document.querySelectorAll(".quantity");
element &&
  element.forEach((element) => {
    const quantity_value = element.querySelector(".quantity-value");
    const quantity_buttons = element.querySelectorAll(".quantity-btn");

    quantity_buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const element = e.currentTarget.classList;
        if (element.contains("increment")) {
          quantity_value.value++;
        }
        if (element.contains("decrement") && quantity_value.value > 0) {
          quantity_value.value--;
        }
      });
    });
  });

/* -> Input #number <- */
element = document.querySelectorAll(".input-number");
element &&
  element.forEach((element) => {
    element.addEventListener("onpaste", (e) => e.preventDefault());

    element.addEventListener("keydown", (e) => {
      if (isNaN(parseInt(e.key)) && e.keyCode != 8) {
        return e.preventDefault();
      }
    });
  });

/* -> Checked all checkbox <- */
element = document.querySelector("#check-all");
element &&
  element.addEventListener("click", (e) => {
    const checkbox = e.currentTarget;
    const check_product = document.querySelectorAll(".check-product");
    check_product.forEach((e) => {
      if (checkbox.checked) {
        e.checked = true;
      } else {
        e.checked = false;
      }
    });
  });

/* Go Top Button */
element = document.querySelector(".btn-gotop");
element &&
  element.addEventListener("click", (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

/* ---------> Events <---------- */

window.addEventListener("click", (e) => {
  /* -> Open Modals <- */
  if (e.target.classList.contains("btn-open-modal")) {
    const button = e.target;
    const modal = document.querySelector(button.getAttribute("data-target"));
    document.body.classList.add("overflow-hidden");

    calculatePositionTab(button);
    showModal(modal);
  }
  if (e.target.classList.contains("btn-toggle-modal")) {
    const button = e.target;
    const new_modal = document.querySelector(
      button.getAttribute("data-target")
    );
    button.closest(".modal").querySelector(".btn-close-modal").click();
    document.body.classList.add("overflow-hidden");

    showModal(new_modal);
  } else if (e.target.classList.contains("btn-wishlist")) {
    /* -> Heart Wishlist Animation <- */
    const heart_icon = e.target.children[0];

    if (heart_icon.classList.contains("bi-heart")) {
      heart_icon.classList.replace("bi-heart", "bi-heart-fill");
      heart_icon.classList.add("text-red-400", "heartscale");
    } else {
      heart_icon.classList.replace("bi-heart-fill", "bi-heart");
      heart_icon.classList.remove("text-red-400", "heartscale");
    }
  }

  /* -> Checkboxes <- */
  if (e.target.classList.contains("check-product")) {
    const check_all = document.querySelector("#check-all");
    const checkboxes = document.querySelectorAll(".check-product");

    const id_product = e.target.id;
    let text;

    if (id_product.search("desktop") >= 0) {
      text = id_product.replace("desktop", "mobile");
    } else {
      text = id_product.replace("mobile", "desktop");
    }

    const second_check = document.querySelector(`#${text}`);

    if (e.target.checked) {
      second_check.checked = true;
    } else {
      second_check.checked = false;
    }

    const checkboxes_checked = document.querySelectorAll(
      ".check-product:checked"
    );

    if (checkboxes_checked.length === checkboxes.length) {
      check_all.checked = true;
    } else {
      check_all.checked = false;
    }
  }
});

window.addEventListener("resize", (e) => {
  /* If the screen exceeds 1024px, the responsive menu will be hidden */
  if (e.target.innerWidth > 1023) {
    const button = document.querySelector(".menu-mob.visible .btn-close-modal");
    if (button) {
      button.click();
    }
  }
});

window.addEventListener("scroll", (e) => {
  /* -> Scroll to top Button <- */
  if (window.scrollY > 500) {
    const btn_gotop = document.querySelector(".btn-gotop");
    btn_gotop.classList.replace("bottom-[-999px]", "bottom-10");
    btn_gotop.classList.replace("opacity-0", "opacity-100");
    btn_gotop.classList.replace("invisible", "visible");
  } else {
    const btn_gotop = document.querySelector(".btn-gotop");
    btn_gotop.classList.replace("bottom-10", "bottom-[-999px]");
    btn_gotop.classList.replace("opacity-100", "opacity-0");
    btn_gotop.classList.replace("visible", "invisible");
  }
});

/* ----------> Functions <---------- */

const stepUpdate = (steps_content, step_counter, progressbar, action) => {
  const patern = steps_content[step_counter].closest(".step-container");
  const step_number = patern.querySelectorAll(".step-number div");

  steps_content.forEach((e) => {
    e.classList.remove("active");
  });

  steps_content[step_counter].classList.add("active");

  action == "next"
    ? progressbar[step_counter - 1].classList.replace("w-0", "w-full")
    : null;
  action == "prev"
    ? progressbar[step_counter].classList.replace("w-full", "w-0")
    : null;

  action == "next" ? step_number[step_counter].classList.add("active") : null;
  action == "prev"
    ? step_number[step_counter + 1].classList.remove("active")
    : null;
};

const calculatePositionTab = (button) => {
  if (!button.hasAttribute("data-tab")) {
    return;
  }

  const position = button.getAttribute("data-tab");
  const tabs = document.querySelectorAll(".entry-modal .btn-tabs");
  tabs[position].click();
};

const showModal = (modal) => {
  const modal_content = modal.querySelector(".modal-content");

  modal.classList.replace("opacity-0", "opacity-100");
  modal.classList.replace("invisible", "visible");

  if (modal_content.classList.contains("scale-0")) {
    modal_content.classList.replace("scale-0", "scale-100");
    modal_content.classList.replace("opacity-0", "opacity-100");
    modal_content.classList.add("opacity-transform");
  }

  if (modal_content.classList.contains("right-[-999px]")) {
    modal_content.classList.replace("right-[-999px]", "right-0");
  } else if (modal_content.classList.contains("left-[-999px]")) {
    modal_content.classList.replace("left-[-999px]", "left-0");
  }
};

const loadCurrentYear = () => {
  const year = document.querySelector(".current-year");
  if (!year) return;

  year.textContent = new Date().getFullYear();
};

const loadLoader = () => {
  setTimeout(() => {
    const loader_content = document.querySelector(".loader-content");
    loader_content.classList.add(
      "transition-all",
      "duration-500",
      "opacity-0",
      "invisible"
    );
  }, 500);

  setTimeout(() => {
    const loader = document.querySelector(".loader");
    const body = document.querySelector("body");
    loader.classList.add(
      "transition-all",
      "duration-1000",
      "opacity-0",
      "invisible"
    );
    body.classList.remove("overflow-hidden");
  }, 800);
};

/* ----------> Function Libraries <---------- */

/* -> Swiper Slider <- */
const loadSwiperSlider = () => {
  element = document.querySelector(".swiper");

  /* Slider Banner */
  element &&
    new Swiper(".swiper-banner", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    });

  /* Slider Categories */
  element &&
    new Swiper(".swiper-default", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  /* Slider Offers */
  element &&
    new Swiper(".swiper-cards", {
      slidesPerView: 1,
      spaceBetween: 20,
      freeMode: true,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        560: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        760: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    });

  /* Slider Cards */
  element &&
    new Swiper(".swiper-cards-2", {
      slidesPerView: 1,
      spaceBetween: 20,
      freeMode: true,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        560: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        760: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    });

  /* Slider Brands */
  element &&
    new Swiper(".swiper-brands", {
      slidesPerView: 1,
      spaceBetween: 30,
      freeMode: true,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        340: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        440: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        540: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
      },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    });

  /* Slider Product */
  element = document.querySelectorAll(".swiper-thumbs");
  swipper_top = document.querySelectorAll(".swiper-top");

  element &&
    element.forEach((element, index) => {
      if (!element) {
        return;
      }
      const gallery = new Swiper(element, {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });

      const swiper = new Swiper(swipper_top[index], {
        spaceBetween: 10,
        effect: "fade",
        allowTouchMove: false,
        zoom: {
          maxRatio: 2,
          toggle: true,
        },
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
        thumbs: {
          swiper: gallery,
        },
      });

      swiper.slides.forEach((element) => {
        element.addEventListener("mouseover", function (e) {
          swiper.zoom.in();
        });

        element.addEventListener("mouseout", function (e) {
          swiper.zoom.out();
        });
      });
    });
};

/* -> Metis Menu <- */
const loadMetismenu = () => {
  element = document.querySelectorAll(".metismenu");
  element &&
    element.forEach((element) => {
      if (!element) {
        return;
      }
      new MetisMenu(element, {
        triggerElement: ".metismenu-btn",
        subMenu: ".metismenu-content",
      });
    });
};

/* -> Tippy <- */
const loadTippy = () => {
  /* Modal - Button Wishlist */
  element = document.querySelector(".tippy");
  element &&
    tippy(".tippy-wishlist", {
      content: "Add to wishlist",
    });

  /* Icon Trash Remove */
  element &&
    tippy(".tippy-remove", {
      content: "Remove",
    });

  /* Icon Pen Edit */
  element &&
    tippy(".tippy-edit", {
      content: "Edit",
    });

  /* Card - Button Wishlist */
  element &&
    tippy(".tippy-left-wishlist", {
      placement: "left",
      content: "Add to wishlist",
    });

  /* Card - Button Quick View */
  element &&
    tippy(".tippy-left-card-view", {
      placement: "left",
      content: "Quick view",
      zIndex: 1,
    });

  /* Shop - Grid Icon */
  element = document.querySelector(".tippy");
  element &&
    tippy(".tippy-grid", {
      content: "Grid view",
    });

  /* Shop - List Icon */
  element = document.querySelector(".tippy");
  element &&
    tippy(".tippy-list", {
      content: "List view",
    });
};

/* -> iziToast <- */
const loadIziToast = () => {
  element = document.querySelector(".form-leave-message");
  element &&
    element.addEventListener("submit", (e) => {
      iziToast.show({
        message: "Message sent successfully!",
        position: "topRight",
        color: "rgb(34 197 94 / 70%",
        icon: "bi-check-circle-fill",
        iconColor: "#fff",
        titleColor: "#fff",
        messageColor: "#fff",
      });
    });

  element = document.querySelector(".resend-code");
  element &&
    element.addEventListener("click", (e) => {
      iziToast.show({
        message: "The code has been resent",
        position: "topRight",
        color: "rgb(34 197 94 / 70%",
        icon: "bi-check-circle-fill",
        iconColor: "#fff",
        titleColor: "#fff",
        messageColor: "#fff",
      });
    });
};

/* -> Nice Select2 <- */
const loadNiceSelect2 = () => {
  element = document.querySelectorAll(".nice-select");
  element &&
    element.forEach((element) => {
      if (element.classList.contains("country")) {
        NiceSelect.bind(element, {
          placeholder: "Country",
        });
      }
      if (element.classList.contains("order-by")) {
        NiceSelect.bind(element, {
          placeholder: "Order by",
        });
      }
      if (element.classList.contains("card-payment")) {
        NiceSelect.bind(element, {
          placeholder: "Card",
        });
      }
    });
};

/* -> Rater Js <- */
const loadRaterJS = () => {
  element = document.querySelector("#rater");
  if (!element) {
    return;
  }

  let myRating = raterJs({
    element: element,
    rateCallback: function rateCallback(rating, done) {
      this.setRating(rating);
      done();
    },
    starSize: 32,
    step: 0.5,
  });

  /* Get the result */
  const form_review = document.querySelector(".form-review");
  form_review &&
    form_review.addEventListener("submit", (e) => {
      document.querySelector(".rating-value").value = myRating.getRating();
    });
};

/* -> Mixitup <- */
const loadMixitup = () => {
  element = document.querySelector(".mix-elements");
  if (!element) {
    return;
  }

  const params = {
    load: {
      filter: element.classList.contains("mix-all") ? ".mix-main" : "all",
    },
  };

  mixitup(element, params);
};
