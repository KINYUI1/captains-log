const React = require('react')
const DefaultLayout = require('./Layout/default')

const New = ()=>{
    return <DefaultLayout>
    
    <form action='/logs' method='POST'>
        <label htmlFor="title">Log Title: </label>
        <input type='text' id='title' name='title'/><br/>
        <label htmlFor='entry'>Log Entry: </label>
        <textarea type='textarea' id='entry' name='entry'/><br/>
        <label htmlFor='shipIsBroken'>Is Ship Broken: </label>
        <input type='checkbox' id='shipIsBroken' name='shipIsBroken'/><br/>
        <input type='submit' value='Submit'/>
    </form>
    </DefaultLayout>
}

module.exports = New