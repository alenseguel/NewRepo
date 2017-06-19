export class Greeter {
  sayHi(): string {
    return 'hi';
  }

  sayNumber(): number {
    return 3;
  }

  saySomethingAsync(callback: ((val: string) => void)) {
    setTimeout(() => {
      callback('something')
    }, 1000)
  }

  forceACrash() {
    throw new Error('Some kind of custom crash message')
  }
}

const greeter = new Greeter()
console.log(greeter.sayHi())