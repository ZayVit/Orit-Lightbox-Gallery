/*!
 * Orit v1.0.4
 * by ZayVit
 *
 * Copyright 2009, 2018 ZayVit
 * Released under the MIT license
 * https://github.com/ZayVit/Orit--Lightbox-Gallery-master/blob/master/LICENSE
 *
 * @preserve
 */

$(document).ready(function(){

 $('#Orit').append('<div class="info-gll"></div><span class="icon-times"></span><div class="arrw"><span class="prev icon-chevron-left"></span><span class="next icon-chevron-right"></span></div><div class="imT"></div><div class="circles-img"></div>');
 
 var orit = 0;
 var reg = 0;
 var regUrl;
 var numReg = 0;
 var numRegT = 1;
 var $initialImg = $('#Gll img'); /*Change where your images are hosted*/
 var controlCircles = true;/*Activate or deactivate circular controls*/
 var showInfoNumber = true;/*Activate or deactivate the number of the image in which it is found*/

/*-----------------------------------------------------------------------------------------*/
$initialImg.each(function(){
  reg++;
  numReg++;
  $('.imT').append('<img src="'+$(this).attr('src')+'">');
 
 if(controlCircles == true){
   $('.circles-img').append('<span class="icon-circle-o"><img src="'+$(this).attr('src')+'"></span>');
 }
 });
 
/*-----------------------------------------------------------------------------------------*/
 
 var $SpanClick = $('.circles-img span');
 var $SelectImg = $('#Orit .imT img');

$('#Orit').css({'display':'none'});/*Desaparecer contenerdor mt temporalmente,*/

/*-----------------------------------------------------------------------------------------*/
/*Click on the image of the container*/
$initialImg.on('click',function(){ /*46 to 80*/
$SelectImg.animate({'max-width':'80%','max-height':'90%'},100);

$('#Orit').css({'display':'block'});
  regUrl = $(this).attr('src');
$SelectImg.each(function(){

 if($(this).attr('src') == regUrl){
$SelectImg.removeClass('active');
  $(this).addClass('active');

orit = $(this).index();
numRegT = $(this).index();
/*-------------------------------*/
if(numRegT <= 0){
numRegT++;
}else{
numRegT++;
}

if(showInfoNumber == true){
   $('.info-gll p').remove();
$('.info-gll').append('<p>'+numRegT+'/'+numReg+'</p>');
   }

$SpanClick.removeClass('circle-active');
$SpanClick.eq(orit).addClass('circle-active');
/*-------------------------------*/
 }
});

$SelectImg.css({'margin-left':'0px','margin-right':'0px','margin-bottom':'0px'});
$SelectImg.eq(orit).addClass('active');
$('.active').css({'visibility':'visible','opacity':'1'});
 });

$SpanClick.on('click',function(){
$SelectImg.css({'margin-left':'0px','margin-right':'0px','margin-bottom':'-300px'});
$SelectImg.removeClass('active');
orit = $(this).index();
numRegT = $(this).index();

 if(numRegT <= 0){
numRegT++;
}else{
numRegT++;
}
 
if(showInfoNumber == true){
   $('.info-gll p').remove();
$('.info-gll').append('<p>'+numRegT+'/'+numReg+'</p>');
   }
$SpanClick.removeClass('circle-active');
$SpanClick.eq(orit).addClass('circle-active');
$SelectImg.eq(orit).addClass('active');
 
$('.active').css({'visibility':'visible'}).animate({
'margin-bottom':'0px',
'opacity':'1'
},300);
 
$SelectImg.eq(orit).addClass('active');

 
 });
 /*-------------------------------*/
 $('.prev').on('click',function(){/*116 to 146*/
$SelectImg.css({'margin-left':'-330px','margin-right':'0px','margin-bottom':'0px'});
if(orit <= 0){
orit = reg;
}else if(orit >= reg){
orit = 0;
}
orit--;
numRegT--;

if(numRegT < 1){
numRegT = numReg;
}

  if(showInfoNumber == true){
   $('.info-gll p').remove();
$('.info-gll').append('<p>'+numRegT+'/'+numReg+'</p>');
   }
  
$SpanClick.removeClass('circle-active');
$SpanClick.eq(orit).addClass('circle-active');
  $('.active').css({'visibility':'hidden','opacity':'0'});
$SelectImg.removeClass('active');
$SelectImg.eq(orit).addClass('active');
  
     $('.active').css({'visibility':'visible'}).animate({
    'margin-left':'0px',
     'opacity':'1'
   },300);

 });
/*-------------------------------*/
  $('.next').on('click',function(){/*148 to 184*/
   
$SelectImg.css({'margin-left':'0px','margin-right':'-330px','margin-bottom':'0px'});
   
orit++;
numRegT++;

if(numRegT > numReg){
   numRegT = 1;
}else if(numRegT == 0){
   numRegT = 1;
}
   
if(showInfoNumber == true){
   $('.info-gll p').remove();
$('.info-gll').append('<p>'+numRegT+'/'+numReg+'</p>');
   }
   
if(orit <= 0){
orit =  reg;
}else if(orit >= reg){
orit = 0;
}
   
$SpanClick.removeClass('circle-active');
$SpanClick.eq(orit).addClass('circle-active');

   $('.active').css({'visibility':'hidden','opacity':'0'});
$SelectImg.removeClass('active');
$SelectImg.eq(orit).addClass('active');

   $('.active').css({'visibility':'visible'}).animate({
    'margin-right':'0px',
     'opacity':'1'
   },300);

 });
 /*-------------------------------*/
$(document).keyup(function(e){
 if(e.which == 27){
$SelectImg.animate({'max-width':'0%','max-height':'0%'},100,function(){
    $('#Orit').css({'display':'none'});
  });
 }
});
 /*-------------------------------*/
 $('.icon-times').on('click',function(){
$SelectImg.animate({'max-width':'0%','max-height':'0%'},100,function(){
    $('#Orit').css({'display':'none'});
  });
 
 });
/*-------------------------------*/
});