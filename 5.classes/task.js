class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
	}
    fix() {
        this.state *= 1.5; 
    }

    set state(number) {
        if (number < 0) {
            this._state = 0;
        } else
        if (number > 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {   
    constructor(author, name, releaseDate, pagesCount) {        
        super(name, releaseDate, pagesCount); 
        this.author = author;       
        this.type = "book";        
    }    
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, ) {
        super(author, name, releaseDate, pagesCount, author);
        this.type = "novel";           
    }    
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";        
    }    
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";        
    }    
}


class Library {
    constructor(libraryName) {
        this.name = libraryName;
        this.books = [];
    }

    addBook(book) {
        if (book.state >= 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        const bookToGive = this.findBookBy("name", bookName);
        if(bookToGive) {
            const indexBookToGive = this.books.indexOf(bookToGive);
            this.books.splice(indexBookToGive, 1);
            return bookToGive;
        }
        return null;
    }
}


class Student {
    constructor(name) {
       this.name = name;
       this.marks = {}; 
    }
  
    addMark(mark, subject) {
        if (mark < 2 || mark > 5) { 
            return;
        } else if (Object(this.marks).hasOwnProperty(subject) === false) {
            this.marks[subject] = [];
        }  
        this.marks[subject].push(mark);
    }
  
    getAverageBySubject(subject) {
        if (Object.keys(this.marks).includes(subject) === false) {
            return 0;
        }  
        let sum = this.marks[subject].reduce((sum, currentValue) => sum + currentValue, 0);  
        return sum / this.marks[subject].length;      
    }
  
    getAverage() { 
      if (Object.keys(this.marks).length === 0) {
        return 0;
        }  
        let sum = 0;
        for (let key of Object.keys(this.marks)) { 
            sum += this.getAverageBySubject(key); 
        }
        return sum / Object.keys(this.marks).length; 
    }
}