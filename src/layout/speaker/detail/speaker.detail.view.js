import speaker_detail from './speaker-detail.html'

import css from './style.css'

export default class SpeakerDetailView {
    constructor(talkService) {
        this.talkService = talkService
    }

    render() {
        var path = location.hash.split("/")
        let id = path[path.length - 1]

        let detail = speaker_detail

        this.talkService.findSpeakerById(id)
            .then(s => {
                detail = detail.replace('{{name}}', `${s.firstname} ${s.lastname}`)
                detail = detail.replace('{{image}}', s.image)

                let tabSocial = []
                s.socials.forEach(social => {
                    var social_network = social.class.charAt(0).toUpperCase() + social.class.slice(1)

                    tabSocial.push(`<a id="btn-social" class="btn btn-primary" href="${social.link}">${social_network}</a>`)
                })
                detail = detail.replace('{{social}}', tabSocial.join(''))

                return this.talkService.findSessionByThing(s.id)
            })
            .then(s => {
                let tabPresentation = []
                s.forEach(session => {
                    tabPresentation.push(`<a class="row col-11" href="/#session-detail/${session.id}">${session.title}</a>`)
                })
                detail = detail.replace('{{presentations}}', tabPresentation.join(''))

                $('#main-view').html(detail)
            })

    }
}
