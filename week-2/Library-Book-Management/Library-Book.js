/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/


//book class creation
class Book{
    //properties
    title;
    author;
    pages;
    isAvailable;
    //constructor
    constructor(title,author,pages,isAvailable=true){
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable
    }
    //methods
    borrow(){
        this.isAvailable=false
    }
    returnBook(){
        this.isAvailable=true
    }
    getInfo(){
        return this.title+" by "+this.author+" ("+this.pages+" pages)"
    }
    isLongBook(){
        return this.pages>300
    }
}
//create at least 5 book objects
let book1=new Book("Harry Potter","J.K. Rowling",350)
let book2=new Book("Atomic habits","Shakespeare",280)
let book3=new Book("The Hobbit","J.R.R. Tolkien",310)
let book4=new Book("1984","George Orwell",290)
let book5=new Book("The Great Gatsby","F. Scott Fitzgerald",180)
//display info of all books
let books=[book1,book2,book3,book4,book5]
console.log("Book Details:")
books.forEach(book=>{
    console.log(book.getInfo())
})
//borrow 2 books
book1.borrow()
book3.borrow()
console.log(`\nAfter borrowing "${book1.title}" and "${book3.title}":`)
books.forEach(book=>{
    console.log(`"${book.title}" is ${book.isAvailable?"available":"not available"}`)
})
//Return 1 book and show updated status
book1.returnBook()
console.log(`\nAfter returning "${book1.title}":`)
books.forEach(book=>{
    console.log(`"${book.title}" is ${book.isAvailable?"available":"not available"}`)
})
//Count how many books are "long books" (more than 300 pages)
let longBookCount=books.filter(book=>book.isLongBook()).length
console.log(`\nNumber of long books (more than 300 pages): ${longBookCount}`)
//List all available books
console.log("\nAvailable Books:")
books.forEach(book=>{
    if(book.isAvailable){
        console.log(book.getInfo())
    }
})