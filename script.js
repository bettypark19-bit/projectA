/* ==============================================  */
/* =======================nav=======================  */
/* ==============================================  */
const topn = document.querySelector(".header-top")
const nav = document.querySelector("nav");
const dep1 = nav.querySelectorAll(".dep1");

// mouse진입시 메뉴 열기
dep1.forEach((el) => {
  const row = el.querySelector('.row');
  const mega = el.querySelector(".mega");
  el.addEventListener("mouseenter",() => {
    el.classList.add("on");
    const h = row.offsetHeight;
    mega.style.height = `${h}px`;
  });
  el.addEventListener("mouseleave",() => {
    el.classList.remove("on");
    mega.style.height = `0px`;
  });
});

//sticky, 스크롤 이벤트
window.addEventListener('scroll',() => {
  console.log(window.scrollY);
if(window.scrollY > nav.offsetTop){
  nav.classList.add("sticky");
}else{
  nav.classList.remove("sticky");
}
});



// 배너 슬라이더
const thumbSwiper = new Swiper(".thumb_swiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  loop: true,
  watchSlidesProgress: true,
});

const swiper2 = new Swiper(".main_swiper", {
  spaceBetween: 10,
  effect: "fade",
  loop: true,
  autoplay: { delay: 2000 },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: thumbSwiper,
  },
});

const subswiper = new Swiper(".sub_swiper", {
  loop: true,
  autoplay: { delay: 2000 },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//큐레이션 슬라이더
      const swiperc = new Swiper(".cuswiper", {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 40,
        autoplay: { delay: 2000 },
                navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


// 키워드 슬라이더
      const swiperk = new Swiper(".keyswiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        autoplay: { delay: 1500 },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


// 상임위 버튼
const committeeButtons = document.querySelectorAll(".committee-btn");
committeeButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    committeeButtons.forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
  });
});

// 공지사항 탭
const noticeTabs = document.querySelectorAll(".notice-tab");
noticeTabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    noticeTabs.forEach((t) => t.classList.remove("active"));
    this.classList.add("active");
  });
});

// 큐레이션 슬라이더
const curationSliders = document.querySelectorAll(".curation-slider");
curationSliders.forEach((slider) => {
  const prevBtn = slider.querySelector(".slider-prev");
  const nextBtn = slider.querySelector(".slider-next");
  const items = slider.querySelector(".curation-items");

  if (prevBtn && items) {
    prevBtn.addEventListener("click", () => {
      items.scrollBy({
        left: -370,
        behavior: "smooth",
      });
    });
  }

  if (nextBtn && items) {
    nextBtn.addEventListener("click", () => {
      items.scrollBy({
        left: 370,
        behavior: "smooth",
      });
    });
  }
});

// 키워드 슬라이더
const keywordsSlider = document.querySelector(".keywords-slider");
if (keywordsSlider) {
  const prevBtn = keywordsSlider.querySelector(".slider-prev");
  const nextBtn = keywordsSlider.querySelector(".slider-next");
  const list = keywordsSlider.querySelector(".keywords-list");

  if (prevBtn && list) {
    prevBtn.addEventListener("click", () => {
      list.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    });
  }

  if (nextBtn && list) {
    nextBtn.addEventListener("click", () => {
      list.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    });
  }
}

// 검색창 포커스
const searchInput = document.querySelector(".search-input input");
if (searchInput) {
  searchInput.addEventListener("focus", function () {
    this.parentElement.parentElement.style.borderColor = "#27619c";
  });

  searchInput.addEventListener("blur", function () {
    this.parentElement.parentElement.style.borderColor = "#4b83c4";
  });
}

// 검색 버튼
const searchBtn = document.querySelector(".search-btn");
if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    const input = document.querySelector(".search-input input");
    if (input && input.value.trim()) {
      alert("검색 기능: " + input.value);
    }
  });
}

// 엔터키로 검색
if (searchInput) {
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && searchInput.value.trim()) {
      alert("검색 기능: " + searchInput.value);
    }
  });
}

// 메뉴 버튼
const menuBtn = document.querySelector(".menu-btn");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    alert("메뉴 기능");
  });
}

// 스크롤 애니메이션
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// 섹션 애니메이션 적용
document.querySelectorAll(".section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "opacity 0.6s, transform 0.6s";
  observer.observe(section);
});

// 카드 호버 효과
const cards = document.querySelectorAll(".resource-card, .review-img");
cards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-15px)";
    this.style.transition = "transform 0.3s";
    this.style.borderColor = "#4b83c4";
    this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, .2)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.borderColor = "#c2b0a2";
    this.style.boxShadow = "none";
  });
});

// 스무스 스크롤
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// 로딩 완료
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
  document.body.style.transition = "opacity 0.5s";
});

// 초기 스타일
document.body.style.opacity = "0";

// ===============================팝업================================
const btn = document.querySelector(".popup button");
btn.onclick = () => {
  document.querySelector(".popup").style.display = "none";
};
