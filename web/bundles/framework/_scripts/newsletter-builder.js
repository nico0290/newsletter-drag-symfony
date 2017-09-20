var compteur = 0;

$(function() { 
// Resize	
function resize(){
	$('.resize-height').height(window.innerHeight - 50);
	$('.resize-width').width(window.innerWidth - 250);
	//if(window.innerWidth<=1150){$('.resize-width').css('overflow','auto');}
	
	}
$( window ).resize(function() {resize();});
resize();

	
	
 
//Add Sections
$("#newsletter-builder-area-center-frame-buttons-add").hover(
  function() {
    $("#newsletter-builder-area-center-frame-buttons-dropdown").fadeIn(200);
  }, function() {
    $("#newsletter-builder-area-center-frame-buttons-dropdown").fadeOut(200);
  }
);

$("#newsletter-builder-area-center-frame-buttons-dropdown").hover(
  function() {
    $(".newsletter-builder-area-center-frame-buttons-content").fadeIn(200);
  }, function() {
    $(".newsletter-builder-area-center-frame-buttons-content").fadeOut(200);
  }
);


$("#add-header").hover(function() {
    $(".newsletter-builder-area-center-frame-buttons-content-tab[data-type='header']").show()
	$(".newsletter-builder-area-center-frame-buttons-content-tab[data-type='content']").hide()
	$(".newsletter-builder-area-center-frame-buttons-content-tab[data-type='footer']").hide()
  });
  
$("#add-content").hover(function() {
    $(".newsletter-builder-area-center-frame-buttons-content-tab[data-type='header']").hide()
	$(".newsletter-builder-area-center-frame-buttons-content-tab[data-type='content']").show()
	$(".newsletter-builder-area-center-frame-buttons-content-tab[data-type='footer']").hide()
  });
  
$("#add-footer").hover(function() {
    $(".newsletter-builder-area-center-frame-buttons-content-tab[data-type='header']").hide()
	$(".newsletter-builder-area-center-frame-buttons-content-tab[data-type='content']").hide()
	$(".newsletter-builder-area-center-frame-buttons-content-tab[data-type='footer']").show()
  });   
  
  
  
$(".newsletter-builder-area-center-frame-buttons-content-tab").hover(
  	function() {
	    $(this).append('<div class="newsletter-builder-area-center-frame-buttons-content-tab-add"><i class="fa fa-plus"></i>&nbsp;Insert</div>');
		$('.newsletter-builder-area-center-frame-buttons-content-tab-add').click(function() {

			compteur = compteur + 1;
			$("#newsletter-builder-area-center-frame-content").prepend($("#newsletter-preloaded-rows .sim-row[data-id='"+$(this).parent().attr("data-id")+"']").clone().attr('id',"unique"+compteur));
			// #unique"+compteur+"
			var link = prompt("Link", "www.explorimmo.com");
			var xhttp = new XMLHttpRequest();
			var title = "";
			xhttp.open("GET", "http://localhost:8888/newsletter-drag-symfony/web/app_dev.php/api?url="+link, true);
			xhttp.send();

			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					this.responseText;
					JSON.parse(this.responseText)['title'];
					JSON.parse(this.responseText)['chapo'];
					var title = JSON.parse(this.responseText)['title'];
					var chapo = JSON.parse(this.responseText)['chapo'];
					var image = JSON.parse(this.responseText)['image'];
					$("#unique"+compteur+" .sim-row-edit.title-header").html(title);
					$("#unique"+compteur+" .sim-row-edit.chapo-header").html(chapo);
					$("#unique"+compteur+" .sim-row-edit img").attr("src",image);
					$("#unique"+compteur+" .sim-row-edit.title-article").html(title);
					$("#unique"+compteur+" .sim-row-edit.chapo-article").html(chapo);
					$("#unique"+compteur+" .sim-row-edit image-article").attr("src",image);
				}
			};
			hover_edit();
			perform_delete();
            perform_change();
			$("#newsletter-builder-area-center-frame-buttons-dropdown").fadeOut(200);
		})
	}, function() {
    	$(this).children(".newsletter-builder-area-center-frame-buttons-content-tab-add").remove();
  	}
); 
  
  
//Edit
function hover_edit(){

$(".sim-row-edit.image-header").hover(
  function() {
    // $(this).append('<div class="sim-row-edit-hover"><i class ="fa fa-pencil" style="line-height:30px;"></i></div>');
    $(this).append('<div class="sim-row-edit-hover-image"><i class="fa fa-pencil" style="line-height:30px;"></i></div>');
	$(".sim-row-edit-hover-image").click(function(e) {e.preventDefault()})
	$(".sim-row-edit-hover-image i").click(function(e) {
	e.preventDefault();
	big_parent = $(this).parent().parent();
	
    if(big_parent.attr("data-type")=='image'){   
    
    $("#sim-edit-image .image").val(big_parent.children('img').attr("src"));
    $("#sim-edit-image").fadeIn(500);
    $("#sim-edit-image .sim-edit-box").slideDown(500);
    
    $("#sim-edit-image .sim-edit-box-buttons-save").click(function() {
      $(this).parent().parent().parent().fadeOut(500)
      $(this).parent().parent().slideUp(500)
      
      big_parent.children('img').attr("src",$("#sim-edit-image .image").val());

       });

    }
	});
  }, function() {
    $(this).children(".sim-row-edit-hover-image").remove();
  }
);

$(".sim-row-edit.image-article").hover(
  function() {
    // $(this).append('<div class="sim-row-edit-hover"><i class ="fa fa-pencil" style="line-height:30px;"></i></div>');
    $(this).append('<div class="sim-row-edit-hover-image"><i class="fa fa-pencil" style="line-height:30px;"></i></div>');
	$(".sim-row-edit-hover-image").click(function(e) {e.preventDefault()})
	$(".sim-row-edit-hover-image i").click(function(e) {
	e.preventDefault();
	big_parent = $(this).parent().parent();
	
    if(big_parent.attr("data-type")=='image'){   
    
    $("#sim-edit-image .image").val(big_parent.children('img').attr("src"));
    $("#sim-edit-image").fadeIn(500);
    $("#sim-edit-image .sim-edit-box").slideDown(500);
    
    $("#sim-edit-image .sim-edit-box-buttons-save").click(function() {
      $(this).parent().parent().parent().fadeOut(500)
      $(this).parent().parent().slideUp(500)
      
      big_parent.children('img').attr("src",$("#sim-edit-image .image").val());

       });

    }
	});
  }, function() {
    $(this).children(".sim-row-edit-hover-image").remove();
  }
);

$(".sim-row-edit.title-header").hover(
  function() {
    // $(this).append('<div class="sim-row-edit-hover"><i class ="fa fa-pencil" style="line-height:30px;"></i></div>');
    $(this).append('<div class="sim-row-edit-hover-title"><i class="fa fa-pencil" style="line-height:30px;"></i></div>');
	$(".sim-row-edit-hover-title").click(function(e) {e.preventDefault()})
	$(".sim-row-edit-hover-title i").click(function(e) {
	e.preventDefault();
	big_parent = $(this).parent().parent();
	
    if(big_parent.attr("data-type")=='title'){
    
    $("#sim-edit-title .title").val(big_parent.text());
    $("#sim-edit-title").fadeIn(500);
    $("#sim-edit-title .sim-edit-box").slideDown(500);
    
    $("#sim-edit-title .sim-edit-box-buttons-save").click(function() {
      $(this).parent().parent().parent().fadeOut(500)
      $(this).parent().parent().slideUp(500)
       
        big_parent.text($("#sim-edit-title .title").val());

        });

    }
	});
  }, function() {
    $(this).children(".sim-row-edit-hover-title").remove();
  }
);

$(".sim-row-edit.title-article").hover(
  function() {
    // $(this).append('<div class="sim-row-edit-hover"><i class ="fa fa-pencil" style="line-height:30px;"></i></div>');
    $(this).append('<div class="sim-row-edit-hover-title-article"><i class="fa fa-pencil" style="line-height:30px;"></i></div>');
	$(".sim-row-edit-hover-title-article").click(function(e) {e.preventDefault()})
	$(".sim-row-edit-hover-title-article i").click(function(e) {
	e.preventDefault();
	big_parent = $(this).parent().parent();
	
    if(big_parent.attr("data-type")=='title'){
    
    $("#sim-edit-title .title").val(big_parent.text());
    $("#sim-edit-title").fadeIn(500);
    $("#sim-edit-title .sim-edit-box").slideDown(500);
    
    $("#sim-edit-title .sim-edit-box-buttons-save").click(function() {
      $(this).parent().parent().parent().fadeOut(500)
      $(this).parent().parent().slideUp(500)
       
        big_parent.text($("#sim-edit-title .title").val());

        });

    }
	});
  }, function() {
    $(this).children(".sim-row-edit-hover-title-article").remove();
  }
);

$(".sim-row-edit.chapo-article").hover(
  function() {
    // $(this).append('<div class="sim-row-edit-hover"><i class ="fa fa-pencil" style="line-height:30px;"></i></div>');
    $(this).append('<div class="sim-row-edit-hover-chapo-article"><i class="fa fa-pencil" style="line-height:30px;"></i></div>');
	$(".sim-row-edit-hover-chapo-article").click(function(e) {e.preventDefault()})
	$(".sim-row-edit-hover-chapo-article i").click(function(e) {
	e.preventDefault();
	big_parent = $(this).parent().parent();
	
	//edit text
	if(big_parent.attr("data-type")=='text'){
	
	$("#sim-edit-text .text").val(big_parent.text());
	$("#sim-edit-text").fadeIn(500);
	$("#sim-edit-text .sim-edit-box").slideDown(500);
	
	$("#sim-edit-text .sim-edit-box-buttons-save").click(function() {
	  $(this).parent().parent().parent().fadeOut(500)
	  $(this).parent().parent().slideUp(500)
	   
	    big_parent.text($("#sim-edit-text .text").val());
		});
	}
	});
  }, function() {
    $(this).children(".sim-row-edit-hover-chapo-article").remove();
  }
);

$(".sim-row-edit.chapo-header").hover(
  function() {
    // $(this).append('<div class="sim-row-edit-hover"><i class ="fa fa-pencil" style="line-height:30px;"></i></div>');
    $(this).append('<div class="sim-row-edit-hover-chapo"><i class="fa fa-pencil" style="line-height:30px;"></i></div>');
	$(".sim-row-edit-hover-chapo").click(function(e) {e.preventDefault()})
	$(".sim-row-edit-hover-chapo i").click(function(e) {
	e.preventDefault();
	big_parent = $(this).parent().parent();
	
	//edit text
	if(big_parent.attr("data-type")=='text'){
	
	$("#sim-edit-text .text").val(big_parent.text());
	$("#sim-edit-text").fadeIn(500);
	$("#sim-edit-text .sim-edit-box").slideDown(500);
	
	$("#sim-edit-text .sim-edit-box-buttons-save").click(function() {
	  $(this).parent().parent().parent().fadeOut(500)
	  $(this).parent().parent().slideUp(500)
	   
	    big_parent.text($("#sim-edit-text .text").val());
		});
	}
	});
  }, function() {
    $(this).children(".sim-row-edit-hover-chapo").remove();
  }
);
}
hover_edit();


