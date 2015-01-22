module.exports = {
  generate_1d : function(somevalue)
  {
    var tmpArr = [];
    var randomNumber;
    var i;

    /* tests if the value is not a number (eg. string) and if it's 
    not an undefined number (eg. no argument) */
    if (isNaN(somevalue) === true && somevalue !== undefined )
      {
        //console.log('If not a number ',tmpArr);
        return tmpArr;
      }

    /* creates an 'n' specified amount of items if a number is specified
    and if there is no number specified, it creates a 3 element array */
    if (somevalue > 0)
      {
        for( i =0; i < somevalue; i++)
          {
            randomNumber = Math.floor(Math.random() *2);
            tmpArr.push(randomNumber);
          }
        //console.log('If specified argument ',tmpArr);
        return tmpArr;
      } else
        {
          for(i =0; i < 3; i++)
            {
              randomNumber = Math.floor(Math.random() *2);
              tmpArr.push(randomNumber);
            }
          //console.log('If no argument ',tmpArr);
          return tmpArr;
        }
},
  
  generate_2d : function(first_arr_ele,second_arr_ele)
 {
    var tmpArr = [];

/*    if (isNaN(second_arr_ele) === true && second_arr_ele !== undefined )
      {
        return tmpArr;
      } */


    /* checks if there are 2 arguments, first_arr_ele and second_arr_ele.
    second_arr_ele gets plugged into the function generate_1d then gets
    looped by "first_arr_ele" amount of times */

    if (first_arr_ele > 0 && second_arr_ele > 0)
    {
      for( i =0; i <  first_arr_ele; i++)
          {
            tmpArr.push(this.generate_1d(second_arr_ele));
          }
        //console.log('If N arguments are given ', tmpArr);
        return tmpArr;
    }

    if (first_arr_ele > 0 && second_arr_ele === undefined)
    {
      for( i =0; i <  first_arr_ele; i++)
          {
            tmpArr.push(this.generate_1d());
          }
        //console.log('If N arguments are given ', tmpArr);
        return tmpArr;
    } else
    //if (first_arr_ele === undefined && second_arr_ele === undefined)
      {
        for( i =0; i <  3; i++)
          {
            tmpArr.push(this.generate_1d());
          }
        //console.log('If no arguments are given for anything ', tmpArr);
        return tmpArr;
    } 
  },
 generate_3d : function(first_arr_ele,second_arr_ele,third_arr_ele)
 {
    var tmpArr = [];

/*    if (isNaN(third_arr_ele) === true && third_arr_ele !== undefined )
      {
        return generate_2d(first_arr_ele,second_arr_ele);
      } */

    /* If there are number values higher than 0 in the arguments then
    it will plug second_arr_ele and third_arr_ele arguments into the
    generate_2d function and loop that "first_arr_ele" amount of times*/

    if (first_arr_ele > 0 && second_arr_ele > 0 && third_arr_ele > 0)
    {
      for(var  j =0; j < first_arr_ele; j++)
          {
            tmpArr.push(this.generate_2d(second_arr_ele,third_arr_ele));
          }
        console.log(tmpArr);

        return tmpArr;
    }
  },

  count : function(first_arr_ele){
    var filtered = first_arr_ele.filter(function(x){
      return x>0;
    });
    console.log('array without the 0s', filtered);
    /*var additup = filtered.reduce(function(prev,curr){
      return prev+curr;
    });*/
    var additup = filtered.length;
    console.log('the added values is ',additup);
    return additup;
  }
};