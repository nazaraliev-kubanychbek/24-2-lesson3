
const ADD_CAR = 'ADD_CAR';
const INCREMENT_NUM = 'INCREMENT_NUM';
const DECREMENT_NUM = 'DECREMENT_NUM';

const initState = {
    num: 0,
    cars:[
        {
            model: "BMW",
            year: 2017
        },
        {
            model: "Honda",
            year: 2015
        },
        {
            model: "Audi",
            year: 2010
        },
        {
            model: "Toyota",
            year: 2020
        },
        {
            model: "Mercedes",
            year: 2016
        }
    ]

};


export default (state = initState, action) => {
    switch (action.type) {

        case ADD_CAR :{
            return {
                cars: [
                    action.newCar,
                    ...state.cars
                ],
                ...state
            }
        }

        case INCREMENT_NUM:{
            return {
                ...state,
                num: state.num + 1
            }
        }

        case DECREMENT_NUM:{
            return {
                ...state,
                num: state.num - 1
            }
        }

        default: return state
    }

}


export const addCar = () =>{
    return (dispatch) =>{
        dispatch({type:ADD_CAR, newCar: {
            model: 'Nissan GTR R35',
            yer: 2015,
        }})
    }
}

export const incrementNum = () =>{
    return (dispatch) =>{
        dispatch({type: INCREMENT_NUM})
    }
}


export const decrementNum = () =>{
    return (dispatch) =>{
        dispatch({type: DECREMENT_NUM})
    }
}
