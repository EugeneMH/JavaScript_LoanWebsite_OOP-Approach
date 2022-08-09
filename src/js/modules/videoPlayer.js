export default class VideoPlayer {
    constructor (trigger, overlay){
        this.btns = document.querySelectorAll(trigger);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
    }
    //if the player has been opened before, makes sure not to create it anew 
    //gets the url to the video from the DOM element
    //adds Event Listeners on triggers
    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (document.querySelector('iframe#iframe')) {
                    this.overlay.display = 'flex';
                } else {
                    let path = btn.getAttribute('data-url');
                    this.createPlayer(path);
                }
            });
        });
    }
    //closes the player, stops the video
    closePlayer() {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });
    }
    //createPlayer receives the url to the Youtube video from bindTriggers
    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
        });

        this.overlay.style.display = 'flex';
    }
    //combines all the methods above into the initiation of the code
    init() {
        let tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.closePlayer();
    }
}