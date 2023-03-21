import { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className="input">
                <img src="../../img/loupe.png" alt="loupe" />
                <input idtype="text" />
            </div>
        )
    }
}