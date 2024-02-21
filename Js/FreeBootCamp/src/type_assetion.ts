//Type assetion
let channel : any = "lePep";

//let channelStr: <string> channel;
let channelStr = channel as string;

//const myCanvas = document.getElementById("main") as HTMLCanvasElement;
const myCanvas = <HTMLCanvasElement>document.getElementById("main");