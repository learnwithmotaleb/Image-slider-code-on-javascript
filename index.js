var imgTag=document.querySelector("#image");
function mypic1(){
imgTag.src="image/pic0.jpg";

}
function mypic2(){
    imgTag.src="image/pic2.jpg";
}
function mypic3(){
    imgTag.src="image/pic1.jpg";
}
function mypic4(){
    imgTag.src="image/mehedi.jpg";
}
function mypic5(){
    imgTag.src="image/ripon.jpg";
}
function mypic6(){
    imgTag.src="image/safine.jpg";
}
function mypic7(){
    imgTag.src="image/lipon.jpg";
}
var photos=["image/pic0.jpg", "image/pic2.jpg", "image/pic1.jpg", "image/mehedi.jpg", "image/ripon.jpg","image/safine.jpg", "image/lipon.jpg"];
var img=document.querySelector("img");

var count=0;
function next(){
    count++;
    if(count>=photos.length){
        count=0;
        img.src=photos[count];
    }else{
        img.src=photos[count];
    }
    img.src=photos[count];

}


function pre(){
    count--;
    if(count < 0){
        count=photos.length-1;
        img.src=photos[count];
    }else{
        img.src=photos[count];
    }
    img.src=photos[count];


}



