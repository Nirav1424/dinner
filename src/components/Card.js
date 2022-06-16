import React from 'react'

const Card = ({ menuData }) => {
    return (
        <>

            <section className="main-card--cointainer">

                {menuData.map((curentEle) => {

                    const { id, name, price, description } = curentEle;
                    return (
                        <>
                            <div className="col-3" key={id}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={curentEle.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                        <p className="card-text">
                                            {description}
                                        </p>
                                        <a href="/" className="btn btn-sm btn-success   ">
                                            {price}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}



export default Card;