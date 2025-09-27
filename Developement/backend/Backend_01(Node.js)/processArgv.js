let args=process.argv;
console.log (args);
for (let i=2;i<args.length;i++){ // why i=2? ,because first two index has default argument and current working directory 
    console.log("hello",args[i]);
}

// node processArgv.js syed khizer owaise

// use this to run the code in the terminal