//close edit
$(".sim-edit-box-buttons-cancel").click(function() {
  $(this).parent().parent().parent().fadeOut(500)
   $(this).parent().parent().slideUp(500)
});
   


//Drag & Drop
$("#newsletter-builder-area-center-frame-content").sortable({
  revert: true
});
	

$(".sim-row").draggable({
      connectToSortable: "#newsletter-builder-area-center-frame-content",
      //helper: "clone",
      revert: "invalid",
	  handle: ".sim-row-move"
});



//Delete
function add_delete(){
	$(".sim-row").append('<div class="sim-row-delete"><i class="fa fa-times" ></i></div>');
	
	}
add_delete();


function perform_delete(){
$(".sim-row-delete").click(function() {
  $(this).parent().remove();
});
}
perform_delete();

//Change
function add_change(){
	$(".sim-row").append('<div class="sim-row-change"><i class="fa fa-pencil" ></i></div>');
	}
add_change();

function perform_change(){
    $(".sim-row-change").click(function() {
        var id_select = ($(this).parent())[0].id;
        var link = prompt("Link", "www.explorimmo.com");
        var xhttp = new XMLHttpRequest();
        var title = "";
        xhttp.open("GET", "http://localhost:8888/newsletter-drag-symfony/web/app_dev.php/api?url="+link, true);
        xhttp.send();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                this.responseText;
                JSON.parse(this.responseText)['title'];
                JSON.parse(this.responseText)['chapo'];
                var title = JSON.parse(this.responseText)['title'];
                var chapo = JSON.parse(this.responseText)['chapo'];
                var image = JSON.parse(this.responseText)['image'];
                $("#"+id_select+" .sim-row-edit.title-header").html(title);
                $("#"+id_select+" .sim-row-edit.chapo-header").html(chapo);
                $("#"+id_select+" .sim-row-edit img").attr("src",image);
                $("#"+id_select+" .sim-row-edit.title-article").html(title);
                $("#"+id_select+" .sim-row-edit.chapo-article").html(chapo);
                $("#"+id_select+" .sim-row-edit image-article").attr("src",image);
            }
        };
        hover_edit();
        perform_delete();
        $("#newsletter-builder-area-center-frame-buttons-dropdown").fadeOut(200);
    });
}
perform_change();


