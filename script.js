
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
                $(".nav-list").toggleClass("nav-list-toogle");
            })
            var maxLength = 50;
            $(".read-more-content").each(function(){
                var myStr = $(this).text();
                if($.trim(myStr).length > maxLength) {
                    var newStr = myStr.substring(0, maxLength)
                    var removedStr = myStr.substring(maxLength, $.trim(myStr).length)
                    $(this).empty().html(newStr + '...');
                    $(this).append('<span class=more-text style="display: none;">' + removedStr + '</span');
                    $(this).append('<a href"=javascript:void(0);" class="read-more">קרא עוד</a>');
                }
            })

            $(".read-more").click(function(){
                var $this = $(this);
                var $content = $this.siblings(".more-text");
                console.log($content)
                if($content.is(":visible")){
                    $content.hide();
                    $('.expl-item').removeClass("over-flow-add")
                    $this.text("קרא עוד");
                } else {
                    $content.show();
                    $('.expl-item').addClass("over-flow-add")
                    $this.text("קרא פחות");
                }
            })

            const imageUrls = Array.from({length:30},(_,i) =>{
                const paddedNumber = String(i).padStart(2, '0');
                return `./media/pictures/IMG-20230620-WA00${paddedNumber}.jpg`;
            });

            let currentIndex = 0;
            const imagesPerLoad = 10;
            let isLoading = false;

            // Add loading indicator
    const $loadingIndicator = $('<div id="loading-indicator">Loading...</div>').hide();
    $('#image-container').after($loadingIndicator);

    function showLoading() {
        $loadingIndicator.show();
    }

    function hideLoading() {
        $loadingIndicator.hide();
    }

    function loadSingleImage(url) {
        return new Promise((resolve) => {
            const $img = $('<img>', { 
                alt: 'load',
                style: 'display: none;' // Hide image initially
            });
            const tempImg = new Image(); 
            
            tempImg.onload = function() {
                $img.attr('src', url);
                
                $('#image-container').append($img);
                $img.fadeIn(200, function() {
                    resolve({ success: true });
                });
            };
            
            tempImg.onerror = function() {
                console.log(`Image ${url} does not exist`);
                resolve(false);
            };
            
            
            
            tempImg.src = url;
        });
    }

    async function loadImages() {
        if (isLoading || currentIndex >= imageUrls.length) return;
        isLoading = true;
        
        showLoading(); // Show loading indicator

        let loadedCount = 0;
        
        while(loadedCount < imagesPerLoad && currentIndex < imageUrls.length) {
            const loaded = await loadSingleImage(imageUrls[currentIndex]);
            if (loaded) loadedCount++;
            currentIndex++;
        }
        
        hideLoading(); // Hide loading indicator
        isLoading = false;
    }

    // Initial load
    loadImages();

    // Load more images when scrolling to the bottom
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
            loadImages();
        }
    });
});









