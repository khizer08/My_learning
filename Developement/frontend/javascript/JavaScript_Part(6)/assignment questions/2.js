// not understood by me

let str = "abcdefgggh";

function uniqueChars() {
    let uniqueSet = new Set(str);
    console.log([...uniqueSet].join(""));
}

uniqueChars();
