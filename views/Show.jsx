const React = require('react')
const DefaultLayout = require('./Layout/default')

const Show = ({log})=>{
    return <DefaultLayout>
        <div>
            <h2>{log.title}</h2>
            <p>{log.entry}</p>
        </div>
    </DefaultLayout>
}

module.exports = Show;