function parseCount(a) {    
    let number = Number.parseFloat(a);
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
    } finally { 
        return number;
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
        let p = (Math.sqrt(this.perimeter/2(this.perimeter/2 - a)*(this.perimeter/2 - b)*(this.perimete/2 - c))).toFixed(3);        
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