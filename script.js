
        $(document).ready(function () {
            $(window).on("resize", function(){
                if($(window).width() >= 764) {
                    $(".nav-list").css("display", "flex")
                } else{
                    $(".nav-list").css("display", "none")
                }
            })
            $(".material-symbols-outlined").on("click", function(event){
                event.preventDefault()
                $(".nav-list-toogle").toggle();
            })
        })









