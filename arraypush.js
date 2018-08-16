var studentName = []; //start with empty array
var lastName = []; //start with empty array
var ta = prompt("firstname!"); 
var ki = prompt("lastname");
studentName.unshift(ta); //moves name to begin
lastName.unshift(ki);
window.alert(studentName[0] + lastName[0] + /* studentName.legnth + lastName.legnth
*/);
//credit to Eric
