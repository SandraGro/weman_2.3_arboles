var num = null;


function binary_search(arr, num) {
  var inicio = performance.now();
  var ctrlMostrado = document.getElementById("texto_encontrado");
  var ctrlMostrado1 = document.getElementById("inicio");
  var ctrlMostrado2 = document.getElementById("fin");
  var ctrlMostrado3 = document.getElementById("final");
  var num = document.getElementById("txtBuscaR1").value;
  var end = arr.length;
  var mid = Math.floor(end / 2);
  
  if (end == 0) {
    return -1;
  }
  
  if (num == arr[mid].id) {
  } else if (num > arr[mid].id) {
    return binary_search( arr.slice(mid + 1, end), num);
  } else {
    return binary_search( arr.slice(0, mid), num);
  }
  
  var fin= performance.now();
  var tiempo_final = fin-inicio;
  ctrlMostrado.innerHTML = arr[mid].nombre;
  ctrlMostrado1.innerHTML = inicio;
  ctrlMostrado2.innerHTML = fin;
  ctrlMostrado3.innerHTML = tiempo_final;

  console.log(tiempo_final);
}
 
