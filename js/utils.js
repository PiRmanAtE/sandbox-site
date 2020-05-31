// (function () {
//   $("form#form :input").keyup(function () {
//     let empty = false;
//     $("form#form input[type=text]").each(function () {
//       if ($(this).val() == "") {
//         empty = true;
//       }
//     });

//     if (empty) {
//       $("#submit-btn").attr("disabled", "disabled");
//     } else {
//       $("#submit-btn").removeAttr("disabled");
//     }
//   });
// })();

$("#form").trigger("reset");
$(function () {
  "use strict";
  $("#form").on("submit", function (e) {
    e.preventDefault();
    $.ajax({
      url: "mail.php",
      type: "POST",
      contentType: false,
      processData: false,
      data: new FormData(this),
      success: function (msg) {
        if (msg === "ok") {
          alert("Сообщение отправлено");
          $("#form").trigger("reset"); // очистка формы
        //   $("#submit-btn").attr("disabled", "disabled");
          //   $("#myModal").modal();
        } else {
          alert("Ошибка");
        }
      },
    });
  });
});

$( document ).ready(function() {
    $("input[name='phone']").mask("+7(999) 999-99-99");
});