function PersonCard(animation) {
  let favorited = false;

  let divContainer = document.createElement("div");

  divContainer.className = "divContainerAdd";
  divContainer.id = "divContainerMember";

  let innerDiv = document.createElement("div");

  let innerDivHeader = document.createElement("header");

  innerDivHeader.id = "headerCardMember";

  let favoriteIconContainer = document.createElement("span");

  favoriteIconContainer.id = "heartIconContainer";

  let favoriteIcon = document.createElement("i");

  favoriteIcon.addEventListener("click", (e) => {
    e.target.classList.toggle("favorited");
  });

  favoriteIcon.className = "fas fa-heart";

  favoriteIconContainer.append(favoriteIcon);

  innerDivHeader.appendChild(favoriteIconContainer);

  let figureAvatarContainer = document.createElement("figure");

  figureAvatarContainer.className = "figure";

  let AvatarImg = document.createElement("img");

  AvatarImg.setAttribute(
    "src",
    "https://avatars0.githubusercontent.com/u/31545128?s=120&v=4"
  );

  AvatarImg.classList = "memberImage";

  figureAvatarContainer.append(AvatarImg);

  let AvatarNameEmail = document.createElement("figcaption");

  let AvatarName = document.createElement("input");

  AvatarName.value = "John Doe";

  AvatarName.placeholder = "John Doe";

  let AvatarEmail = document.createElement("input");

  AvatarEmail.value = "johndoe@outlook.com";

  AvatarEmail.placeholder = "johndoe@outlook.com";

  AvatarNameEmail.append(AvatarName, AvatarEmail);

  let buttonsContainer = document.createElement("footer");

  let buttonAssign = document.createElement("button");

  let buttonAssignIcon = document.createElement("span");

  buttonAssignIcon.className = "fas fa-book";

  let buttonAssignText = document.createElement("label");

  buttonAssignText.textContent = "Assign";

  buttonAssign.append(buttonAssignIcon, buttonAssignText);

  let buttonSee = document.createElement("button");

  let buttonSeeIcon = document.createElement("span");

  buttonSeeIcon.className = "fas fa-eye";

  let buttonSeeText = document.createElement("label");

  buttonSeeText.textContent = "View";

  buttonSee.append(buttonSeeIcon, buttonSeeText);

  buttonsContainer.append(buttonAssign, buttonSee);

  figureAvatarContainer.append(AvatarNameEmail, buttonsContainer);

  innerDiv.append(innerDivHeader, figureAvatarContainer);

  divContainer.append(innerDiv);

  divContainer.style.animation = animation.animation;
  divContainer.style.animationDelay = animation.delay;

  return divContainer;
}

export default PersonCard;
