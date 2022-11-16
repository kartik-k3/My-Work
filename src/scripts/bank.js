var pinset = 0,
    pin = 0,
    names = ["Tom Hardy", "Kartik", "John", "Mayur", "User", "Pleb", "Dutch", "Riya", "Franklin", "Michael", "Nathan Drake", "Felix", "Jack", "Dimitri", "Eren Jaegar"],
    count = 1,
    count2 = 1;
class user {
    pin = 0;
    balance = 5000;
    constructor() {
        (this.pin = sessionStorage.getItem("pinset")), (this.pin = parseInt(this.pin)), console.log(this.pin);
    }
    get pini() {
        return sessionStorage.getItem("pinset"), this.pin;
    }
    set pini(e) {
        e > 999 && (sessionStorage.setItem("pinset", `${e}`), (this.pin = e));
    }
    get bal() {
        return sessionStorage.getItem("balance");
    }
    set bal(e) {
        sessionStorage.setItem("balance", `${e}`), (this.balance = e);
    }
}
var person = new user();
function inppinchange() {
    var e = document.getElementById("inppin").value;
    if (((count = sessionStorage.getItem("count")), (pinset = sessionStorage.getItem("pinset")), (count = parseInt(count)), (pinset = parseInt(pinset)), e > 999 && count > 1)) {
        if (e == pinset) location.href = "welcome.html";
        else {
            (document.getElementById("lblnote").innerHTML = "Wrong pin. Please enter the pin you entered while login"), (document.getElementById("inppin").value = ""), (e = "");
            return;
        }
    }
    e > 999 && ((count = 2), (pinset = e), sessionStorage.setItem("count", `${count}`), sessionStorage.setItem("pinset", `${pinset}`), (location.href = "welcome.html"));
}
function numclick(e) {
    "c" == e ? ((document.getElementById("inppin").value = ""), (pin = "")) : numnum(e);
}
function numnum(e) {
    if (
        ((pin += e.toString()),
        (pin = parseInt(pin)),
        (document.getElementById("inppin").value = pin),
        (count = sessionStorage.getItem("count")),
        (pinset = sessionStorage.getItem("pinset")),
        (count = parseInt(count)),
        (pinset = parseInt(pinset)),
        pin > 999 && count > 1)
    ) {
        if (pin == pinset) location.href = "welcome.html";
        else {
            (document.getElementById("lblnote").innerHTML = "Wrong pin. Please enter the pin you entered while login"), (document.getElementById("inppin").value = ""), (pin = "");
            return;
        }
    }
    pin > 999 && ((count = 2), (pinset = pin = parseInt(pin)), sessionStorage.setItem("count", `${count}`), sessionStorage.setItem("pinset", `${pinset}`), (location.href = "welcome.html")), (pin = pin.toString());
}
function welcbodyload() {
    (person = new user()), (document.getElementById("lblwelcome").innerHTML = `Welcome ${names[Math.floor(15 * Math.random())]}`);
}
function chgbal(e) {
    "subtract" == e.id
        ? (sessionStorage.setItem("i", "1"), (count2 = sessionStorage.getItem("count2")) < 2 && (sessionStorage.setItem("balance", "5000"), (count = 2), sessionStorage.setItem("count2", `${count2}`)))
        : "add" == e.id && (sessionStorage.setItem("i", "0"), (count2 = sessionStorage.getItem("count2")) < 2 && (sessionStorage.setItem("balance", "5000"), (count = 2), sessionStorage.setItem("count2", `${count2}`)));
}
function transactionload() {
    1 == (i = parseInt((i = sessionStorage.getItem("i"))))
        ? ((document.getElementById("lbltransheading").innerHTML = "<br>Withdraw Cash"),
          (document.getElementById("lbltransenter").innerHTML = "Enter the amount you want<br>to withdraw"),
          (document.getElementById("submitbtn").innerHTML = "WITHDRAW"),
          (document.getElementById("lbltransnote").innerHTML = " *A charge of 10&#8377; will be deducted on <br>withdrawal from modern browsers."))
        : 0 == i &&
          ((document.getElementById("lbltransheading").innerHTML = "<br>Deposit Cash"),
          (document.getElementById("lbltransenter").innerHTML = "Enter the amount you want<br>to deposit"),
          (document.getElementById("submitbtn").innerHTML = "DEPOSIT"),
          (document.getElementById("lbltransnote").innerHTML = " *Deposits are not supported on chrome <br>version 4.0 or below for security reasons"));
}
function transaction() {
    if (((document.getElementById("processpin").style.display = "block"), (document.getElementById("lbltransnote").style.display = "none"), setTimeout(time, 2e3), 1 == (i = parseInt((i = sessionStorage.getItem("i")))))) {
        if (((e = parseInt((e = document.getElementById("amountval").value))), "Mozilla" == navigator.appCodeName)) {
            e += 10;
            var e,
                n = person.bal;
            e < (n = parseInt(n))
                ? ((n -= e), (person.bal = n), console.log(person.bal), (document.getElementById("lbltransnote").innerHTML = "Transaction Successful"))
                : (document.getElementById("lbltransnote").innerHTML = "Insufficient Balance");
        } else {
            var n = person.bal;
            e < n ? ((n -= e), (person.bal = n), (document.getElementById("lbltransnote").innerHTML = "Transaction Successful")) : (document.getElementById("lbltransnote").innerHTML = "Insufficient Balance");
        }
    } else if (0 == i) {
        e = parseInt((e = document.getElementById("amountval").value));
        let t = navigator.appVersion;
        if ((t = parseInt(t)) >= 4) {
            var n = person.bal;
            (n = parseInt(n)), (n += e), (person.bal = n), console.log(person.bal), (document.getElementById("lbltransnote").innerHTML = "Amount deposited succesfully"), (document.getElementById("amountval").value = "");
        } else document.getElementById("lbltransnote").innerHTML = "Please update chrome to continue";
    }
}
function time() {
    (document.getElementById("lbltransnote").style.display = "block"), (document.getElementById("processpin").style.display = "none");
}
function checkbaload() {
    var e = new Date();
    (document.getElementById("lbldate").innerHTML = " " + e.toLocaleDateString()), (document.getElementById("lblmoney").innerHTML = "&#8377;" + person.bal);
}
function chgpin() {
    var e = document.getElementById("currentpin").value,
        n = document.getElementById("newpin").value,
        t = sessionStorage.getItem("pinset");
    (t = parseInt(t)), (n = parseInt(n)), (e = parseInt(e)) == t ? ((person.pini = n), (document.getElementById("lblpinote").innerHTML = "PIN Changed Successfully")) : (document.getElementById("lblpinote").innerHTML = "Incorrect pin");
}
