export const fetchCats = () => {
    return (dispatch) => {
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
            .then(resp => resp.json())
            .then(json => dispatch({type: 'ADD_CATS', cats: json.images}))
            .catch(error => console.error(error))
        dispatch({type: 'LOADING_CATS'})
    }
}

// Can I write the following instead??

// function fetchCats(dispatch) {
//     fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
//             .then(resp => resp.json())
//             .then(json => dispatch({type: 'ADD_CATS', json}))
//             .catch(error => console.error(error))
//         dispatch({type: 'LOADING_CATS'})
// }