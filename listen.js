/*jshint esversion: 6 */
browser.tabs.onUpdated.addListener(function (_, changeInfo, _) {
    if (changeInfo.status == "loading" && changeInfo.url != undefined) {
        send_sic({
            "version": 1,
            "url": changeInfo.url
        });
    }
});