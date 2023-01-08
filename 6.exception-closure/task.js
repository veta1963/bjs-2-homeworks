function parseCount(a) {    
    let number = Number.parseFloat(a);
    if (isNaN) {
        console.log("Невалидное значение");
    }     
    return number;
}
parseCount();

function validateCount(number) {   
    try{
        return parseCount();              
    } catch (error){       
        console.log(error);       
    }
    return number;  
}

class Triangle {
    constructor(a,b,c) {        
        if(a+b < c || b+c < a || a+c < b) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }    
    get perimeter() {       
        return  a + b + c;
    }
    get area() {
        this.x = p/2(p/2 - a)*(p/2 - b)*(p/2 - c)
        this.S = Math.sqrt(x);
        return (Number(S.toFixed(3)));        
    }
}

function getTriangle(a, b, c) { 
   try {    
        let triangle = {
            get perimeter(){
                return ("Ошибка! Треугольник не существует");
            },
            get area(){
                return ("Ошибка! Треугольник не существует");
            }
        }
        return triangle;
    } 
     finally {
        return new Triangle(a, b, c);
     }
          
}