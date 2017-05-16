(function($,app,window){

app.Pedido = {

  init : function(){
    items = [];
  },

  agregar : function(item){
    var indice = items.indexOf(item);
    var existe = indice >= 0;
    if(existe){
      items[indice].cantidad++;
    } else {
      item.cantidad = 1;
      items.push(item); 
    }
    app.Carrito.dibujarPedido(); //Visualizo los items en el carrito
  },

  remover : function(id){
    for(var i=0; i < items.length; i++){
      var mismoId = items[i].id === id;
      if(mismoId){
        items[i].cantidad--;
        if(items[i].cantidad == 0){
          items.splice(i, 1);  
        }
        app.Carrito.dibujarPedido(); //Visualizo los items en el carrito
        return;
      }
    }
    throw new Error('Item no encontrado');
  },

  ver :  function(){
    return items;
  },
  total : function(){
    var total = 0;
    items.forEach(function(item){ total+=item.precio*item.cantidad });
    return total;
  },
  esVacio : function(){
    return items.length == 0;
  }

}

})(jQuery,PROYECTO,undefined);