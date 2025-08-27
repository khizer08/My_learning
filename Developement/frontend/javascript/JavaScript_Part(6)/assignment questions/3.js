//incomplete
let arr=["india","australia","london"];
function length(){
    let maxlen=0;
    for(i=0;i<arr.length;i++){
        if(arr[i].length > maxlen){
            maxlen=arr[i].length;
        }
    }
}
length();