for (var i = 0; i<6; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "purple";
    });
}

$("button").click(function () {
    $("h1").css("color", "purple");
})