//Download
 $("#newsletter-builder-sidebar-buttons-abutton").click(function(){
	 
	$("#newsletter-preloaded-export").html($("#newsletter-builder-area-center-frame-content").html());
	$("#newsletter-preloaded-export .sim-row-delete").remove();
	$("#newsletter-preloaded-export .sim-row").removeClass("ui-draggable");
	$("#newsletter-preloaded-export .sim-row-edit").removeAttr("data-type");
	$("#newsletter-preloaded-export .sim-row-edit").removeClass("sim-row-edit");
	
	export_content = $("#newsletter-preloaded-export").html();
	
	$("#export-textarea").val(export_content)
	$( "#export-form" ).submit();
	$("#export-textarea").val(' ');
	 
});
	 
	 
//Export 
$("#newsletter-builder-sidebar-buttons-bbutton").click(function(){
	
	$("#sim-edit-export").fadeIn(500);
	$("#sim-edit-export .sim-edit-box").slideDown(500);
	
	$("#newsletter-preloaded-export").html($("#newsletter-builder-area-center-frame-content").html());
	$("#newsletter-preloaded-export .sim-row-delete").remove();
	$("#newsletter-preloaded-export .sim-row").removeClass("ui-draggable");
	$("#newsletter-preloaded-export .sim-row-edit").removeAttr("data-type");
	$("#newsletter-preloaded-export .sim-row-edit").removeClass("sim-row-edit");
	
	preload_export_html = $("#newsletter-preloaded-export").html();
	$.ajax({
	  url: "_css/newsletter.css"
	}).done(function(data) {

	
export_content = '<style>'+data+'</style><link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900,200italic,300italic,400italic,600italic,700italic,900italic" rel="stylesheet" type="text/css"><link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"><div id="sim-wrapper"><div id="sim-wrapper-newsletter">'+preload_export_html+'</div></div>';
	
	$("#sim-edit-export .text").val(export_content);
	
	
	});
	
	
	
	$("#newsletter-preloaded-export").html(' ');
	
	});




});
