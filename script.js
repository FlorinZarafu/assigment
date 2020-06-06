// getting the the btn class
const btn = document.querySelector(".btn");
//getting position of the btn
const posTop =
  btn.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
//   function for changing the position of btn when is scrolled
calculatePosition = () => {
  document.documentElement.scrollTop > posTop
    ? ((btn.style.position = "fixed"), (btn.style.top = "0"))
    : ((btn.style.position = "static"), (btn.style.top = "auto"));
};
// add event listener on scroll and call the function
window.addEventListener("scroll", calculatePosition);
