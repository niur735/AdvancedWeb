var photos = ["assets/img/1.JPG","assets/img/2.JPG","assets/img/3.JPG","assets/img/4.JPG","assets/img/5.JPG","assets/img/6.JPG","assets/img/7.JPG","assets/img/8.JPG","assets/img/9.JPG","assets/img/10.JPG"];

var curr, prev, next;

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        var img = new Image();
        img.src = this; 
        console.log(this);
    });
}

preload(photos);

$(function() {    
    let curr = 0; 

     $(photos).each(function(){
         $("#slides").append("<div id="+curr+"><img src="+this+"></div>");
         $("#slides").find("div:eq("+curr+")").css(
             {"z-index":photos.length-curr}
         );
         curr++;
     });

    curr = 0;

    function changeSlide(d){
        //slide to next image
        if (d==="n"){
            $("#slides").animate({
                top: "-=100vw"},1000); 
            curr++;
        //slide to previous image
        } else if (d==="p") {
            $("#slides").animate({
                top: "+=100vw"},1000); 
            curr--;  
        //slide to beginning    
        } else {
            $("#slides").animate({top: "0"},500);
            curr=0;
        }
    }
    
    var auto = window.setInterval(function(){ 
        if (curr===photos.length-1){
            //reset if at the end
            changeSlide("b");
        } else {
            changeSlide("n");
        }
    }, 5000);

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
});