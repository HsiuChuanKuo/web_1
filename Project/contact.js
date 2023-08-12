window.onload = function () {
    const form = document.querySelector('form');
    form.onsubmit = function (event) {
      event.preventDefault();
      if (validateForm()) {
        alert("Thanks for registering with our website, your customer record was created successfully.");
        form.reset();
      }
    };
  };
  
  function validateForm() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const postal_code = document.getElementById("postal_code").value;
    const province = document.getElementById("province").value;
    const age = document.getElementById("age").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const email = document.getElementById("email").value;
  
    // Regular expression patterns
    const postalCodePattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    const provincePattern = /^(QC|ON|MN|SK|AB|BC)$/;
    const agePattern = /^\d+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (name === '' || phone === '' || address === '' || city === '' || postal_code === '' || province === '' || age === '' || password === '' || confirm === '' || email === '') {
      alert("All fields are mandatory and cannot be left blank.");
      return false;
    }
  
    if (!postalCodePattern.test(postal_code)) {
      alert("Postal code must be in the a0a0a0 format.");
      return false;
    }
  
    if (!provincePattern.test(province)) {
      alert("Province must be one of QC, ON, MN, SK, AB, BC.");
      return false;
    }
  
    if (!agePattern.test(age) || parseInt(age) < 18) {
      alert("Age must be at least 18 years old.");
      return false;
    }
  
    if (!emailPattern.test(email)) {
      alert("Invalid email format.");
      return false;
    }
  
    if (password !== confirm) {
      alert("Passwords do not match.");
      return false;
    }
  
    if (!passwordPattern.test(password)) {
      alert("Passwords must have at least 6 characters, one digit, and one uppercase character.");
      return false;
    }
  
    return true;
  }
  
  function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("postal_code").value = "";
    document.getElementById("province").value = "";
    document.getElementById("age").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm").value = "";
    document.getElementById("email").value = "";
  }
  