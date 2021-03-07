class Event{
    constructor(eventcode, eventtype, eventname, eventstartdate, eventenddate) {
        this._eventcode = eventcode
        this._eventname = eventname
        this._eventstartdate = eventstartdate
        this._eventenddate = eventenddate
    }
    get eventcode(){
        return this._eventcode
    }
    get eventtype(){
        return this._eventtype
    }
    get eventname(){
        return this._eventname
    }
    get eventstartdate(){
        return this._eventstartdate
    }
    get eventenddate(){
        return this._eventenddate
    }
    msgWelcome(){
        console.log(`Welcome to ${this._eventname}!`)
    }
}
class OnsiteEvent extends Event {
    constructor(eventcode, eventtype, eventname, eventstartdate, eventenddate, eventvenue, eventcity, eventstate, eventcountry){
        super(eventcode, eventtype, eventname, eventstartdate, eventenddate)
        this._eventvenue = eventvenue
        this._eventcity = eventcity
        this._eventstate = eventstate
        this._eventcountry = eventcountry
    }
    get eventvenue(){
        return this._eventvenue
    }
    get eventcity(){
        return this._eventcity
    }
    get eventstate(){
        return this._eventstate
    }
    get eventcountry(){
        return this._eventcountry
    }
}
class VirtualEvent extends Event{
    constructor(eventcode, eventtype, eventname, eventstartdate, eventenddate, availablepostevent){
        super(eventcode, eventtype, eventname, eventstartdate, eventenddate)
        this._availablepostevent = availablepostevent
    }
    get availablepostevent(){
        return this._availablepostevent
    }
}

let pack0921 = new OnsiteEvent('pack0921', 'onsite','International Packaging Expo 2021','9/1/2021','9/15/2021','Las Vegas Convention Center','Las Vegas','NV','United States')
let spie1021 = new VirtualEvent('spie1021','virtual','2021 SPIE Engineering Expo','10/15/2021','10/20/2021',true)

let events = [pack0921,spie1021]

for( a of events ){
    a.msgWelcome()
}