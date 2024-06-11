const nameInput = document.getElementById("name-input");
const saveButtion = document.getElementById("save-buttopn");

saveButtion.addEventListener("click", () => {
  console.log("The name is: " + nameInput.value);
});
