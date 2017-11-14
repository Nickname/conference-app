
export default class TalkService {

    findAllSpeakers() {
        return $.get('http://localhost:3000/speakers')
    }

    findSpeakerById(id) {
        return $.get(`http://localhost:3000/speakers/${id}`)
    }

    findAllSessions() {
        return $.get('http://localhost:3000/sessions')
    }

    findSessionById(id) {
        return $.get(`http://localhost:3000/sessions/${id}`)
    }

    findHourById(id) {
        return $.get(`http://localhost:3000/hours/${id}`)
    }

    findAllCategories() {
        return $.get(`http://localhost:3000/categories`)
    }

    findCategorieById(id) {
        return $.get(`http://localhost:3000/categories/${id}`)
    }

    findSessionByThing(thing) {
        return $.get(`http://localhost:3000/sessions?q=${thing}`)
    }
}
