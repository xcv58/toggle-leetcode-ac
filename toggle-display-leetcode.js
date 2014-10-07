(
    function()
    {
        // var color = $( ".notac" ).css("background-color");
        // if (color == "rgb(255, 255, 0)") {
        //     $( ".notac" ).css("background-color", "");
        // } else {
        //     $( ".notac" ).css("background-color", "yellow");
        // }

        var current = $( ".ac" ).parent().parent().css("display");
        if (current == "none") {
            $( ".ac" ).parent().parent().css("display", "");
        } else {
            $( ".ac" ).parent().parent().css("display", "none");
        }
        return;
    }
)();
