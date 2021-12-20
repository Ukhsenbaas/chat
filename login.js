document.querySelector(".login").onclick = () => {
  let $inputUs = document.querySelector(".inputUs").value;
  // localStorage.getItem($inputUs);
  localStorage.setItem("username", $inputUs);
};
