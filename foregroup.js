chrome.storage.sync.get(["username", "password"], (result) => {

  console.log(result)
  var kalamUsername = document.getElementById("username");
  var kalamPassword = document.getElementById("password");
  var button = document.getElementById("loginbtn");


  kalamUsername.value = result.username;
  kalamPassword.value = result.password;


  setTimeout(()=>{
    button.click()
  },2000)
});
