import Papa from "papaparse";

const fetchGCSJData = (callback) => {
    function init() {
        Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQcf6gv8DVJ6KrN5sgsF8LS9yNte96Lu3qm8iAONo7cTcWV7qjuxi90mBAPrVE9o46QYibFBN2aRFui/pub?output=csv', {
            download: true,
            header: true,
            complete: function (results) {
                let data = results.data;
                callback(data)
            }
        })
        window.addEventListener('DOMContentLoaded', init)
    }

    init()
};

export default fetchGCSJData;
