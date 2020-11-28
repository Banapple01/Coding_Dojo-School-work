import React, { useState } from 'react'

const Tabs = props => {
    const { tabs } = props;
    const [active, setActive] = useState(0);

    return (
        <>
        <div className="row">
            {
                tabs.map((item, i) =>{ 
                    if(i == active) {
                        return <button key={ i } className="col btn btn-primary" onClick={() => setActive(i) }>{item.title}</button>
                    } else {
                        return <button key={ i } className="col btn btn-secondary" onClick={() => setActive(i) }>{item.title}</button>
                    }
                })
            }
        </div>
        <div className="row">
            <div className="col-sm-12">
                <p>{tabs[active].content}</p>
            </div>
        </div>
        </>
    )
}

export default Tabs
