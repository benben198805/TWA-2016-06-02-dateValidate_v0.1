(function () {
    var reg = /^[01]?[0-9]{1}\/[0-3]?[0-9]{1}\/([0-9]{4}|[0-9]{2})$/;
    var input = $("#cal");
    input.bind("focus", function () {
        warn.hiddenWarn(input)
    }).bind("blur", function () {
        if (reg.test(input.val()) || input.val().length == 0) {
            warn.hiddenWarn(input);
        }
        else {
            warn.showWarn(input);
        }
    });
})();