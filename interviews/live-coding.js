// Read this code, what the output will be line?

for (var i=0;i<5;i++){
  let a = i
  setTimeout(function(){ console.log(new Date(), this.a); }, 1000 + (this.a * 1000));
}
->   console.log(new Date(), ‘start’);



How to flatten a nested javascript array
[[0,1],[2,3,[4, 5, [6,7]]],[[4,5],6,7]]  -> [0,1,2,3,4,5,6,7]

Use recursion to go N levels deep


//

Let a = (arr) => {
  Let flattenItem = (arrItem) => {
    for(var i=0; i<arrItem.length; i++) {
      If (arrItem[i].isArray()){
        Return flattenItem(arrItem[i].isArray)
      }
    }
  }
  let newArr = arr.map((item, i, arr) => {
    if(item.isArray()) {
      Return this.flattenItem(item)
    } else {
      return item
    } 

  })
  return [].concat[newArray];
}

console.log(a(arr))
