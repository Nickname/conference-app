import detailSpeaker from './speaker-detail.html'

export default class SpeakerDetailView {
    constructor(talkService) {
        this.TalkService = talkService
    }

    render() {
        var path = location.hash.split("/")
        let id = path[path.length - 1]

        $.get(`http://localhost:3000/speakers/${id}`)
            .then(data => {
                
            })
    }
}
