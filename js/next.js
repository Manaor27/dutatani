function scrollbar() {
    const element = document.getElementById("myDIV");
    let bottom = document.getElementById("bot");
    let top = document.getElementById("to");
    let y = element.scrollTop;
    if (y.toFixed() == 0) {
      bottom.style.display = "block";
      top.style.display = "none";
    } else {
      bottom.style.display = "none";
      top.style.display = "block";
    }
  }

  function myEmptyPetani() {
    let kota = document.getElementById("kota").value;
    let kecamatan = document.getElementById("kecamatan").value;
    let desa = document.getElementById("desa").value;
    let alamat = document.getElementById("alamat").value;
    var button = document.getElementById("button");
    var tombol = document.getElementById("tombol");

    filterKota();
    filterKecamatan();
    filterDesa();

    if (kota!="" && kecamatan!="" && desa!="" && alamat!="") {
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

  function filterKota() {
    var input, filter, a, i;
    input = document.getElementById("kota");
    filter = input.value.toUpperCase();
    div = document.getElementById("select_kota");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  const kota = [];
  $.getJSON('js/kota.json', function (data) {
    $.each(data, function (key,value) {
      kota.push(value);
    })
  })

  function pilih_kota() {
    document.getElementById("select_kota").style.display = "";
    document.getElementById("up_kota").style.display = "";
    document.getElementById("down_kota").style.display = "none";
    var data = "";
    for (let i = 0; i < kota.length; i++) {
      data += "<a class=\"flex flex-row items-start gap-2 w-96 h-12 flex-none grow-0 cursor-pointer\" onmouseover=\"hover_kota(this)\" onmouseout=\"normal_kota(this)\" style=\"padding: 14px 16px;\" id=\""+ kota[i].id +"\" onclick=\"kota_terpilih(this)\"><p class=\"h-5 font-normal text-sm flex items-center flex-none order-none grow-0\" style=\"width: 302px;font-family: 'Inter';color: #151E03;\">" + kota[i].name + "</p></a>";
    }
    document.getElementById("select_kota").innerHTML = data;
    document.getElementById("icon_kecamatan").classList.add("hidden");
    document.getElementById("icon_desa").classList.add("hidden");
  }

  function validasi_kota() {
    var form = document.getElementById("form");
    var city = document.getElementById("kota").value;
    var name = document.getElementById("kota");
    var title = document.getElementById("title_kota");
    var text = document.getElementById("error_kota");
    
    if (kota.includes(city) === true) {
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

    if (city === "") {
      form.classList.remove("valid");
      form.classList.remove("invalid");
      text.style.display = "none";
      name.classList.add("focus:ring-lime-500");
      name.classList.remove("focus:ring-red-500");
      title.style.color = "#151E03";
    }
  }

  function kota_terpilih(x) {
    var nilai = x.innerText;
    var name = document.getElementById("kota");
    var title = document.getElementById("title_kota");
    var text = document.getElementById("error_kota");
    document.getElementById("select_kota").style.display = "none";
    document.getElementById("kota").value = nilai;
    document.getElementById("id_kota").value = x.id;
    document.getElementById("down_kota").style.display = "";
    document.getElementById("up_kota").style.display = "none";
    text.style.display = "none";
    name.classList.add("focus:ring-lime-500");
    name.classList.remove("focus:ring-red-500");
    title.style.color = "#151E03";
    document.getElementById("icon_kecamatan").classList.remove("hidden");
    document.getElementById("icon_desa").classList.remove("hidden");
  }

  function hover_kota(x) {
    var jenis = document.getElementById("kota").value;
    if (jenis == x.innerText) {
      x.style.background = "#DDF1B0";
    } else {
      x.style.background = "#DCEBBA";
    }
  }

  function normal_kota(x) {
    var jenis = document.getElementById("kota").value;
    if (jenis == x.innerText) {
      x.style.background = "#DDF1B0";
    } else {
      x.style.background = "#FFFFFF";
    }
  }

  function filterKecamatan() {
    var input, filter, a, i;
    input = document.getElementById("kecamatan");
    filter = input.value.toUpperCase();
    div = document.getElementById("select_kecamatan");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  const kecamatan = [];
  $.getJSON('js/kecamatan.json', function (data) {
    $.each(data, function (key,value) {
      kecamatan.push(value);
    })
  })

  function pilih_kecamatan() {
    var data = "";
    for (let i = 0; i < kecamatan.length; i++) {
      if (kecamatan[i].regency_id == document.getElementById("id_kota").value) {
        data += "<a class=\"flex flex-row items-start gap-2 w-96 h-12 flex-none grow-0 cursor-pointer\" onmouseover=\"hover_kecamatan(this)\" onmouseout=\"normal_kecamatan(this)\" style=\"padding: 14px 16px;\" id=\""+ kecamatan[i].id +"\" onclick=\"kecamatan_terpilih(this)\"><p class=\"h-5 font-normal text-sm flex items-center flex-none order-none grow-0\" style=\"width: 302px;font-family: 'Inter';color: #151E03;\">" + kecamatan[i].name + "</p></a>";
      }
    }
    if (data == "") {
      document.getElementById("select_kecamatan").style.display = "none";
      document.getElementById("up_kecamatan").style.display = "none";
    document.getElementById("down_kecamatan").style.display = "";
    } else {
      document.getElementById("select_kecamatan").style.display = "";
      document.getElementById("up_kecamatan").style.display = "";
      document.getElementById("down_kecamatan").style.display = "none";
      document.getElementById("icon_desa").classList.add("hidden");
    }
    document.getElementById("select_kecamatan").innerHTML = data;
  }

  function validasi_kecamatan() {
    var form = document.getElementById("form");
    var camat = document.getElementById("kecamatan").value;
    var name = document.getElementById("kecamatan");
    var title = document.getElementById("title_kecamatan");
    var text = document.getElementById("error_kecamatan");
    
    if (kecamatan.includes(camat) === true) {
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

    if (camat === "") {
      form.classList.remove("valid");
      form.classList.remove("invalid");
      text.style.display = "none";
      name.classList.add("focus:ring-lime-500");
      name.classList.remove("focus:ring-red-500");
      title.style.color = "#151E03";
    }
  }

  function kecamatan_terpilih(x) {
    var nilai = x.innerText;
    var name = document.getElementById("kecamatan");
    var title = document.getElementById("title_kecamatan");
    var text = document.getElementById("error_kecamatan");
    document.getElementById("select_kecamatan").style.display = "none";
    document.getElementById("kecamatan").value = nilai;
    document.getElementById("id_kecamatan").value = x.id;
    document.getElementById("down_kecamatan").style.display = "";
    document.getElementById("up_kecamatan").style.display = "none";
    text.style.display = "none";
    name.classList.add("focus:ring-lime-500");
    name.classList.remove("focus:ring-red-500");
    title.style.color = "#151E03";
    document.getElementById("icon_desa").classList.remove("hidden");
  }

  function hover_kecamatan(x) {
    var jenis = document.getElementById("kecamatan").value;
    if (jenis == x.innerText) {
      x.style.background = "#DDF1B0";
    } else {
      x.style.background = "#DCEBBA";
    }
  }

  function normal_kecamatan(x) {
    var jenis = document.getElementById("kecamatan").value;
    if (jenis == x.innerText) {
      x.style.background = "#DDF1B0";
    } else {
      x.style.background = "#FFFFFF";
    }
  }

  function filterDesa() {
    var input, filter, a, i;
    input = document.getElementById("desa");
    filter = input.value.toUpperCase();
    div = document.getElementById("select_desa");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  const desa = [];
  $.getJSON('js/desa.json', function (data) {
    $.each(data, function (key,value) {
      desa.push(value);
    })
  })

  function pilih_desa() {
    var data = "";
    for (let i = 0; i < desa.length; i++) {
      if (desa[i].district_id == document.getElementById("id_kecamatan").value) {
        data += "<a class=\"flex flex-row items-start gap-2 w-96 h-12 flex-none grow-0 cursor-pointer\" onmouseover=\"hover_desa(this)\" onmouseout=\"normal_desa(this)\" style=\"padding: 14px 16px;\" id=\""+ desa[i].id +"\" onclick=\"desa_terpilih(this)\"><p class=\"h-5 font-normal text-sm flex items-center flex-none order-none grow-0\" style=\"width: 302px;font-family: 'Inter';color: #151E03;\">" + desa[i].name + "</p></a>";
      }
    }
    if (data == "") {
      document.getElementById("select_desa").style.display = "none";
      document.getElementById("up_desa").style.display = "none";
      document.getElementById("down_desa").style.display = "";
    } else {
      document.getElementById("select_desa").style.display = "";
      document.getElementById("up_desa").style.display = "";
      document.getElementById("down_desa").style.display = "none";
    }
    document.getElementById("select_desa").innerHTML = data;
  }

  function validasi_desa() {
    var form = document.getElementById("form");
    var village = document.getElementById("desa").value;
    var name = document.getElementById("desa");
    var title = document.getElementById("title_desa");
    var text = document.getElementById("error_desa");
    
    if (desa.includes(village) === true) {
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

    if (village === "") {
      form.classList.remove("valid");
      form.classList.remove("invalid");
      text.style.display = "none";
      name.classList.add("focus:ring-lime-500");
      name.classList.remove("focus:ring-red-500");
      title.style.color = "#151E03";
    }
  }

  function desa_terpilih(x) {
    var nilai = x.innerText;
    var name = document.getElementById("desa");
    var title = document.getElementById("title_desa");
    var text = document.getElementById("error_desa");
    document.getElementById("select_desa").style.display = "none";
    document.getElementById("desa").value = nilai;
    document.getElementById("id_desa").value = x.id;
    document.getElementById("down_desa").style.display = "";
    document.getElementById("up_desa").style.display = "none";
    text.style.display = "none";
    name.classList.add("focus:ring-lime-500");
    name.classList.remove("focus:ring-red-500");
    title.style.color = "#151E03";
  }

  function hover_desa(x) {
    var jenis = document.getElementById("desa").value;
    if (jenis == x.innerText) {
      x.style.background = "#DDF1B0";
    } else {
      x.style.background = "#DCEBBA";
    }
  }

  function normal_desa(x) {
    var jenis = document.getElementById("desa").value;
    if (jenis == x.innerText) {
      x.style.background = "#DDF1B0";
    } else {
      x.style.background = "#FFFFFF";
    }
  }

  if (screen.availHeight >= 940) {
    document.getElementById("bot").style.display = "none";
  }

  document.getElementById("up_kota").addEventListener("click", tutup_kota);
  document.getElementById("down_kota").addEventListener("click", pilih_kota);

  function tutup_kota() {
    document.getElementById("select_kota").style.display = "none";
    document.getElementById("down_kota").style.display = "";
    document.getElementById("up_kota").style.display = "none";
    document.getElementById("icon_kecamatan").classList.remove("hidden");
    document.getElementById("icon_desa").classList.remove("hidden");
  }

  document.getElementById("up_kecamatan").addEventListener("click", tutup_kecamatan);
  document.getElementById("down_kecamatan").addEventListener("click", pilih_kecamatan);

  function tutup_kecamatan() {
    document.getElementById("select_kecamatan").style.display = "none";
    document.getElementById("down_kecamatan").style.display = "";
    document.getElementById("up_kecamatan").style.display = "none";
    document.getElementById("icon_desa").classList.remove("hidden");
  }

  document.getElementById("up_desa").addEventListener("click", tutup_desa);
  document.getElementById("down_desa").addEventListener("click", pilih_desa);

  function tutup_desa() {
    document.getElementById("select_desa").style.display = "none";
    document.getElementById("down_desa").style.display = "";
    document.getElementById("up_desa").style.display = "none";
  }