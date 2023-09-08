const React = require('react')
const DefaultLayout = require('./Layout/default')

const Edit = ({log})=>{
    return(<DefaultLayout>
        <form method='post' action={`/logs/${log._id}?_method=Put`}>
        <form action='/logs' method='POST'>
        <label htmlFor="title">Log Title: </label>
        <input type='text' id='title' name='title' defaultValue={log.title}/><br/>
        <label htmlFor='entry'>Log Entry: </label>
        <textarea type='textarea' id='entry' name='entry' defaultValue={log.entry}/><br/>
        <label htmlFor='shipIsBroken'>Is Ship Broken: </label>
        <input type='checkbox' id='shipIsBroken' name='shipIsBroken' defaultChecked={log.shipIsBroken}/><br/>
        <input type='submit' value='Submit'/>
    </form>
        </form>
    </DefaultLayout>)
}

module.exports = Edit;