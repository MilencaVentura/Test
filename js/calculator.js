//calculator add
var Calculator= function(){
    //pluss
    var _resultAux=0;
    this.add=function(var1, var2) {
        if (var2 == undefined && !isNaN(var1)) {
            _resultAux = _resultAux + var1;
            return _resultAux;
        };
        if (isNaN(var1) || isNaN(var2)) {
            throw('error numbers!');
        }
        ;
        if (isNaN(var1) || var2 == undefined){
            throw('error numbers!');
        };
        if (var1<0 || var2 < 0){
            throw('error numbers!');
        };
        var res = false;
        if(var1%1 !=0 || var2%1!=0){
           res = true;
            return res;
        };
        _resultAux = var1 + var2;
        return _resultAux;
    };
    //minus
    this.minus=function(var1, var2){
        if (var2 == undefined && !isNaN(var1)) {
            _resultAux = _resultAux - var1;
            return _resultAux;
        };
        if (isNaN(var1) || isNaN(var2)) {
            throw('error numbers!');
        }
        ;
        if (var1<0 || var2 < 0){
            throw('error numbers!');
        };
        if(var1 < var2){
            throw('The first number should be bigger');
        };
        return _resultAux =var1-var2;
        var res = false;
        if(var1%1 !=0 || var2%1!=0){
            res = true;
            return res;
        };
    };

    //plus
    this.plus=function(var1, var2){

        if (var2 == undefined && !isNaN(var1)) {
            _resultAux = _resultAux * var1;
            return _resultAux;
        };
        if (isNaN(var1) || isNaN(var2)) {
            throw('error numbers!');
        }
        ;
        if (var1<0 || var2 < 0){
            throw('error numbers!');
        };
        var res = false;
        if(var1%1 !=0 || var2%1!=0){
            res = true;
            return res;
        };
        return _resultAux = var1*var2;
    };


    //division
    this.div=function(var1, var2){
        if (var2 == undefined && !isNaN(var1)) {
            _resultAux = _resultAux - var1;
            return _resultAux;
        };
        if (isNaN(var1) || isNaN(var2)) {
            throw('error numbers!');
        }
        ;
        if(var1 == undefined || var2==0 ){
            throw('error division by zero!');
        };
        if (var1<0 || var2 < 0){
            throw('error numbers!');
        };
        return _resultAux = var1/var2;
        var res = false;
        if(var1%1 ==0 || var2%1==0){
            res = true;
            return res;
        };
    };

    //subtract a bigger number to small number
    /*this.subtractBiggerSmallNumber=function(var1,var2){
     if(var1>var2)
     {
     return console.log('the first number should be more than bigger that second number');
     }
     else{
     return var1-var2;
     }
     };*/
};

