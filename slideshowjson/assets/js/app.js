var slideshow = [];
var datafile = "data/ocean.json";
var curr, prev, next;

function preload(file) {
      $.getJSON(file, function(data) { 
        //loop through data to get image paths       
        $.each(data.lemurs, function( i, obj ) {
            //preload images
            var img = new Image();
            img.src = obj.image;
            console.log(obj.image);
        }); 
    });
}

preload(datafile);

$(function() { 

    //get file again 
    $.getJSON(datafile, function(data) { 
        //store json data in array
        slideshow = data.lemurs;
        //loop through array to get content
        $.each(slideshow, function( i, obj ) {
            $("#slides").append("<li id="+i+"><img  src="+obj.image+"><div class='text'><span class='title'>"+obj.title+"</span><span class='caption'>"+obj.caption+"</span></div></li>");
        });
    });
});


// $(function() {    
//     let curr = 0; 

//      $(photos).each(function(){
//          $("#slides").append("<div id="+curr+"><img src="+this+"></div>");
//          $("#slides").find("div:eq("+curr+")").css(
//              {"z-index":photos.length-curr}
//          );
//          curr++;
//      });

//     curr = 0;

//     function changeSlide(d){
//         //slide to next image
//         if (d==="n"){
//             $("#slides").animate({
//                 top: "-=100vw"},1000); 
//             curr++;
//         //slide to previous image
//         } else if (d==="p") {
//             $("#slides").animate({
//                 top: "+=100vw"},1000); 
//             curr--;  
//         //slide to beginning    
//         } else {
//             $("#slides").animate({top: "0"},500);
//             curr=0;
//         }
//     }
    
//     var auto = window.setInterval(function(){ 
//         if (curr===photos.length-1){
//             //reset if at the end
//             changeSlide("b");
//         } else {
//             changeSlide("n");
//         }
//     }, 5000);

    //go to the previous slide
    $(".left").click(function(){ 
        //stop the autoplay
        clearInterval(auto);
        //check the current index to make sure it is not on the first slide
        if (curr>0){   
            //slide in previous image
            changeSlide("p");
        }
    });
    
    //go to the next slide
    $(".right").click(function(){
        //stop the autoplay
        clearInterval(auto);
        console.log("current:"+curr);

        if (curr<photos.length-1){
            //slide in next image
            changeSlide("n");
        } else {
            //reset to beginning
            changeSlide("b"); 
        } 
    });
// });