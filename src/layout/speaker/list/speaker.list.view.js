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
                    cardSpeaker = cardSpeaker.replace('{{image}}', `/images/speakers/${s.image}`)
                    cardSpeaker = cardSpeaker.replace('{{name}}', `${s.firstname} ${s.lastname}`)
                    cardSpeaker = cardSpeaker.replace('{{id}}', s.id)

                    tabCards.push(cardSpeaker)
                })
                $('#main-view').html(tabCards.join(""))
            })

    }

}
