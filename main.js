$(document).ready(() => {
  let errorMessages = $(".error-message");
  let errorIcons = $(".icon");
  var regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gim;
  $("#my-form").submit((e) => {
    e.preventDefault();

    // inputs
    let firstName = $("#first-name");
    let lastName = $("#last-name");
    let emailAddress = $("#email");
    let password = $("#password");

    if (firstName.val() == "") {
      $(firstName).attr("placeholder", "");
      $(firstName).css("outline", "2px solid hsl(0, 100%, 74%)");
      $(errorMessages).eq(0).css("display", "initial");
      $(errorIcons).eq(0).css("display", "initial");
    } else {
      $(firstName).attr("placeholder", "First Name");
      $(firstName).css("outline", "1px solid hsl(246, 25%, 77%)");
      $(errorMessages).eq(0).css("display", "none");
      $(errorIcons).eq(0).css("display", "none");
    }

    if (lastName.val() == "") {
      $(lastName).attr("placeholder", "");
      $(lastName).css("outline", "2px solid hsl(0, 100%, 74%)");
      $(errorMessages).eq(1).css("display", "initial");
      $(errorIcons).eq(1).css("display", "initial");
    } else {
      $(lastName).attr("placeholder", "Last Name");
      $(lastName).css("outline", "1px solid hsl(246, 25%, 77%)");
      $(errorMessages).eq(1).css("display", "none");
      $(errorIcons).eq(1).css("display", "none");
    }

    if (emailAddress.val() == "") {
      $(emailAddress).attr("placeholder", "");
      $(emailAddress).css("color", "hsl(0, 100%, 74%)");
      $(emailAddress).css("outline", "2px solid hsl(0, 100%, 74%)");
      $(errorMessages)
        .eq(2)
        .css("display", "initial")
        .text("Email cannot be empty");
      $(errorIcons).eq(2).css("display", "initial");
    } else {
      if (!emailAddress.val().match(regexEmail)) {
        $(emailAddress).attr("placeholder", "");
        $(emailAddress).css("color", "hsl(0, 100%, 74%)");
        $(emailAddress).css("outline", "2px solid hsl(0, 100%, 74%)");
        $(errorMessages)
          .eq(2)
          .css("display", "initial")
          .text("Looks like this is not an email");

        $(errorIcons).eq(2).css("display", "initial");
      } else {
        $(emailAddress).attr("placeholder", "Email Address");
        $(emailAddress).css("color", "hsl(249, 10%, 26%)");
        $(emailAddress).css("outline", "1px solid hsl(246, 25%, 77%)");
        $(errorMessages).eq(2).css("display", "none");
        $(errorIcons).eq(2).css("display", "none");
      }
    }

    if (password.val() == "") {
      $(password).attr("placeholder", "");
      $(password).css("outline", "2px solid hsl(0, 100%, 74%)");
      $(errorMessages).eq(3).css("display", "initial");
      $(errorIcons).eq(3).css("display", "initial");
    } else {
      $(password).attr("placeholder", "Password");
      $(password).css("outline", "1px solid hsl(246, 25%, 77%)");
      $(errorMessages).eq(3).css("display", "none");
      $(errorIcons).eq(3).css("display", "none");
    }
  });
});
