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

    //Local day and time function

    setInterval(function () {
        $("#currentDay").text(moment().format("MMMM DD, YYYY hh:mm:ss"))
        setColors();
    }, 1000);

    function setColors() {
        for (var i = 9; i < 18; i++) {
            var h = moment().hour();
            var id = "hour" + i;

            if (h === i) {
                $(i + "#thHour").attr("style", "background-color: red");
                $("#hour" + i).attr("style", "background-color: red");
            }
            else if (h > i) {
                $(i + "#thHour").attr("style", "background-color: gray");
                $("#hour" + i).attr("style", "background-color:gray");
            }
            else {
                $(i + "#thHour").attr("style", "background-color: lightBlue");
                $("#hour" + i).attr("style", "background-color: lightBlue");
            }
        }
    }
})