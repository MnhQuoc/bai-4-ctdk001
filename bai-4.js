function solonnhat() {
    let a = +document.getElementById("a").value
    let b = +document.getElementById("b").value
    let c = +document.getElementById("c").value
    if (a > c) {
        if (a>b) {
            document.getElementById("result").innerHTML = a + " là số lớn nhất ";
            }
        else {
            document.getElementById("result").innerHTML = b + " là số lớn nhất ";
            }
        }
    else {
        if (c>b) {
            document.getElementById("result").innerHTML = c + " là số lớn nhất ";
        }
        else {
            document.getElementById("result").innerHTML = b + " là số lớn nhất ";
        }
    }
}
