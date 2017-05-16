(function($,app,window){

app.Listado = {

	init : function(){
		$.getJSON(app.config.productos).done(this.recibirProductos.bind(this)); //Endpoint json "productos"
	},

	recibirProductos : function(data){
		data.data.forEach(this.dibujarListado); //Inspeccionar el json que devuelve el servidor para saber como utilizarlo
	},

	dibujarListado : function(unProducto,index){
		var $item = $($('#catalog__item__template').text()); //Tomo el html del template "catalog__item__template" como texto para crear un objeto jQuery
		var $catalogo = $('.catalog');
	    $('.title', $item).html(unProducto.titulo);
	    $('.description', $item).html(unProducto.descripcion);
	    $('.price span', $item).html(unProducto.precio);
	    $('img', $item).attr('src', unProducto.imagen);
	    $('img', $item).load(showItem);
	    $catalogo.append($item);
	    
	    $item.hide();
	    $('button', $item).click(agregar);

	    function agregar(){
	    	app.Pedido.agregar(unProducto);
	    }

	    function showItem(){
	    	$item.delay(index*200).fadeIn(500);
	    }
	}
}

})(jQuery,PROYECTO,undefined);