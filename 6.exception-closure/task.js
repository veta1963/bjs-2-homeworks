function parseCount(a) {    
    let number = Number.parseFloat(a);
    if (Number.isNaN(a)) {
        throw new Error ("невалидное значение");
    }     
    return number;
}


function validateCount(number) {   
    try{
        return parseCount(number);              
    } catch (error){       
        throw new Error ("невалидное значение");;       
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
        return   this._perimeter = a + b + c;
    }
    get area() {
        this.p = p;
        this._area = (Math.sqrt(p/2(p/2 - a)*(p/2 - b)*(p/2 - c))).toFixed(3);        
        return this._area;        
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