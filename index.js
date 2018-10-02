const YouTube_Search_URL = "https://www.googleapis.com/youtube/v3/search";


//Get data from API
function getDataFromApi (searchTerm, callback){
    const setting = {
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

//Does something with the data (callback)
function displayYouTubeSearchData (data) {
    //loop through array items in object data?
    const results = data.
    //render results to another function which creates html
    
    //put the html into the search results div
    $('.search-results').html();
}


//Appends data to the DOM