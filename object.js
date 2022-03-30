var test1 = new Object();
test1.foo = 1;
test1.bar = 2;

var testobject = new Object();
testobject.run = 1;
testobject.fast = null;
testobject.loop = testobject;
testobject.dup = test1;

console.log(ObjToSource(testobject));
console.log(testobject.toSource());