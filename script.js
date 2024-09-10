
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
            var maxLength = 50;
            $(".read-more-content").each(function(){
                var myStr = $(this).text();
                if($.trim(myStr).length > maxLength) {
                    var newStr = myStr.substring(0, maxLength)
                    var removedStr = myStr.substring(maxLength, $.trim(myStr).length)
                    $(this).empty().html(newStr + '...');
                    $(this).append('<span class=more-text>' + removedStr + '</span');
                    $(this).append('<a href"=javascript:void(0);" class="read-more">Read More</a>');
                }
            })

            $(".read-more").click(function(){
                var $this = $(this);
                var $content = $this.siblings(".more-text");
                if($content.is(":visible")){
                    $content.hide();
                    $this.text("Read More");
                } else {
                    $content.show();
                    $this.text("Read Less");
                }
            })
        })









