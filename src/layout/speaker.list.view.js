import card from './speaker-card.html'

export default class SpeekerListView {

    constructor(talkService) {
        this.talkService = talkService
    }

    render() {
        this.talkService.findAllSpeakers()
            .then((data) => {
                let tabCards = []

                data.forEach(s => {
                    let cardSpeaker = card
                    //cardSpeaker = cardSpeaker.replace('{{image}}', s.image)
                    cardSpeaker = cardSpeaker.replace('{{name}}', `${s.firstname} ${s.lastname}`)

                    tabCards.push(cardSpeaker)
                })
                $('#main-view').html(tabCards.join())
            })

    }

}
