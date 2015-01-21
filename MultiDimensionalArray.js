module.exports = {
  generate_1d : function(somevalue)
  {
    var tmpArr = [];
    var randomNumber;

    if (somevalue > 3)
      {
        for(i =0; i < somevalue; i++)
          {
            randomNumber = Math.floor(Math.random() *2);
            tmpArr.push(randomNumber);
          }
        return tmpArr;
      }

    if (somevalue === 'potato')
      {
        return tmpArr;
      }

    for(i =0; i < 3; i++)
      {
        randomNumber = Math.floor(Math.random() *2);
        tmpArr.push(randomNumber);
      }
    return tmpArr;
},
  
  generate_2d : function(){
    var tmpArr = [];

    for(var i =0; i < 3; i++){
      var innerArray = [];
      //for(var j=0;j<3;j++){
        var randomNumber = Math.floor(Math.random() *2);
        tmpArr.push(randomNumber);

      }
   // }
    //tmpArr.push(innerArray);
     return tmpArr;
  }
     
};