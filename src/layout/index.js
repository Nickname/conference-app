import * as $ from "jquery";

import css from './style.css'

import layout from './layout.html'

export default class Layout{
    render(){
        $('body').html(layout)
    }
}
