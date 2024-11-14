function handleClick() {
    if ($(".piece.click").length > 2) {
        return;
    }
    if ($(this).hasClass("done")) {
        return;
    }
    $(this).addClass("click");
    $(this).children().attr("style", "display:block");

    var pc = $(".piece.click");
    if (pc.length === 2) {
        setTimeout(function() {
            checkimg(pc);
            let imageId = $(pc[0]).find("img").attr("src");
            $.ajax({
                url: "/click",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({ image_id: imageId, token: randomToken }),
                success: function(response) {
                    console.log(response);
                },
                error: function(xhr, status, error) {
                    console.error("Error:", xhr.responseText);
                }
            });
        }, 500);
    }
}
