function parseCount(number) {    
    Number.parseFloat(number);
    if (isNaN(number)) {
        throw new Error ("невалидное значение");
    }     
    return number;
}

function validateCount(number) {   
    try{
        return parseCount(number);                      
    } catch (error) {    
        throw new Error ("невалидное значение"); 
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
        return (a + b + c);
    }
    get area() {        
        let p = (Math.sqrt(perimeter()/2(perimeter()/2 - a)*(perimeter()/2 - b)*(perimete()/2 - c))).toFixed(3);        
        return p;        
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