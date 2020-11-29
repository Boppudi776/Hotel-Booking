import React, { useState } from 'react'
import './Hotel.css';

function Hotel() {
    const [rooms, setRooms] = useState(1)
    const [adults, setAdults] = useState(2)
    const [children, setChildren] = useState(0)
    const decrementrooms = () => {
        setRooms(

            rooms > 1 ? rooms - 1 : rooms

        )
        
    }
    const incrementrooms = () => {
        setRooms(

            rooms < 5 ? rooms + 1 : rooms

        )
    }
    const decrementadults = () => {
        setAdults(

            adults > 1 ? adults - 1 : adults

        )
        
    }
    const incrementadults = () => {
        setAdults(

            adults < 4 ? adults + 1 : adults

        )
    }
    const decrementchildren = () => {
        setChildren(

            children > 0 ? children - 1 : children

        )
        
    }
    const incrementchildren = () => {
        setChildren(

            children < 4 ? children + 1 : children

        )
    }
    return (
        <div className="container">
            <h3><span className="fa fa-users mani"></span>Choose Number of<b> people</b></h3>
            <div className="border">
                <div>
                    <p>
                        <span className="fa fa-bed icon-size"></span>
                        <span className="marginleft fontsize">ROOMS</span>
                        <span className="floatright">
                            <button type="button" onClick={() => decrementrooms()} className="btnpad btnradius btncolor leftbtn">
                                <span className="glyphicon glyphicon-minus"></span>
                            </button>
                            {rooms}
                            <button type="button" onClick={() => incrementrooms()} className="btnpad btnradius btncolor rightbtn">
                                <span className="glyphicon glyphicon-plus"></span>
                            </button>
                        </span>
                    </p>
                </div>
                <hr className="hrborder" />

                <div>
                    <p><span className="glyphicon glyphicon-user icon-size"></span>
                        <span className="marginleft fontsize">ADULTS</span>
                        <span className="floatright">
                            <button type="button" onClick={() => decrementadults()} className="btnpad btnradius btncolor leftbtn">
                                <span className="glyphicon glyphicon-minus"></span>
                            </button>
                            {adults}
                            <button type="button" onClick={() => incrementadults()} className="btnpad btnradius btncolor rightbtn">
                                <span className="glyphicon glyphicon-plus"></span>
                            </button>
                        </span>
                    </p>
                </div>
                <hr className="hrborder" />

                <div>
                    <p><span className="fa fa-child icon-size"></span>
                        <span className="marginleft fontsize">CHILDREN</span>
                        <span className="floatright">
                            <button type="button" onClick={() => decrementchildren()} className="btnpad btnradius btncolor leftbtn">
                                <span className="glyphicon glyphicon-minus"></span>
                            </button>
                            {children}
                            <button type="button" onClick={() => incrementchildren()} className="btnpad btnradius btncolor rightbtn">
                                <span className="glyphicon glyphicon-plus"></span>
                            </button>
                        </span>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Hotel
