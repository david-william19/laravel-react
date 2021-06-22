import React from 'react'

const appContainer = ({ title, children }) => {
    return (
        <div>
            <div className="card m-5">
                <div className="card-header">
                    <h2 className="text-center my-3">{title}</h2>
                </div>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default appContainer
