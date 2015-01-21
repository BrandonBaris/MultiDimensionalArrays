module.exports = {
  generator: function(){
    var tmpArr = [];

    for(var i =0; i < 3; i++){
      var innerArray = [];
      for(var j=0;j<3;j++){
        var randomNumber = Math.floor(Math.random() *2);
        innerArray.push(randomNumber);

      }
    }
    tmpArr.push(innerArray);
  }
      return tmpArr;
};