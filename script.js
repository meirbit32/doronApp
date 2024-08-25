
        $(document).ready(function () {
            $(window).on("resize", function(){
                if($(window).width() >= 764) {
                    $(".nav-list").css("display", "flex")
                } 
            })
            $(".material-symbols-outlined").on("click", function(event){
                event.preventDefault()
                $(".nav-list-toogle").toggle();
            })
        })









