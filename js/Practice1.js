/**
 * Created by Milenca Ventura on 3/17/2015.
 */
var numberOperators= function  ()

{
    var number= window.prompt("Introduce the values like this: 4,5,7");
    //number=arguments;
        var ser= number.split(",");
        var real= [];
        for ( var i= 0; i<ser.length;i++)
        {
            real[i] =parseInt(ser[i]) ;

        };

    alert('the max is' + getMax(number));
    alert('the min is' + getMin(number));
    alert('the avg is' + getAverage(number));
    alert('the sum is' + getSum(number));

};

//numberOperators(number);
var getMax=function(number,pos,max){
    // var max;
    if(max==undefined)
        pos=number.length-1;
    if (max==undefined)
        max=number[pos];
    if(pos==0)
        return max;
    if (max<number[pos-1])
    // max=number[pos]
        max=number[pos-1];
    return getMax(number,pos-1,max);
};

var getMin= function (number,pos,min) {
    if(pos==undefined)
        pos=number.length-1;
    if(min==undefined)
        min=number[pos];
    if(pos==0)
        return min;
    if(min>number[pos-1])
        min=number[pos-1];
    return getMin(number,pos-1,min);

};

var getAverage=function(number,pos,avg){
    if(pos==undefined){
        pos=number.length-1;
        aux=number.length;
    }
    if(avg==undefined)
        avg=number[pos];
    if(pos==0){
        total=avg/aux;
        return total;
    }
    if(avg>number[pos-1]){
        avg=avg+number[pos-1];
    }
    if(avg<number[pos-1]){
        avg=avg+number[pos-1];
        avg=number[pos-1];
        //var total=avg/aux;
    }
    return getAverage(number,pos-1,avg);
};
var getSum=function(number,pos,sum)
{
    if(pos==undefined)
        pos=number.length-1;
    if(sum==undefined)
        sum=number[pos];
    if(pos==0){
        return sum;
    }
    if(sum>number[pos-1]){
        sum=sum+number[pos-1];
    }
    if(sum<number[pos-1]){
        sum=sum+number[pos-1];
        sum=number[pos-1];
    }
    return getSum(number,pos-1,sum);

};
