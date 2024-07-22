if (typeof init === 'undefined') {
    const init = function () {
        function findAnClick() {
            var url = window.location.href;
            if (url.indexOf('http://portal.jka.vn:8090/Project/CheckReport') >= 0) {
                var randomTimeArray = [10, 11, 12, 13, 14, 15];
                var preClassElementList = document.getElementsByClassName("pre1");
                if (preClassElementList.length > 0) {
                    var preClassElement = preClassElementList[0];
                    var preText = preClassElement.innerText;
                    var min = 0, max = randomTimeArray.length;
                    const minCeiled = Math.ceil(min);
                    const maxFloored = Math.floor(max);
                    var randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
                    var delaySeconds = randomTimeArray[randomNumber];
                    console.log("Delay Seconds: " + delaySeconds);
                    setTimeout(function () {
                        if (preText.toLowerCase().includes("true")) {
                            var buttonExportElementList = document.evaluate("//button[contains(., 'Export')]", document, null, XPathResult.ANY_TYPE, null);
                            var buttonExportElement = buttonExportElementList.iterateNext();
                            if (buttonExportElement) {
                                buttonExportElement.click();
                                console.log("Button Export Clicked at " + new Date().toLocaleString());
                            }
                        } else {
                            var buttonVerifyElementList = document.evaluate("//button[contains(., 'Verify')]", document, null, XPathResult.ANY_TYPE, null);
                            var buttonVerifyElement = buttonVerifyElementList.iterateNext();
                            if (buttonVerifyElement) {
                                buttonVerifyElement.click();
                                console.log("Button Verify Clicked at " + new Date().toLocaleString());
                            }
                        }
                        findAnClick();
                    }, delaySeconds * 1000);
                }
            }
        }

        findAnClick();
    }
    init();
}
