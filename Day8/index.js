let sum = 0; // 2
function f() {
    function increment() {
        sum++;
        
        function inner2() {
            sum++;
            console.log(sum);
        }
        return inner2();
    }
    return increment();
}
f();
console.log(sum);