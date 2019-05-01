function binary_search(arr, num) {
    var end = arr.length;
    var mid = Math.floor(end/2);
  
    if(end == 0){
      return -1;
    }
    
    if(num == arr[mid].id){
      return arr[mid];
    }else if(num > arr[mid].id){
      return binary_search(arr.slice(mid+1, end), num);
    }else{
      return binary_search(arr.slice(0, mid), num);
    }
  }
