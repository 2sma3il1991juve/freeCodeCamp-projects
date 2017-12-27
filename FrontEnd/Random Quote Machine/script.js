$(document).ready(function () {
    
    let quote;
    
    getQuote();

    function getQuote() {
        let url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
        $.getJSON(url, function (data) {
             quote = data.quoteText;
            $(".quote").html("'" + quote + "'");
            $(".author").html("by " + data.quoteAuthor);
        })
    };

    $("#newQuote").on("click", function () {
        getQuote()
    });

    $("#tweetQuote").on("click", function () {
        window.open("https://twitter.com/intent/tweet?text=" + quote)
    })

});