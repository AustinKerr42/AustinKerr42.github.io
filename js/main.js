$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#home']").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            // (900) ms to scroll to selected section
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){
                window.location.hash = hash;
            });
        }
    });

    // Slide up content when scrolling down the page
    $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });

    // Toggle expanded paragraphs and button text
    $(".workToggle").click(function(){
        $(this).parent().next().toggle(750);
        if($(this).text() == 'More'){
            $(this).text('Less');
        } else {
            $(this).text('More');
        }
    });
});