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

  function validasi_nama() {
    var form = document.getElementById("form");
    var nama = document.getElementById("nama").value;
    var name = document.getElementById("nama");
    var title = document.getElementById("title_nama");
    var text = document.getElementById("error_nama");
    var pattern = /[a-zA-Z]{2,}/;

    if (nama.match(pattern)) {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.style.display = "none";
      name.classList.add("focus:ring-lime-500");
      name.classList.remove("focus:ring-red-500");
      title.style.color = "#151E03";
    } else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      text.style.display = "";
      name.classList.remove("focus:ring-lime-500");
      name.classList.add("focus:ring-red-500");
      title.style.color = "#B51818";
    }

    if (nama === "") {
      form.classList.remove("valid");
      form.classList.remove("invalid");
      text.style.display = "none";
      name.classList.add("focus:ring-lime-500");
      name.classList.remove("focus:ring-red-500");
      title.style.color = "#151E03";
    }
  }

  function validasi_nik() {
    var form = document.getElementById("form");
    var nik = document.getElementById("nik").value;
    var name = document.getElementById("nik");
    var title = document.getElementById("title_nik");
    var text = document.getElementById("error_nik");
    var pattern = /[0-9]{15}/;

    if (nik.match(pattern)) {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.style.display = "none";
      name.classList.add("focus:ring-lime-500");
      name.classList.remove("focus:ring-red-500");
      title.style.color = "#151E03";
    } else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      text.style.display = "";
      name.classList.remove("focus:ring-lime-500");
      name.classList.add("focus:ring-red-500");
      title.style.color = "#B51818";
    }

    if (nik === "") {
      form.classList.remove("valid");
      form.classList.remove("invalid");
      text.style.display = "none";
      name.classList.add("focus:ring-lime-500");
      name.classList.remove("focus:ring-red-500");
      title.style.color = "#151E03";
    }
  }

  function validasi_hp() {
    var form = document.getElementById("form");
    var no_hp = document.getElementById("no_hp").value;
    var name = document.getElementById("no_hp");
    var title = document.getElementById("title_hp");
    var text = document.getElementById("error_hp");
    var pattern = /[0,8][1-9][0-9]{5,}/;

    if (no_hp.match(pattern)) {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.style.display = "none";
      name.classList.add("focus:ring-lime-500");
      name.classList.remove("focus:ring-red-500");
      title.style.color = "#151E03";
    } else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      text.style.display = "";
      name.classList.remove("focus:ring-lime-500");
      name.classList.add("focus:ring-red-500");
      title.style.color = "#B51818";
    }

    if (no_hp === "") {
      form.classList.remove("valid");
      form.classList.remove("invalid");
      text.style.display = "none";
      name.classList.add("focus:ring-lime-500");
      name.classList.remove("focus:ring-red-500");
      title.style.color = "#151E03";
    }
  }

  function validasi_email() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var name = document.getElementById("email");
    var title = document.getElementById("title_email");
    var text = document.getElementById("error_email");
    var pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,}$/;

    if (email.match(pattern)) {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.style.display = "none";
      name.classList.add("focus:ring-lime-500");
      name.classList.remove("focus:ring-red-500");
      title.style.color = "#151E03";
    } else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      text.style.display = "";
      name.classList.remove("focus:ring-lime-500");
      name.classList.add("focus:ring-red-500");
      title.style.color = "#B51818";
    }

    if (email === "") {
      form.classList.remove("valid");
      form.classList.remove("invalid");
      text.style.display = "none";
      name.classList.add("focus:ring-lime-500");
      name.classList.remove("focus:ring-red-500");
      title.style.color = "#151E03";
    }
  }

  const modal = document.querySelector('.modal');
  const agree = document.getElementById('setuju');

  const showModal = document.querySelector('.show-modal');
  const closeModal = document.querySelectorAll('.close-modal');
  const setuju = document.querySelector('.setuju');

  setuju.addEventListener('click', function () {
    agree.checked = true;
    modal.classList.add('hidden')
  });

  showModal.addEventListener('click', function (){
    modal.classList.remove('hidden')
  });

  closeModal.forEach(close => {
    close.addEventListener('click', function (){
      modal.classList.add('hidden')
    });
  });

  function myEmpty() {
    let jenis = document.getElementById("jenis").value;
    let nama = document.getElementById("nama").value;
    let nik = document.getElementById("nik").value;
    let no_hp = document.getElementById("no_hp").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    var button = document.getElementById("button");
    var tombol = document.getElementById("tombol");

    passwordStrength(password);

    if (jenis == "Petani") {
      if (nama!="" && nik!="" && no_hp!="" && password!="") {
        button.disabled = false;
        button.style.backgroundColor = "#7DAB18";
        button.style.boxShadow = "0px 12px 32px rgba(0, 0, 0, 0.16)";
        tombol.disabled = false;
        tombol.style.backgroundColor = "#7DAB18";
        tombol.style.boxShadow = "0px 12px 32px rgba(0, 0, 0, 0.16)";
      } else {
        button.disabled = true;
        button.style.backgroundColor = "#BFBFBF";
        button.style.boxShadow = "none";
        tombol.disabled = true;
        tombol.style.backgroundColor = "#BFBFBF";
        tombol.style.boxShadow = "none";
      }
    } else {
      if (nama!="" && nik!="" && no_hp!="" && email!="" && password!="") {
        button.disabled = false;
        button.style.backgroundColor = "#7DAB18";
        button.style.boxShadow = "0px 12px 32px rgba(0, 0, 0, 0.16)";
        tombol.disabled = false;
        tombol.style.backgroundColor = "#7DAB18";
        tombol.style.boxShadow = "0px 12px 32px rgba(0, 0, 0, 0.16)";
      } else {
        button.disabled = true;
        button.style.backgroundColor = "#BFBFBF";
        button.style.boxShadow = "none";
        tombol.disabled = true;
        tombol.style.backgroundColor = "#BFBFBF";
        tombol.style.boxShadow = "none";
      }
    }
  }

  function passwordStrength(p){
    var status = document.getElementById('status');
    var sandi = document.getElementById('password').value;
    var text = document.getElementById("error_pass");
    var alert = document.getElementById("alert");

    var regex = new Array();
    regex.push("[A-Z]");
    regex.push("[a-z]");
    regex.push("[0-9]");

    var passed = 0;
    for(var x = 0; x < regex.length;x++){
      if(new RegExp(regex[x]).test(p)){
        console.log(passed++);
      }
    }

    var strength = null;
    var color = null;
    var display = null;

    if (sandi.length > 7) {
      switch(passed){
        case 0:
        
        case 1:
          strength = "Kurang Kuat";
          color = "#B51818";
          display = "";
          break;
        case 2:
          strength = "Cukup Kuat";
          color = "#FAB400";
          display = "";
          break;
        case 3:
          strength = "Sangat Kuat";
          color = "#0FB700";
          display = "none";
      }
    }
    if (sandi.length < 9) {
      status.innerHTML = "";
      alert.style.display = "none";
    } else {
      status.innerHTML = strength;
      alert.style.display = display;
      status.style.color = color;
    }
  }

  function scrollbar() {
    const element = document.getElementById("myDIV");
    let bottom = document.getElementById("bot");
    let top = document.getElementById("to");
    let y = element.scrollTop;
    if (y.toFixed() == 0) {
      bottom.style.display = "";
      top.style.display = "none";
    } else {
      bottom.style.display = "none";
      top.style.display = "";
    }
  }

  function pilih_user() {
    document.getElementById("select").style.display = "";
    var jenis = document.getElementById("jenis").value;
    var petani = document.getElementById("petani");
    var pemerintah = document.getElementById("pemerintah");
    document.getElementById("up").style.display = "";
    document.getElementById("down").style.display = "none";
    if (jenis == petani.innerText) {
      petani.style.background = "#DDF1B0";
      pemerintah.style.background = "#FFFFFF";
    } else {
      pemerintah.style.background = "#DDF1B0";
      petani.style.background = "#FFFFFF";
    }
  }

  function hover(x) {
    var jenis = document.getElementById("jenis").value;
    if (jenis == x.innerText) {
      x.style.background = "#DDF1B0";
    } else {
      x.style.background = "#DCEBBA";
    }
  }

  function normal(x) {
    var jenis = document.getElementById("jenis").value;
    if (jenis == x.innerText) {
      x.style.background = "#DDF1B0";
    } else {
      x.style.background = "#FFFFFF";
    }
  }

  function pemerintah_terpilih() {
    var nilai = document.getElementById("pemerintah").innerText;
    document.getElementById("select").style.display = "none";
    document.getElementById("jenis").value = nilai;
    document.getElementById("ket_email").style.display = "none";
    document.getElementById("text_button").innerText = "Daftar";
    document.getElementById("ket_tombol").innerText = "Daftar";
    document.getElementById("down").style.display = "";
    document.getElementById("up").style.display = "none";
    document.getElementById("form").action = "index.html";
  }

  function petani_terpilih() {
    var nilai = document.getElementById("petani").innerText;
    document.getElementById("select").style.display = "none";
    document.getElementById("jenis").value = nilai;
    document.getElementById("ket_email").style.display = "";
    document.getElementById("text_button").innerText = "Lanjutkan";
    document.getElementById("ket_tombol").innerText = "Lanjutkan";
    document.getElementById("down").style.display = "";
    document.getElementById("up").style.display = "none";
    document.getElementById("form").action = "next.html";
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

  function button_hover1(x) {
    var button = document.getElementById("tombol");
    if (button.disabled == false) {
      x.style.background = "#6F9815";
    } else {
      x.style.background = "#BFBFBF";
    }
  }

  function button_normal1(x) {
    var button = document.getElementById("tombol");
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

  function button_pressed1(x) {
    var button = document.getElementById("tombol");
    if (button.disabled == false) {
      x.style.background = "#537210";
    } else {
      x.style.background = "#BFBFBF";
    }
  }

  function klik() {
    document.getElementById('button').click();
  }

  document.getElementById("pop-up").style.margin = "0 auto";