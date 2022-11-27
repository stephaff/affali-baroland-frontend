const initialState = {
    questions : [
        {
            title : "Comment faire une recherche dans mongoDB ?",
            contenu : "bla bla bla bla bla bla bla bla ",
            category : "React"
        },
        {
            title : "Comment faire une recherche dans mongoDB ?",
            contenu : "bla bla bla bla bla bla bla bla ",
            category : "PHP"
        },
        {
            title : "Comment faire une recherche dans mongoDB ?",
            contenu : "bla bla bla bla bla bla bla bla ",
            category : "MongoDB"
        },
        {
            title : "Comment faire une recherche dans mongoDB ?",
            contenu : "bla bla bla bla bla bla bla bla ",
            category : "HTML"
        },
        {
            title : "Comment faire une recherche dans mongoDB ?",
            contenu : "bla bla bla bla bla bla bla bla ",
            category : "Node JS"
        }
    ]
}

export function questionReducer(state = initialState, action){
    return state
}