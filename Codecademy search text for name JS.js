text = "HI im James, James is a cool name everyone likes and ive met other people called James there also pretty cool. so ha my names is better than yours sincearly James.";

myName = "James";
var hits = [];
for (var i = 0; i < text.length; i ++) {
    if (text[i] === "J"){
        for (var j = i; j < (myName.length + i); j ++) {
            hits.push(text[j]);
        }
    }    
}
if (hits.length === 0) {
    console.log("Your names wasn't found!");
} else {
    console.log(hits);
};