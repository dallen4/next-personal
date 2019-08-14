import { Howl, Howler } from 'howler';

export default class Player {

    constructor(queue = []) {
        
        this.queue = queue.map(track => ({
            _id: track._id,
            title: track.title,
            artist: track.artist,
            sound: new Howl({
                src: track.uri,
                html5: true,
                preload: false,
            })
        }));
        this.currentIndex = 0;

        this.play();

    }

    get queue() {
        return [...this.queue];
    }

    set queue(tracks) {
        this.queue = [...tracks];
    }

    play() {
        this.queue[this.currentIndex].sound.load().play();
    }

    pause() {
        this.queue[this.currentIndex].sound.pause();
    }

    // stop playback and destroy sound
    stop() {
        this.queue[this.currentIndex].sound.stop();
    }

    addTrack(track, playNext) {}

    removeTrack() {}

}
