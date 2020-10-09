// write and export your action creator function here
export const fetchCats = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CATS' })
        fetch('http://learn-co-curriculum.github.io/cat-api/cats.json')
            .then(response =>  response.json())
            .then(responseJSON => {
                dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
            })
    }
}