$(document).ready(function(){
    
    $("#n").hover(function(){
        $(this).css("color", "black");
        }, function(){
        $(this).css("color", "grey");
    });

    $("#h").hover(function(){
        $(this).css("color", "black");
        }, function(){
        $(this).css("color", "grey");
    });

    $("#l").hover(function(){
        $(this).css("color", "black");
        }, function(){
        $(this).css("color", "grey");
    });

    $("#d").hover(function(){
        $(this).css("color", "black");
        }, function(){
        $(this).css("color", "grey");
    });

    $("#ds").hover(function(){
        $(this).css("color", "black");
        }, function(){
        $(this).css("color", "grey");
    });

    $("#iconhelp").hover(function(){
        $(this).css("color", "black");
        }, function(){
        $(this).css("color", "grey");
    });


    $("#iconhelp").click(function(){
        $(".dropthis").toggle("slow")
        $(".dropthis").css("display","inline-block")
    });

	$('input[type="button"]').hover(function(){
            if(!$(this).hasClass('green'))
          		$(this).addClass('green');
    		else
          		$(this).removeClass('green');
    });

    $("#d").click(()=>{
    	$("#dc").toggle("slow");
    	$("#dc").css("display","block")
    })

    $("#dt").click(()=>{
    	$("#dtt").toggle("slow");
    	$("#dtt").css("display","block")
    })

    $(window).on('resize', function(){
      var win = $(this);
      if (win.width() >= 680) {
      	$(".dropthis").css("display","none");
      }
});
    
});
