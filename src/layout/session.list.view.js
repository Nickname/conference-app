import session_list from "./session-list.html"

export default class SessionListView {

    constructor(talkService) {
        this.talkService = talkService
    }

    render() {
        this.talkService.findAllSessions()
<<<<<<< HEAD

=======
>>>>>>> e928b1080f010c57750886f34c125f240095af1a
            .then((data) => {
                let tabSessions = []

                data.forEach(s => {
                    let session = session_list
                    session.replace()
            })
        })
    }
}
