// Intégration des layout
import Layout from "./layout/index";
import LayoutSpeakerList from "./layout/speaker.list.view"
import LayoutSessionList from "./layout/session.list.view"
import LayoutSessionDetail from "./layout/session.detail.view"

import TalkService from './common/talk.service';

export default class App {

    init() {
        // Service récup de données
        const talkService = new TalkService()
        // Layout de base
        this.layout = new Layout()
        // Liste des layout instancié
        this.layoutSpeakerList = new LayoutSpeakerList(talkService)
        this.layoutSessionList = new LayoutSessionList(talkService)
        this.layoutSessionDetail = new LayoutSessionDetail(talkService)

        this.layout.render();
    }

    router() {
        if (location.hash == '#speakers-list') {
            this.layoutSpeakerList.render()
        } else if (location.hash == '#sessions-list') {
            this.layoutSessionList.render()
        } else {
            this.layout.render();
        }
    }
}
