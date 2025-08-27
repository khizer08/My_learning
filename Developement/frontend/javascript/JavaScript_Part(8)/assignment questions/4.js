const doubleAndReturnArgs=(arr,...args)=>[
    ...arr,
    ...args.map((el)=>el*2),
];
doubleAndReturnArgs([1,2,3],4,4);
