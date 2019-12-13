$(document).ready(function () {
    setColors();

    for (var i = 9; i < 18; i++) {
        var id = i + "thHour";
        var description = localStorage.getItem(id);
        $("#" + id).val(description);
    }

    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var hourId = $(this).attr("name");
        var hourStr = "#" + hourId;
        var task = $(hourStr).val();
        localStorage.setItem(hourId, task);
    });
})