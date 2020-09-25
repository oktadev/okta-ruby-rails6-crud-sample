document.addEventListener("DOMContentLoaded", async function () {
    var response = await fetch(`${process.env.OKTA_URL}/api/v1/users/me`, {
      credentials: "include",
      method: "get",
      headers: { "Content-Type": "application/json" }
    });
  
    var userdata = await response.json();
    console.log(userdata.profile);
    document.getElementById("gemname").value = userdata.profile.gemstone
    var wordInput = document.getElementById("gemname");
    var form_el = document.getElementById("accountForm");
    form_el.addEventListener("submit", function (evt) {
      evt.preventDefault();
      submitData();
    });
  
    function submitData() {
      console.log("do something with " + wordInput.value);
      var body = {
        profile: {
          gemstone: wordInput.value,
        },
      };
      fetch(`${process.env.OKTA_URL}/api/v1/users/me`, {
        credentials: "include",
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then((response) => {
        console.log(response);
        if(response.status == 200) {
          window.location.reload()
        }
      });
    }
  });