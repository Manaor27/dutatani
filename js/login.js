  function myEmpty() {
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      var button = document.getElementById("button");

      if (username!="" && password!="") {
        document.getElementById("button").disabled = false;
        button.style.backgroundColor = "#7DAB18";
        button.style.boxShadow = "0px 12px 32px rgba(0, 0, 0, 0.16)";
      } else {
        document.getElementById("button").disabled = true;
        button.style.backgroundColor = "#BFBFBF";
        button.style.boxShadow = "none";
      }
  }

  function password_show_hide() {
    var x = document.getElementById("password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "";
    } else {
      x.type = "password";
      show_eye.style.display = "";
      hide_eye.style.display = "none";
    }
  }

  function validasi_password() {
    var form = document.getElementById("form");
    var password = document.getElementById("password").value;
    var pass = document.getElementById("password");
    var sandi = document.getElementById("sandi");
    var text = document.getElementById("error_pass");
    var pattern = /.{8,}/;

    if (password.match(pattern)) {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.style.display = "none";
      pass.classList.add("focus:ring-lime-500");
      pass.classList.remove("focus:ring-red-500");
      sandi.style.color = "#151E03";
    } else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      text.style.display = "";
      pass.classList.remove("focus:ring-lime-500");
      pass.classList.add("focus:ring-red-500");
      sandi.style.color = "#B51818";
    }

    if (password === "") {
      form.classList.remove("valid");
      form.classList.remove("invalid");
      text.style.display = "none";
      pass.classList.add("focus:ring-lime-500");
      pass.classList.remove("focus:ring-red-500");
      sandi.style.color = "#151E03";
    }
  }
  
  function validasi_username() {
    var form = document.getElementById("form");
    var username = document.getElementById("username").value;
    var user = document.getElementById("username");
    var kode = document.getElementById("kode");
    var title = document.getElementById("title");
    var text = document.getElementById("error_user");
    var pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,}$/;
    var regex = /^(\+62|62|0|8)[1-9][0-9]{6,9}$/;

    if (username.match(pattern) || username.match(regex)) {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML = "";
      user.classList.add("focus:ring-lime-500");
      user.classList.remove("focus:ring-red-500");
      user.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,}$";
      title.style.color = "#151E03";
    } else {
      if (username.match(/[0-9]{6,}/)) {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Nomor hp tidak sesuai, minimal 8 digit angka";
        user.classList.remove("focus:ring-lime-500");
        user.classList.add("focus:ring-red-500");
        user.style.paddingLeft = "65px";
        user.pattern = "^(\+62|62|0|8)[1-9][0-9]{6,9}$";
        title.style.color = "#B51818";
        kode.style.display = "inline-flex";
      } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Format email harus seperti email@mail.com";
        user.classList.remove("focus:ring-lime-500");
        user.classList.add("focus:ring-red-500");
        user.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,}$";
        title.style.color = "#B51818";
        kode.style.display = "none";
        user.style.paddingLeft = "12px";
      }
    }

    if (username === "") {
      form.classList.remove("valid");
      form.classList.remove("invalid");
      text.innerHTML = "";
      user.classList.add("focus:ring-lime-500");
      user.classList.remove("focus:ring-red-500");
      title.style.color = "#151E03";
      kode.style.display = "none";
      user.style.paddingLeft = "12px";
    }
  }

  function button_hover(x) {
    var button = document.getElementById("button");
    if (button.disabled == false) {
      x.style.background = "#6F9815";
    } else {
      x.style.background = "#BFBFBF";
    }
  }

  function button_normal(x) {
    var button = document.getElementById("button");
    if (button.disabled == false) {
      x.style.background = "#7DAB18";
    } else {
      x.style.background = "#BFBFBF";
    }
  }

  function button_pressed(x) {
    var button = document.getElementById("button");
    if (button.disabled == false) {
      x.style.background = "#537210";
    } else {
      x.style.background = "#BFBFBF";
    }
  }