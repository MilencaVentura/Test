//Calculator Spec  (Specification)
/*BDD
 Jazmine
 Calculator
 should be able to add two numbers
 should be able to subtract two numbers
 should be able to multiply two numbers
 should be able to divide two numbers
 */
describe('Calculator', function(){ //test suite Calculator
    var calculator;
    //antes de iniciar empieza a iniciar variables que se vayan a necesitar
    beforeEach(function(){
        calculator = new Calculator();

        //calculator.reset(); esto elimina tbn pero de otra manera
    });
    //elimina los valores q se pudieron hacer creado
    afterEach(function(){
        calculator = null;
    });
    describe ('Add', function(){
        it('should be able to add two numbers',function(){
            var actRes=calculator.add(3,2);
            var expRes=5;
            expect(actRes).toBe(expRes);

        }); //specification/Requeriment 1 = testcase 1

        it ('should not be able to evaluate two letters', function(){

            expect(function(){calculator.add('q', 'a');}).toThrow('error numbers!');
        });

        it ('should not be able to evaluate letter with number', function(){

            expect(function(){calculator.add('q', 1);}).toThrow('error numbers!');
        });

        it ('should not be able to evaluate numbers menores to one', function(){

            expect(function(){calculator.add(-1, 1);}).toThrow('error numbers!');
        });
        it('should be able to add two numbers because the numbers are not decimal',function(){
            var actRes=calculator.add(5,2);
            var expRes=7;
            expect(actRes).toBe(expRes);

        });
    });
    describe('minus', function() {
        it('should be able to evaluate two numbers', function () {
            var actRes = calculator.minus(2, 1);
            var expRes = 1;
            expect(actRes).toBe(expRes);
        });
        it('should be able to evaluate two numbers the first number should be bigger thant the second', function(){
            expect(function(){calculator.minus(1,4);}).toThrow('The first number should be bigger');
        });
        it('should not be able to evaluate two letter', function(){
            expect(function(){calculator.minus('s','ss');}).toThrow('error numbers!');
        });
        it ('should not be able to evaluate numbers menores to one', function(){

            expect(function(){calculator.minus(-1, 1);}).toThrow('error numbers!');
        });
        it('should be able to evaluate two numbers', function () {
            var actRes = calculator.minus(2, 1);
            var expRes = 1;
            expect(actRes).toBe(expRes);
        });
    });

    describe('plus', function()
    {
        it('should be able to multiply two numbers',function(){
            var calculator=new Calculator();
            var actRes=calculator.plus(3,2);
            var expRes=6;
            expect(actRes).toBe(expRes);
        });//especificacion/Requeriment 3= testcase 3
        it('should not be able to evaluate two letter', function(){
            expect(function(){calculator.plus('s','ss');}).toThrow('error numbers!');
        });
        it ('should not be able to evaluate numbers menores to one', function(){

            expect(function(){calculator.plus(-1, 1);}).toThrow('error numbers!');
        });
        it('should be able to evaluate two numbers ', function () {
            var actRes = calculator.plus(2, 1);
            var expRes = 2;
            expect(actRes).toBe(expRes);
        });
    });

    describe('div',function(){
        it('should be able to divide two numbers',function(){
            var calculator=new Calculator();
            var actRes=calculator.div(2,2);
            var expRes=1;
            expect(actRes).toBe(expRes);

        });//especificacion/Requeriment 4= testcase 4
        it('should not be able to evaluate two letter', function(){
            expect(function(){calculator.div('d','d');}).toThrow('error numbers!');
        });
        it('the second number should be not a zero',function(){
            expect(function(){calculator.div(1,0);}).toThrow('error division by zero!');
        });
        it ('should not be able to evaluate numbers menores to one', function(){

            expect(function(){calculator.div(-1, 1);}).toThrow('error numbers!');
        });
        it('should be able to evaluate two numbers', function () {
            var actRes = calculator.div(2, 1);
            var expRes = 2;
            expect(actRes).toBe(expRes);
        });
    });
});


