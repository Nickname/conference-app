import speaker_detail from './speaker-detail.html'

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
                    tabSocial.push(`<a class="btn btn-primary" style="margin-left:10px" href="${social.link}">${social.class}</a>`)
                })
                detail = detail.replace('{{social}}', tabSocial.join(''))

                return this.talkService.findSessionByThing(s.id)
            })
            .then(s => {
                let tabPresentation = []
                s.forEach(session => {
                    tabPresentation.push(`<a class="col-12" style="margin-left:30px" href="/#session-detail/${session.id}">${session.title}</a>`)
                })
                detail = detail.replace('{{presentations}}', tabPresentation.join(''))

                $('#main-view').html(detail)
            })

    }
}
