import session_list from "./session-list.html"

export default class SessionListView {

    constructor(talkService) {
        this.talkService = talkService
    }

    render() {
        $('#main-view').html(session_list)
    }
}