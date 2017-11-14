import session_list from "./session-list.html"

export default class SessionListView {

    constructor(talkService) {
        this.talkService = talkService
    }

    render() {
        this.talkService.findAllSessions()
            .then((data) => {
                let tabSessions = []

                data.forEach(s => {
                    let session = session_list
                    session = session.replace('{{title}}', s.title)
                    session = session.replace('{{id}}', s.id)

                tabSessions.push(session)

            })

            $('#main-view').html(tabSessions.join(""))
        })
    }
}
