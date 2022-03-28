import React from "react";
import calendar_icon from "../images/calendar-icon.png";
import './styles/Card.css';

var tdate = new Date();
var datetoday = parseInt(tdate.getFullYear()*10000  + (tdate.getMonth()+1)*100 + tdate.getDate()) 

function colordate(date){
    try {
        var dateint = parseInt(date.toString().replaceAll("-",""))
    } catch (e) {
        return ['#037BFC', '#00C3FF']
        
    }
    if(datetoday > dateint){
        return ['#c7271c', '#ff3729']
    }
    if(datetoday < dateint){
        return ['#037BFC', '#00C3FF']
    }
    else{
        return ['#d9cd2b', '#f5d64e']
    }
}

class Card extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            image: calendar_icon,
        }
    }

    render(){
        var {title, leftcolor, rightcolor, date, Check} = this.props
        leftcolor=colordate(date?.replaceAll("-",""))[0]
        rightcolor = colordate(date?.replaceAll("-",""))[1]
        return(
            <div className="card mx-auto User-Info"
            style={{
                backgroundImage: `linear-gradient(to right, ${leftcolor}, ${rightcolor}`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.image} className="image float-right"/>
                        </div>
                        <div className="col-6">
                            <p>{title}</p>
                        
                            <input type="checkbox" name="checkbox" id={this._reactInternals.key} />
                            
                            <p>{date?.split("-", 3).reverse()[0] + '/' + date?.split("-", 3).reverse()[1] + '/' + date?.split("-", 3).reverse()[2]}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card