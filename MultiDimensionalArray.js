module.exports = {
  generate_1d : function(somevalue)
  {
    var tmpArr = [];
    var randomNumber;

    /* tests if the value is not a number (eg. string) and if it's 
    not an undefined number (eg. no argument) */
    if (isNaN(somevalue) === true && somevalue !== undefined )
      {
        return tmpArr;
      }

    /* creates an 'n' specified amount of items if a number is specified
    and if there is no number specified, it creates a 3 element array */
    if (somevalue > 0)
      {
        for(i =0; i < somevalue; i++)
          {
            randomNumber = Math.floor(Math.random() *2);
            tmpArr.push(randomNumber);
          }
        return tmpArr;
      } else
        {
          for(i =0; i < 3; i++)
            {
              randomNumber = Math.floor(Math.random() *2);
              tmpArr.push(randomNumber);
            }
          return tmpArr;
        }
},
  
  generate_2d : function()
  {
    var tmpArr = [];
    var innerArray = [];
      for(var i =0; i < 3; i++)
      {

        for(var j=0;j<3;j++){
          var randomNumber = Math.floor(Math.random() *2);
          tmpArr.push(randomNumber);

        }
      }
    tmpArr.push(innerArray);
    return tmpArr;
  }

};