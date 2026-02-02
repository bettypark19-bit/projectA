/* ==============================================  */
/* =======================nav=======================  */
/* ==============================================  */

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

