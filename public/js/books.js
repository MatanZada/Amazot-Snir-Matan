$(function () {
  $('[data-role="sendBtn"]').click(function () {
    let data = {
      name: $("[data-role='bookInput']").val(),
      publishDate: $("[data-role='dateInput']").val(),
      author: $("[data-role='authorInput']").val(),
      isInStock: $("[data-role='inStock']").prop("checked"),
    };
    $.post("/insertBooks", data, {
        data,
      },
      function () {
        // console.log(Object.values(data));
        $("#addBook").append(Object.entries(data));
        //style obj [snir]
      }
    );
  });

  $('[data-role="sendBtn"]').click(function () {
    $.ajax({
      url: '/books',
      type: 'GET',
      data: {
        'numberOfWords': 10
      },
      success: function (result) {
        console.log(result);
        document.getElementById("getAllBooks").textContent = JSON.stringify(
          result,
          undefined,
          2
        );
      },
    });
  });

  $('[data-role="sendBtn"]').click(function () {
    $.ajax({
      url: '/author/:authorId',
      type: 'GET',
      data: {
        'numberOfWords': 10
      },
      success: function (result) {
        console.log(result);
        document.getElementById("getAllBooks").textContent = JSON.stringify(
          result,
          undefined,
          2
        );
      },
    });
  });
});