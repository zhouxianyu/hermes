// RUN: %hermes -strict -target=HBC -fstrip-function-names -O %s | %FileCheck --match-full-lines %s

(function() {
function entryPoint() {
  helper();
}

function helper() {
  var s = "abc";
  var x = 1;
  var y;
  var z = false;
  for (var i = 0; i < 1000000; ++i) {
    x = s.length;
    y = s[i % 3];
    z = s.substring(0, 1);
  }
}
entryPoint();
print("Done");
})();

//CHECK:Done
