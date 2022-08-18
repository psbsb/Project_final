"use strict";

class Movie {
    constructor(id, story, thumb, title) {
        this.id = id;
        this.story = story;
        this.thumb = thumb;
        this.title = title;
    }
    getId() {
        return this.id;
    }
    getStory() {
        return this.story;
    }
    getThumb() {
        return this.thumb;
    }
    getTitle() {
        return this.title;
    }
    
}

module.exports = Movie;