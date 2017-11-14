import session_detail from "./session-detail.html"

export default class SessionDetailView {

    constructor(talkService) {
        this.talkService = talkService
    }

    render() {
        {
            var path = location.hash.split("/")
            let id = path[path.length - 1]
    
            this.talkService.findSessionById(id)
                .then(s => {
                    let tabSessionDetail = []

                  
                       let sessionDetail = session_detail.replace('{{title}}', s.title)
                        sessionDetail = sessionDetail.replace('{{desc}}', s.desc)

                        let tabPresentateur = []
                        s.speakers.forEach(sp => {
                            tabPresentateur.push(`<a href="#speakers-list">${sp}</a>`)
                        })
                        session_detail.replace('{{firstname}}', s.firstname, tabPresentateur.join(''))
                        session_detail.replace('{{lastname}}', s.lastname, tabPresentateur.join(''))

                        tabPresentateur.push(sessionDetail)
                        $('#main-view').html(tabPresentateur.join(""))
                })
        }
    }
}
