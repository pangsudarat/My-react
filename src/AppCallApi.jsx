import "./App.css"
import React ,{ useState, useEffect } from "react"
import { css } from "@emotion/css"
import styled from "emotion/styled"
import axios from "axios"

const Example =  {
    "categories":[],
    "created_at":"2020-01-05 13:42:20.262289",
    "icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id":"Ro08-Qv9Q36-L55Aq6QLxQ","updated_at":"2020-01-05 13:42:20.262289",
    "url":"https://api.chucknorris.io/jokes/Ro08-Qv9Q36-L55Aq6QLxQ",
    "value":
    "A movie critic told Chuck Norris \"my dilemma is whether so watch one of your movies or watch paint dry\". Chuck told him \"my dilemma is whether to rip off your scrotum or punch you in the throat\". Chuck did both."
}

const AppApi = ()  => {

const onButtonClick = () => {
    console.log("call api chuck norris")
} 
    return <div >
        <button onClick={onButtonClick}>Call Api </button>
    </div>
};

export default AppApi;