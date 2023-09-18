// Створіть інтерфейс, який описує структуру об'єкта, що представляє калькулятор.
//  Калькулятор повинен мати методи для виконання арифметичних операцій: додавання, віднімання, множення та ділення.
//   Потім створіть функцію calculate, яка приймає об'єкт цього типу та виконує операцію і повертає результат.

// Оголошення інтерфейсу для калькулятора
interface Calculator {
    add: (x: number, y: number) => number;
    subtract: (x: number, y: number) => number;
    multiply: (x: number, y: number) => number;
    divide: (x: number, y: number) => number;
  }
  
// Реалізація інтерфейсу
  const calculator: Calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => (y !== 0 ? x / y : NaN), // Dividing by zero returns NaN
};
  
// Функція для виконання арифметичних операцій за допомогою калькулятора
  function calculate(operation: keyof Calculator, x: number, y: number): number {
    if (calculator[operation]) {
      return calculator[operation](x, y);
    } else {
      throw new Error("Unknown arithmetic operation");
    }
}




// // Оголошення інтерфейсу для калькулятора
// interface Calculator {
//     add: (x: number, y: number) => number;
//     subtract: (x: number, y: number) => number;
//     multiply: (x: number, y: number) => number;
//     divide: (x: number, y: number) => number;
// }

// // Створюємо клас, який реалізує інтерфейс калькулятора
// class BasicCalculator implements Calculator {
//     add(x: number, y: number): number {
//       return x + y;
//     }
  
//     subtract(x: number, y: number): number {
//       return x - y;
//     }
  
//     multiply(x: number, y: number): number {
//       return x * y;
//     }
  
//     divide(x: number, y: number): number {
//       if (y === 0) {
//         throw new Error("Division by zero is not allowed");
//       }
//       return x / y;
//     }
// }
// // Функція calculate, яка приймає об'єкт калькулятора і виконує операцію
// function calculate(calculator: Calculator, operation: string, x: number, y: number): number {
//     switch (operation) {
//       case "add":
//         return calculator.add(x, y);
//       case "subtract":
//         return calculator.subtract(x, y);
//       case "multiply":
//         return calculator.multiply(x, y);
//       case "divide":
//         return calculator.divide(x, y);
//       default:
//         throw new Error("Invalid operation");
//     }
// }


// Уявіть, що ви створюєте інтерфейси для веб-сервісу, який надає інформацію про книги. 
// Створіть інтерфейси Book, Author, і BookService, які описують структуру даних книжок, 
// авторів і методи веб-сервісу для отримання інформації про книжки та авторів.
//  Потім створіть об'єкт bookService, який імітує роботу веб-сервісу, 
//  і використовуйте інтерфейси для отримання інформації про книги та авторів.

// Створюємо інтерфейс для книги
interface Book {
    id: number;
    title: string;
    authorId: number;
    releaseYear: number;
}

// Створюємо інтерфейс для автора
interface Author {
    id: number;
    name: string;
    birthPlace: string; 
    birthYear: number; 
}

// Створюємо інтерфейс для веб-сервісу книжок
interface BookService {
    getBooks(): Book[];
    getBookById(id: number): Book | undefined;
    getAuthors(): Author[];
    getAuthorById(id: number): Author | undefined;
}

// Створюємо об'єкт bookService, який імітує роботу веб-сервісу
const bookService: BookService = {
    getBooks() {
        return [
            { id: 1, title: 'Digital Fortress', authorId: 1, releaseYear: 1998 },
            { id: 2, title: 'The Call of the Wild', authorId: 2, releaseYear: 1903 },
            { id: 3, title: 'Inferno', authorId: 1, releaseYear: 2013 },
        ];
    },

    getBookById(id: number) {
        const book = this.getBooks().find((book: Book) => book.id === id);
        return book;
    },

    getAuthors() {
        return [
            { id: 1, name: 'Dan Brown', birthPlace: 'USA', birthYear: 1964 },
            { id: 2, name: 'Jack London', birthPlace: 'USA', birthYear: 1876 },
        ];
    },

    getAuthorById(id: number) {
        const author = this.getAuthors().find((author: Author) => author.id === id);
        return author;
    },
};

// Приклад використання інтерфейсів для отримання інформації про книги та авторів
console.log('List of books:');
const books = bookService.getBooks();
books.forEach((book: Book) => {
    const author = bookService.getAuthorById(book.authorId);
    console.log(`Book: ${book.title}, Author: ${author?.name}, Year of issue: ${book.releaseYear}`);
});

console.log('List of authors:');
const authors = bookService.getAuthors();
authors.forEach((author: Author) => {
    console.log(`Author: ${author.name}, Place of birth: ${author.birthPlace}, Year of birth: ${author.birthYear}`);
});

  
  