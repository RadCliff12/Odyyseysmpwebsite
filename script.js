console.log("Website designed and coded by Rusty#2399");
const copyIpButton = document.querySelector("#copy-ip-button");

const copyIpToClipboard = () => {
  navigator.clipboard.writeText("play.odyessysmp.vip");
};

copyIpButton.addEventListener("click", copyIpToClipboard);
