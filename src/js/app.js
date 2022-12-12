const questionDiv = document.querySelectorAll(".card__div--question");

questionDiv.forEach((question) => {
  const answer = question.parentElement.lastElementChild.children[0];
  const arrow = question.lastElementChild.children[0];
  const clase = question.classList;
  question.addEventListener("click", () => {
    clase.contains("active") ? close() : open();
  });

  const close = () => {
    question.classList.remove("active");
    answer.style.display = "none";
    question.style.fontWeight = "400";
    arrow.style.transform = "rotate(0)";
  };

  const open = () => {
    question.classList.add("active");
    answer.style.display = "flex";
    question.style.fontWeight = "700";
    arrow.style.transform = "rotate(-180deg)";
    arrow.style.transition = "all .3s linear";
  };
});
