const SAU_CODE = "pbpf";
const SAU_REVISION = 1;

function SAU() {
    this.api_host = "https://restapi.starinc.xyz/update";
}

SAU.prototype = {
    fetch: function () {
        let data = fetch(this.api_host + "/fetch/" + SAU_CODE)
            .then(function (response) {
                return response.json();
            });
        if ("revision" in data.data) {
            if (data.data.revision > SAU_REVISION) {
                return true;
            }
        }
    },
    get_version_info(revision) {
        let data = fetch(
            this.api_host + "/info/?sau_code=" + SAU_CODE + "&version=" + revision
        ).then(function (response) {
            return response.json();
        });
        console.log(data);
    }
}
