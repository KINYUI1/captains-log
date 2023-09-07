const React = require('react')
const DefaultLayout = require('./Layout/default')

const Index = ({logs})=>{
    return <DefaultLayout>
    <div>
        <h2>Logs</h2>
        <ul>
        {logs.map((log)=>{
            return<div><li><a href={`show/${log._id}`}>{log.title} Created at: {log.createdAt.toString()}</a></li>
             <form method="POST" action={`/logs/${log._id}?_method=DELETE`}>
                <input type="submit" value='DELETE'/>
              </form>
            </div>
            })}
            </ul>
    </div>
    </DefaultLayout>
}

module.exports = Index