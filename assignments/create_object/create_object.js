function CreateObject(arr) {
    // Write your code here
    const obj = {};
    for(let i = 0; i < arr.length; i = i + 2){
        let key = arr[i].toString();
        obj[key] = arr[i+1];
    }
    return obj;
}

module.exports = CreateObject;
