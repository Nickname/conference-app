
export default class TalkService {

    jsonMethod(){
        return $.get("https://raw.githubusercontent.com/2017-d13/conference-data/master/speakers.json").then(data => {
            return JSON.parse(data)
        })
    }

    jsonMethodById(id){
        return $.get("https://raw.githubusercontent.com/2017-d13/conference-data/master/speakers.json").then(data => {
            speakers=JSON.parse(data)
            return speakers.find(speaker => speaker.id==id)
        })
    }

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
