function parseCount(a) {    
    let number = Number.parseFloat(a);
    if (isNaN(number)) {
        throw new Error ("Невалидное значение");
    }     
    return number;
}

function validateCount(number) {   
    try{
        return parseCount(number);                      
    } catch (error) {    
        return error; 
    }    
}

class Triangle {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;        
        if(a+b < c || b+c < a || a+c < b) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }    
    get perimeter() {            
        return (this.a + this.b + this.c);
    }
    get area() { 
        const p =  this.perimeter/2;      
        let S = +(Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c))).toFixed(3);        
        return S;        
    }
}

function getTriangle(a, b, c) { 
   try { 
    return new Triangle(a, b, c);   
   } catch {
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
}