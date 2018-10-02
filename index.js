const YouTube_Search_URL = "https://www.googleapis.com/youtube/v3/search";


//Get data from API
function getDataFromApi (searchTerm, callback){
    const settings = {
        url: YouTube_Search_URL,
        data: {
            q: `${searchTerm}`,
            part: 'snippet',
            key: "AIzaSyBXjnIeLhAmsGhwe7XQePKmHvCL1J_DEMM"

        },
        dataType: 'json',
        type: "GET",
        success: callback
    };
    $.ajax(settings);
}

//Appends data to the DOM

//Does something with the data (callback)
function displayYouTubeSearchData (data) {
    console.log(data.items[0].snippet.title);
    //loop through array items in object data?
    // const results = data.
    //render results to another function which creates html
    
    //put the html into the search results div
    // $('.search-results').html();
}

getDataFromApi("dog", displayYouTubeSearchData);

