let count = 0;
let preload = Pormise.resolve();
let fn = (perc) => {
    p = p.then(() => new Promise(resolve => $("#preloadText").text(perc + "%").delay(200).fadeIn("slow", resolve)));
};
while (count < 100) {
    fn(count + 1);
    count++;
}

let start = new Date().getTime();

$(window).on("load", function () {


    let now = new Date().getTime();
    var latency = now - start;
    // alert("page loading time: " + latency);

    let load = $("#preloader");

    load.css({ "display": "none" });
    $("html").addClass("show-scroll");
});