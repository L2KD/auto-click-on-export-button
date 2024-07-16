function run() {
    setInterval(function() {
        var list = document.getElementsByTagName("em");
        console.log(list);
        for (let item of list) {
            item.style.background = "red";

        }
    }, 1000);
    document.body.style.background = "green";
}
// run();