interface SayHello {

  greeting: string;
}
let hello: SayHello = {
   
  greeting: "Hello, world!"
}

function hello_world(message: SayHello): void {


  console.log(message.greeting)
}

hello_world(hello);