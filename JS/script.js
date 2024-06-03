const button = document.getElementById("ms_access");
const dropdown = document.getElementById("drop_msaccess");

button.addEventListener("click", function () {
    dropdown.classList.toggle("show");
});

// maybe will be able to change so that if you click outside the menu then the drop down will close
// button.addEventListener("blur", function () {
//     dropdown.classList.remove("show");
// });
