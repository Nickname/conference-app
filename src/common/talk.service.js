
export default class TalkService {

    findAllSpeakers() {
        return $.get('http://localhost:3000/speakers')
    }

<<<<<<< HEAD
    
}

=======
    findSpeakerById(id) {
        return $.get(`http://localhost:3000/speakers/${id}`)
    }
}
>>>>>>> 009cc04003c611c16b82155edb3f41d6cdd84380
