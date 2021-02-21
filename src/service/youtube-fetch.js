class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: "GET",
            redirect: "follow",
        };
    }

    async mostPopular() {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=40&key=${this.key}`,
            this.getRequestOptions
        );
        const result = await response.json();
        return result.items;
    }

    async searchWord(query) {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions
        );
        const result = await response.json();
        return result.items.map((item) => ({ ...item, id: item.id.videoId }));
    }

    async getChannelsThumbnails(query) {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${query}&key=${this.key}`,
            this.requestOptions
        );
        const result = await response.json();
        return result.items[0].snippet.thumbnails.default.url;
    }
}

export default Youtube;
