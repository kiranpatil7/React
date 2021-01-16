import * as ActionTypes from './ActionTypes';
//import { DISHES } from '../shared/dishes'
import { baseUrl } from '../shared/baseUrl'

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment

});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(responce => {
            if (responce.ok) {
                return responce;
            }
            else {
                var errMess = new Error("Error" + responce.sthtatus + ": " + responce.statusText);
                errMess.responce = responce;
                throw errMess;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(responce => responce.json())
        .then(dishes => dispatch(addComment(dishes)))
        .catch(error => { console.log('post comments', error.message); alert('Your comment could not be posted\nError: ' + error.message) });

}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(responce => {
            if (responce.ok) {
                return responce;
            }
            else {
                var errMess = new Error("Error" + responce.sthtatus + ": " + responce.statusText);
                errMess.responce = responce;
                throw errMess;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(responce => responce.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))
}

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(responce => {
            if (responce.ok) {
                return responce;
            }
            else {
                var errMess = new Error("Error" + responce.sthtatus + ": " + responce.statusText);
                errMess.responce = responce;
                throw errMess;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(responce => responce.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))
}
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(responce => {
            if (responce.ok) {
                return responce;
            }
            else {
                var errMess = new Error("Error" + responce.sthtatus + ": " + responce.statusText);
                errMess.responce = responce;
                throw errMess;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});
export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});