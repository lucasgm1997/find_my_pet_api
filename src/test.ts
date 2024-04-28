type Loggable = { log(message: string): void }

function withLogging<T extends new (...args: any[]) => Loggable>(Base: T) {
    return class extends Base {
        log(message: string) {
            console.log(`[${new Date().toISOString()}] ${message}`)
        }
    }
}

// Greeter now implements Loggable
class Greeter implements Loggable {
    greet(name: string) {
        console.log(`Hello, ${name}!`)
    }

    log(message: string) {
        console.log(`[${new Date().toISOString()}] ${message}`)
    }
}

// Create a new class that combines the Greeter and Loggable mixins
const MyGreeter = withLogging(Greeter)

// Use the new class to create an instance and call its methods
const greeter = new MyGreeter()
greeter.greet("Alice") // Output: "Hello, Alice!"
greeter.log("An event occurred.") // Output: "[2023-04-04T12:00:00.000Z] An event occurred."

let MyMixin = (MyClass: any) =>
    class extends MyClass {
        foo() {
            console.log("foo from MyMixin")
        }
    }
