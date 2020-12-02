function CardAddMember(animation) {

    let divContainer = document.createElement("div");

    divContainer.className = "divContainerAdd";
    
    let innerDiv = document.createElement("div");

    let innerDivHeader = document.createElement("header");

    let textHeader = document.createElement("span");
    
    textHeader.textContent = "Add New Members";

    innerDivHeader.append(textHeader);

    let figureAvatarContainer = document.createElement("figure");
    
    let AvatarContainerIcon = document.createElement("label");

    AvatarContainerIcon.setAttribute("for","file");

    let inputFile = document.createElement("input");

    inputFile.setAttribute("type","file");
    
    inputFile.setAttribute("id","file");

    let AvatarImg = document.createElement("img");

    AvatarImg.classList = "addMemberImg"

    AvatarImg.setAttribute("src","./avatar.svg");

    AvatarContainerIcon.append(AvatarImg,inputFile);

    figureAvatarContainer.append(AvatarContainerIcon);

    let AvatarNameEmail = document.createElement("figcaption");

    let AvatarName = document.createElement("input");
    
    AvatarName.value = "John Doe";

    AvatarName.placeholder = "John Doe";
    
    let AvatarEmail = document.createElement("input");

    AvatarEmail.value = "johndoe@outlook.com";

    AvatarEmail.placeholder = "johndoe@outlook.com";

    AvatarNameEmail.append(AvatarName,AvatarEmail);

    let buttonAdd = document.createElement("button");

    buttonAdd.textContent = "Add";

    figureAvatarContainer.append(AvatarNameEmail,buttonAdd);

    innerDiv.append(innerDivHeader,figureAvatarContainer,buttonAdd);

    divContainer.append(innerDiv);

    divContainer.style.animation = animation.animation;
    divContainer.style.animationDelay = animation.delay;

    return divContainer;

}

export default CardAddMember;