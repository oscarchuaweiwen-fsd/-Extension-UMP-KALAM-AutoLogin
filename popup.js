function save_options() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  chrome.storage.sync.set(
    {
      username: username,
      password: password,
    },
    function () {
      // Update status to let user know options were saved.
      var status = document.getElementById("status");
      status.textContent = "Your account has been saved successfully!.";
      setTimeout(function () {
        status.textContent = "";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("status").value = "";
      }, 750);
    }
  );
}

function show() {
  document.getElementById("userInfo").classList.add("myStyle");
  chrome.storage.sync.get(["username", "password"], (result) => {
    document.getElementById("usernameInfo").innerText = result.username;
    document.getElementById("passwordInfo").innerText = result.password;

    setTimeout(function () {
      document.getElementById("userInfo").classList.remove("myStyle");
      document.getElementById("usernameInfo").innerText = "";
      document.getElementById("passwordInfo").innerText = "";
    }, 1000);
  });
}

function checkForm() {
  var username = document.getElementById("username").value;

  var password = document.getElementById("password").value;

  var usernameCanSubmit,
    passwordCanSubmit = false;

  function checkUsername() {
    if (username == "") {
      usernameCanSubmit = false;
      console.log("Put a first Name and Last Name");
    } else {
      usernameCanSubmit = true;
      console.log("Thank You");
    }
  }

  checkUsername();

  function checkPassword() {
    if (password == "") {
      passwordCanSubmit = false;
      console.log("Please Put in a proper phone number");
    } else {
      passwordCanSubmit = true;
      console.log("Thank you");
    }
  }
  checkPassword();

  if (usernameCanSubmit && passwordCanSubmit) {
    document.getElementById("save").disabled = false;
  } else {
    document.getElementById("save").disabled = true;
  }
}

// document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById("save").addEventListener("click", save_options);

document.getElementById("show").addEventListener("click", show);

document.getElementById("username").addEventListener("blur", checkForm);
document.getElementById("password").addEventListener("blur", checkForm);
