import session_detail from "./session-detail.html"

export default class SessionDetailView {

    constructor(talkService) {
        this.talkService = talkService
    }

    render() {
        {
            var path = location.hash.split("/")
            let id = path[path.length - 1]

            const req1 = this.talkService.findSessionById(id)

            req1.then(s => {
                    let sessionDetail = session_detail
                    sessionDetail = sessionDetail.replace('{{title}}', s.title)
                    sessionDetail = sessionDetail.replace('{{desc}}', s.desc)

                    let tabPresentateur = []

                    Promise.all(s.speakers.map(sp => this.talkService.findSpeakerById(sp)))
                        .then((result) => {
                            result.forEach(sp => {
                                var speaker_name = `${sp.firstname} ${sp.lastname}`
                                tabPresentateur.push(`<a href="#speaker-detail/${sp.id}">${speaker_name}</a><br>`)
                            })

                            sessionDetail = sessionDetail.replace('{{presentateurs}}', tabPresentateur.join(''))
                            $('#main-view').html(sessionDetail)
                        })


                })
        }
    }
}
