function validateForm() {
  var userEmail = document.getElementById("userEmail").value;
  var userPassword = document.getElementById("userPassword").value;
  var errorMessage = document.getElementById("errorMessage");

  if (userEmail.toLowerCase().includes("@gmail.com")) {
    if (isValidPassword(userPassword)) {
      errorMessage.textContent = "";

      window.location.href = "dashboardpage.html";
    } else {
      errorMessage.textContent =
        "Password must be at least 8 characters long and contain a number or symbol.";
    }
  } else {
    errorMessage.textContent = "Email must contain @gmail.com";
  }
}

function isValidPassword(password) {
  var passwordRegex = /^(?=.*[0-9!@#$%^&*])(.{8,})$/;
  return passwordRegex.test(password);
}
// ToDo List Functions
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    var taskItem = document.createElement("li");
    taskItem.textContent = taskInput.value;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

// Text Cards for the Dashboard
window.onload = function () {
  var cardContainer = document.querySelector(".card-container");

  // Add three text cards initially
  for (var i = 1; i <= 3; i++) {
    var card = document.createElement("div");
    card.className = "card";
    card.textContent = "Lorem Ipsum Text " + i;
    cardContainer.appendChild(card);
  }
};
