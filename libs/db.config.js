import {connect} from "mongoose"

export function connectDatabase(){
    return connect('mongodb://127.0.0.1:27017/shopping')
}