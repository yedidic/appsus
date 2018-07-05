
var notes = [
    {type: 'text', title:"Dream 05/07/18", text: 'I dreamt I finished sprint 3 and then a monster with 3 heads ate me'},
    {type: 'text', title:"Dream 05/07/18", text: 'I dreamt I finished sprint 3 and then a monster with 3 heads ate me'},
]

function query() {
    console.log(notes);
    return Promise.resolve(notes);
}

export default {
    query
}