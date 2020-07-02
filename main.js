let app = new Vue({
    el: "#app",
    data:{
        header: 'VUE CALCULATOR',
        answer : '',
        deleteAnswer: 'DELETE',
        numbers : [{
            digitKey : 1,
            digitNumber: '1'
        },{
            digitKey : 2,
            digitNumber: '2'
        },{
            digitKey : 3,
            digitNumber: '3'
        },{
            digitKey : 4,
            digitNumber: '4'
        },{
            digitKey : 5,
            digitNumber: '5'
        },{
            digitKey : 6,
            digitNumber: '6'
        },{
            digitKey : 7,
            digitNumber: '7'
        },{
            digitKey : 8,
            digitNumber: '8'
        },{
            digitKey : 9,
            digitNumber: '9'
        },{
            digitKey : 0,
            digitNumber: '0'
        }],
        operators : [{
            operatorKey : 111,
            operatorSymbol : '+',
            operatorName : 'plus'
        },{
            operatorKey : 112,
            operatorSymbol : '-',
            operatorName : 'minus'
        },{
            operatorKey : 113,
            operatorSymbol : '/',
            operatorName : 'divided'
        },{
            operatorKey : 114,
            operatorSymbol : '*',
            operatorName : 'multiplication'
        }],
        equalAnswer : '=',
        firstNumbers : 1,
        secondNumbers : [],
        pickedOperator : ''
    },
    methods : {
        newAnswer(x){
            
                    if(!this.answer.match(/[+*/=-]/gm)){
                        this.answer = this.answer + x * 1 ;
                        return this.firstNumbers = Number(this.answer)
                    }else{
                        console.log('boom');
                        this.answer = this.answer + x * 1;
                        this.secondNumbers.push(x)
                    }
            
        },
        pickOperator(x){
                if(!this.answer.match(/[+*/=-]$/gm)){
                    this.answer = this.answer + x;
                    this.pickedOperator = x;
                }else{
                    this.answer = this.answer.replace(/[+*/=-]$/gm,x);
                    this.pickedOperator = x;
                }
        },
        deleteA(){
            this.answer = String(this.answer).replace(/[0-9+*/=-]$/gm,'');
            this.secondNumbers.pop()
        },
        solutionToCalculation(operationInputed){
            this.answer =eval(Number(this.firstNumbers) +operationInputed+ Number(this.secondNumbers.join('')) *1)
        }
        
    }
});