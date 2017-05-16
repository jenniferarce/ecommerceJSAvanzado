(function($,app,window){
 
 app.Carrito = {
  	init : function(){
  	  //Las variables $xxx representan objetos jQuery, es solo una nomenclatura
	    $container = $('.cart');
	    $boton = $('.cart__button', $container);
	    $listado = $('.cart__list', $container);
	    $total = $('.cart__total', $container);
	    template = $('#cart__item__template').html(); //En este caso template no lleva $ porque es texto
	    
	    $boton.click(this.mostrarOcultar);
  },
  
  	mostrarOcultar : function (){
    	$('.cart').toggleClass('cart--hidden');
  },

    dibujarPedido : function(){
	    $listado.empty(); //Elimino todo lo que este dibujado en el listado previamente
	    app.Pedido.ver().forEach(this.dibujarProducto, this); //Por cada item del pedido dibujo un producto en el carrito
	    $total.text(app.Pedido.total());//Actualizo el total
	},

	dibujarProducto : function(unProducto){
	    var $item = $(template);
	    $('.cart__item__nombre', $item).html(unProducto.titulo);
	    $('.cart__item__cantidad', $item).html(unProducto.cantidad);
	    $('.cart__item__precio', $item).html(unProducto.precio);
	    $('.cart__item__remove', $item).click(removerProducto);
	    $listado.append($item);
	    
	    function removerProducto(){
	      app.Pedido.remover(unProducto.id);
	    }
  }

}

})(jQuery,PROYECTO,undefined);