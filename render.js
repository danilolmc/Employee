import CardAddMember from "./addMemberCard.js";
import PersonCard from "./PersonCard.js";

let containerContent = document.getElementsByClassName("content")[0];

for (let index = 2; index < 3; index++) {
  containerContent.append(
    CardAddMember({
      animation: "animaCard 1s ease forwards",
      delay: `${0.13 * index + 0.3}s`,
    })
  );
}

for (let index = 3; index < 17; index++) {
  containerContent.append(
    PersonCard({
      animation: "animaCard 1s ease forwards",
      delay: `${0.14 * index + 0.23}s`,
    })
  );
}

let buttonAll = document.getElementsByClassName("button-focused")[0];

let buttonMyTeam = document.getElementsByClassName("button-non-focused")[0];

let btnfocusedSpan = document.getElementsByClassName("btnFocused")[0];

buttonMyTeam.addEventListener("click", () => {
  buttonAll.style.color = "var(--medium-gray-color)";
  buttonMyTeam.style.color = "#fff";
  btnfocusedSpan.classList.remove("AllFocused");
  btnfocusedSpan.classList.add("myTeamFocused");
});

buttonAll.addEventListener("click", () => {
  buttonAll.style.color = "#fff";
  buttonMyTeam.style.color = "var(--medium-gray-color)";
  btnfocusedSpan.classList.remove("myTeamFocused");
  btnfocusedSpan.classList.add("AllFocused");
});
