//Pantalla de carga
window.onload = function(){
/* setTimeout(function(){ */
	var contenedor = $('.contenedor_carga');
	//contenedor.css("visibility","hidden");
	//contenedor.css("opacity","0");
	contenedor.addClass('animate__animated animate__fadeOutUp');
/* },3000); */
}
//Efecto en cajas
setTimeout(() => {
	$('.laptop-cel-1').addClass('animate__animated animate__fadeOutUp');
}, 5500);
var ancho = $(window).width();
if(ancho > 762){
	function ingresoBox(box2,box3){
		$(box2).find('div').removeClass('animate__fadeInDown').addClass('animate__animated animate__fadeOutUp');
		$(box3).find('div').removeClass('animate__fadeInDown').addClass('animate__animated animate__fadeOutUp');
	};
	function salidaBox(box2,box3){
		$(box2).find('div').removeClass('animate__fadeOutUp').addClass('animate__fadeInDown');
		$(box3).find('div').removeClass('animate__fadeOutUp').addClass('animate__fadeInDown');
	};
	
	$('.caja1').hover(function(){      
		ingresoBox('.caja2','.caja3');      
	},function(){
		salidaBox('.caja2','.caja3')
	});

	$('.caja2').hover(function(){      
		ingresoBox('.caja1','.caja3');      
		$('.anim-1').attr("src","img/animacion-cel.gif").removeClass('animate__fadeOut').addClass('animate__animated animate__fadeIn');
		$('.anim-2').attr("src","img/animacion-laptop.gif").removeClass('animate__fadeOut').addClass('animate__animated animate__fadeIn');
		setTimeout(() => {
			$('.anim-1').attr("src","img/static-cel.png");
		}, 4500);
		setTimeout(() => {
			$('.anim-2').attr("src","img/static-laptop.png");
		}, 3500);
	},function(){
		salidaBox('.caja1','.caja3');
		$('.anim-1').removeClass('animate__fadeIn').addClass('animate__fadeOut');
		$('.anim-2').removeClass('animate__fadeIn').addClass('animate__fadeOut');
	});

	$('.caja3').hover(function(){      
		ingresoBox('.caja1','.caja2');
		$('.presentacion3').removeClass('animate__fadeOutRight').addClass('animate__animated animate__fadeInRight');
	},function(){
		salidaBox('.caja1','.caja2')
		$('.presentacion3').removeClass('animate__fadeInRight').addClass('animate__fadeOutRight');
	});
	
	//item2
	$('.caja4').hover(function(){      
		ingresoBox('.caja5','.caja6');      
	},function(){
		salidaBox('.caja5','.caja6')
	});

	$('.caja5').hover(function(){      
		ingresoBox('.caja4','.caja6');      
	},function(){
		salidaBox('.caja4','.caja6')
	});

	$('.caja6').hover(function(){      
		ingresoBox('.caja4','.caja5');      
	},function(){
		salidaBox('.caja4','.caja5')
	});
}else{
	$('.fondo').css('display','none');
}

function watermark(){
	$('.img-total-item').append('<div class="watermark"><img src="./img/watermark.png" alt="watermark"></div>');
}
watermark();

var caja_ubicacion;
function coordenadas(event)	{				
	x=event.clientX;				
	y=event.clientY;
	//console.log(x);
	var ventana_ancho = $(window).width();
	var item_ancho=ventana_ancho/3;
	
	if(x<(item_ancho)){
		//console.log('a la izquierda');
		if(caja_ubicacion!=0){
			$('.orange-box').animate({left: 0});
		}
		caja_ubicacion=0;
	}else if(x<item_ancho*2){
		//console.log(item_ancho);
		if(caja_ubicacion!=item_ancho){
			$('.orange-box').animate({left: item_ancho});
		}
		caja_ubicacion=item_ancho;
	}else{
		//console.log(item_ancho*2);
		if(caja_ubicacion!=item_ancho*2){
			$('.orange-box').animate({left: item_ancho*2});
		}
		caja_ubicacion=item_ancho*2;
	}

}

$('.dropdown-menu').mousemove(function(event){
	coordenadas(event);
});