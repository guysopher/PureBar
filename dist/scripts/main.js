function loadIngredients(){var a=$(".bf_gallery_wrapper"),b='<div class="bf_gallery_item"><div class="bf_heading"><h2></h2></div><div class="bf_desc"><p></p></div><img class="bf_gallery_item_image" /></div>',c=$("#bf_dishes"),d='<li><a href="#"><div class="bf_dishes_bg"></div></a></li>',e={Almonds:"Fabulous source of vitamin E, fiber, fatty acids, calcium, magnesium, phosphorous and antioxidants.",Apples:"Good source of vitamins A, B and C and riboflavin, pectin and boron.",Beets:"Excellent source of vitamin A, potassium and the enzyme betaine.",Ginger:"A good source of Vitamin C, magnesium, copper, potassium, and manganese.",Honey:"Honey contains flavonoids, which are powerful antioxidants.",Kale:"Excellent antioxidant source of Vitamins A and C, iron, folic acid, calcium and potassium.",Carrots:"Rich in Vitamins A, B and C, antioxidants, calcium, potassium and sodium.",Lemon:"High in vitamin C and limonene.",Celery:"A good source of vitamins A, B6, C and K, calcium, magnesium and phosphorous.",Nutmeg:"This super spice is a good source of copper, magnesium, iron, phosphorous and B vitamins.",Cinnamon:"This super spice has vitamin K, iron and calcium.",Parsley:"One of the richest sources of vitamin C.",Clove:"Another super spice, cloves have vitamins C, E and K, calcium, iron and magnesium.","Purple Cabbage":"A great source of choline and high in vitamin E.",Cucumber:"A source of vitamin A, potassium, and iron.",Spinach:"High in vitamins E, A and C, calcium, iron, potassium, protein, choline, folic acid, and lutein."};for(var f in e){var g=f.toLowerCase().replace(" ","_");previewItem=$(d),previewItem.find(".bf_dishes_bg").css("background-image","url(images/ingredients/"+g+".jpg)").attr("title",f),c.append(previewItem),galleryItem=$(b),galleryItem.find(".bf_heading h2").html(f),galleryItem.find(".bf_desc p").html(e[f]),galleryItem.find(".bf_gallery_item_image").attr("src","images/ingredients/"+g+".jpg").attr("data-bgimg","images/ingredients/"+g+".jpg"),a.append(galleryItem)}}$(function(){loadIngredients();var a=$("#bf_page_menu"),b=a.find("a.menu-item"),c=$("#bf_container"),d=c.children(".bf_page"),e=(a.children(".title"),$("#bf_dishes > li > a")),f=$("#bf_background"),g=f.children("img"),h=f.children(".bf_overlay"),i=$("#bf_prev"),j=$("#bf_next"),k=$("#bf_close"),l=$("#bf_gallery"),m=l.children(".bf_gallery_wrapper"),n=m.find(".bf_gallery_item"),o=n.length,p=function(){var a,b=$("#map"),c="426 Main St, Ridgefield, CT 06877",d=41.2820325,e=-73.4984549,f=!1,g=function(){i(),f=!0;var b=new google.maps.LatLng(d,e),g={zoom:17,center:b,mapTypeId:google.maps.MapTypeId.HYBRID,mapTypeControl:!1,panControl:!0,panControlOptions:{position:google.maps.ControlPosition.TOP_RIGHT},zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL,position:google.maps.ControlPosition.TOP_RIGHT},streetViewControl:!0,streetViewControlOptions:{position:google.maps.ControlPosition.TOP_RIGHT}};a=new google.maps.Map(document.getElementById("map"),g),a.setTilt(45),h();var j=new google.maps.InfoWindow,k="Pure Bar <br/>"+c;j.setContent(k),j.setPosition(b),j.open(a),q.fadeBG(!1)},h=function(){b.css({width:$(window).width()+"px",height:$(window).height()+"px"})},i=function(){f=!1,b.empty()},j=function(){return f};return{showMap:g,hideMap:i,active:j,resizeMap:h}}(),q=function(){var a=function(){var a=b(g);g.css({width:a.width+"px",height:a.height+"px",left:a.left+"px",top:a.top+"px"}),p.active()||g.fadeIn(1500)},b=function(a){var b=new Image;b.src=a.attr("src");var c,d,e=$(window).width(),f=$(window).height(),g=f/e,h=b.width,i=b.height,j=i/h;return g>j?(d=f,c=f/j):(d=e*j,c=e),{width:c,height:d,left:(e-c)/2,top:(f-d)/2}},c=function(a){return $.Deferred(function(b){a?f.fadeIn(1e3,b.resolve):f.fadeOut(1500,b.resolve)}).promise()},d=function(){return $.Deferred(function(a){var b=new Array;n.each(function(){var a=$(this),c=a.children("img"),d=c.attr("src"),e=c.data("bgimg");b.push(d),b.push(e)});for(var c=b.length,d=0,e=0;c>e;++e)$("<img/>").load(function(){++d,d===c&&a.resolve()}).attr("src",b[e])}).promise()};return{changeBgImageDim:a,getImageDim:b,preloadImages:d,fadeBG:c}}(),r=function(){var a=!1,b=700,c=0,d="/images/background/default.jpg",e=function(a){p(),r(a)},f=function(){$(document).unbind("mousewheel keydown"),i.unbind("click"),j.unbind("click"),k.unbind("click"),n.children("img").unbind("click")},l=function(a,b,c){h.stop().fadeTo(a,b,function(){c&&h.hide()})},p=function(){i.bind("click",function(){return x(0),!1}),j.bind("click",function(){return x(1),!1}),k.bind("click",function(){u(),l(500,.5);var b=n.eq(c),e=b.children(".bf_heading"),g=b.children(".bf_desc");return a=!0,f(),$.when(w(e,g,0)).done(function(){n.css("left","-20px").hide(),s.reset(),z(d)}),!1}),n.children("img").bind("click",function(){m.fadeOut(),l(500,0,!0)}),$(document).bind("mousewheel",function(a,b){return x(b>0?0:1),!1}).keydown(function(a){switch(a.which){case 37:x(0);break;case 39:x(1)}})},r=function(b){m.show(),t(),n.eq(b).show(),l(500,.8),c=b;var d=n.eq(c),e=d.children(".bf_heading"),f=d.children(".bf_desc");a=!0,z(d.children("img").data("bgimg")),w(e,f,1)},t=function(){i.stop().animate({left:"10px"},b),j.stop().animate({right:"10px"},b)},u=function(){i.stop().animate({left:"-72px"},b),j.stop().animate({right:"-72px"},b)},v=function(){m.fadeIn(),l(500,.8)},w=function(a,c,d){return $.Deferred(function(e){var f={},g={};d?(f.left="-10px",f.top="-10px",g.right="0px",g.bottom="0px"):(f.left="20px",f.top="95px",g.right="40px",g.bottom="95px"),a.stop().animate(f,b/3),c.stop().animate(g,b/3,e.resolve)}).promise()},x=function(d){if(a)return!1;a=!0,$bf_item_current=n.eq(c),d?++c:--c,c>o-1?c=0:0>c&&(c=o-1);var e=n.eq(c),f=$bf_item_current.children(".bf_heading"),g=$bf_item_current.children(".bf_desc");$.when(w(f,g,0)).done(function(){m.css("overflow","hidden");var c=d?"480px":"-520px",f=d?"-520px":"480px";e.css("left",c).show(),$bf_item_current.stop().animate({left:f},b),e.stop().animate({left:"-20px"},b,function(){$bf_item_current.hide(),m.css("overflow","visible");var b=e.children(".bf_heading"),c=e.children(".bf_desc");$.when(w(b,c,1)).done(function(){a=!1})}),y(d,e)})},y=function(d,e){var f=$('<img src="'+e.children("img").data("bgimg")+'" alt="image'+(c+1)+'" ></img>'),h=q.getImageDim(f),i=d?$(window).width():-h.width+"px";f.css({width:h.width+"px",height:h.height+"px",left:i,top:h.top+"px"}).insertAfter(g).stop().animate({left:h.left+"px"},b);var j=d?-g.width():$(window).width();g.stop().animate({left:j+"px"},b,function(){$(this).remove(),g=f,a=!1})},z=function(d){var e=$('<img src="'+d+'" alt="image'+(c+1)+'" ></img>'),f=q.getImageDim(e);e.css({width:f.width+"px",height:f.height+"px",left:f.left,top:f.top+"px"}).insertBefore(g),g.stop().fadeOut(2*b,function(){$(this).remove(),g=e,a=!1})};return{init:e,stop:f,exitFullscreen:v}}(),s=function(){var c=700,g=function(){q.preloadImages(),q.changeBgImageDim(),h()},h=function(){b.bind("click",function(){var a=$(this);window.scrollTo(1,0),i();var b=$(this).data("content");return"visit"===b?p.showMap():($.when(q.fadeBG(!0)).done(function(){p.hideMap()}),$("#"+a.data("content")).show()),!1}),e.bind("click",function(){return j($(this).parent("li").index()),!1}),$(window).bind("resize",function(){q.changeBgImageDim(),p.resizeMap()}),f.delegate("img","click",function(){return r.exitFullscreen(),!1})},i=function(){d.hide(),r.stop()},j=function(a){$(".floater-phone").hide(),r.init(a),l.show().siblings().fadeOut(c/2),k(!1)},k=function(b){b?a.stop().animate({left:"0px"},c):a.stop().animate({left:"-300px"},c)},m=function(){l.hide().siblings().fadeIn(c),$(".floater-phone").show(),k(!0)};return{init:g,reset:m}}();s.init()});