$(function () {
    $('[data-role="sendBtn"]').click(function () {
        let data = {
            name: $('[data-role="authorInput"]').val(),
            adress: $('[data-role="authorAdressInput"]').val(),
            phone: $('[data-role="authorPhoneInput"]').val(),
            birthday: $('[data-role="isAlive"]').prop("checked"),
        };
        $.post("/insertAuthor", data, {
                data,
            },
            function () {
                // console.log(Object.values(data));
                $("#addAuthor").append(Object.entries(data));
                //style obj [snir]
            }
        );
    });

    $('[data-role="sendBtn"]').click(function () {
        $.ajax({
            url: '/author',
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