const YouTube_Search_URL = "https://www.googleapis.com/youtube/v3/search";

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

