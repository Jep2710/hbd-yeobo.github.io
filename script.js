$(document).ready(function() {
    setTimeout(() => {
        $(".push__box:nth-child(1)").slideDown(400);
    }, 1000);
    setTimeout(() => {
        $(".push__box:nth-child(2)").slideDown(400);
    }, 2000);
    setTimeout(() => {
        $(".push__box:nth-child(3)").slideDown(400);
    }, 3000);
    setTimeout(() => {
        $(".push__box:nth-child(4)").slideDown(400);
    }, 4000);
});

document.getElementById("openPopup").addEventListener("click", function() {
            document.getElementById("myPopup").style.display = "block";
            document.getElementById("overlay").style.display = "block";
        });
        // Close the popup if the user clicks anywhere outside of it
        window.addEventListener("click", function(event) {
            if (event.target == document.getElementById("overlay")) {
                document.getElementById("myPopup").style.display = "none";
                document.getElementById("overlay").style.display = "none";
                document.getElementById("push_button").style.display = "none";
                document.getElementById("info__padding").style.display = "none";
                document.getElementById("card").style.display = "none";
            }
        });
