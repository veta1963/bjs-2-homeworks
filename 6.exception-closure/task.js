function parseCount(a) {    
    Number.parseFloat(a);
    if (a === NaN) {
        console.log("Невалидное значение");
    }    
    try{        
        throw new Error("ошибка!")
    } catch (error){       
        console.log(error);
    }
    return a;
}
parseCount();

function validateCount(number) {
    parseCount(number);
    if(number !==NaN) {
        return number;
    }
    
}

class Triangle {
    constructor(a,b,c) {
        if(a+b < c || b+c < a || a+c < b) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }
    get perimeter() {
        let p = a + b + c;
        return p;
    }
    get area() {
        let x = p/2(p/2 - a)*(p/2 - b)*(p/2 - c)
        let S = Math.sqrt(x);
        return S.toFixed(3);        
    }
}

function getTriangle(a, b, c) {  
    Triangle = new Triangle(a, b, c); 
    try {       
    } catch (perimeter) {
            return ("Ошибка! Треугольник не существует");
        }    
    try {
    } catch (area) {
            return ("Ошибка! Треугольник не существует")
        }
}