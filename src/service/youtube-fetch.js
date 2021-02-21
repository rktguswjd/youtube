export const mostPopular = () => {
    let requestOptions = {
        method: "GET",
        redirect: "follow",
    };
    return fetch(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCsVvXYflpkfnfvlGHTRVCndJ8zuTSVB6U",
        requestOptions
    );
};

export const searchWord = (search) => {
    let requestOptions = {
        method: "GET",
        redirect: "follow",
    };

    return fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&type=video&key=AIzaSyCsVvXYflpkfnfvlGHTRVCndJ8zuTSVB6U`,
        requestOptions
    );
};
