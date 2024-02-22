// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, totalPages, checkoutCount, availability = true){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.totalPages = totalPages;
        this.checkoutCount = checkoutCount;
        this.availability = availability; //bool, true = available 
    }
    checkout(uses = 1){
        this.checkoutCount += uses;
    }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, totalPages, checkoutCount, availability = true){
        super(title, author, copyrightDate, isbn, totalPages, checkoutCount, availability = true);
    }
    isAvailable(currentDate = 2024){
        if (currentDate - this.copyrightDate > 5) {
            this.availability = false;
        }
        return this.availability;
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, totalPages, checkoutCount, availability = true){
        super(title, author, copyrightDate, isbn, totalPages, checkoutCount, availability = true);
    }
    isAvailable(){
        if (this.checkoutCount > 100) {
            this.availability = false;
        }        
    }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel ("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, true);

let TSShuttleBuilding = new Manual ("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, true);

// Code exercises 4 & 5 here:

console.log(TSShuttleBuilding.isAvailable(2024));

prideAndPrejudice.checkout(5);