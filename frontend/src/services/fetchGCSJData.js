const fetchGCSJData = (callback) => {
    fetch('https://sheetdb.io/api/v1/aklas3bhw5zd7')
        .then((response) => response.json())
        .then((data) => {
            callback(data); // Invoke the callback with fetched data
        })
        .catch((error) => {
            console.error('Error fetching data: ', error);
            callback([]); // Send an empty array in case of an error
        });
};

export default fetchGCSJData;
