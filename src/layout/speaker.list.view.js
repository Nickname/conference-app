import card from './speaker-card.html'

export default class SpeekerListView {

    constructor(talkService) {
        this.talkService = talkService
    }

    render() {
        this.talkService.findAllSpeakers()
            .then((data) => $('#main-view').html(data))
    }

}
