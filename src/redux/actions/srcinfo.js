import * as types from './types'
import { API, graphqlOperation } from 'aws-amplify'
import { getFile } from '../../graphql/queries'
import {Storage} from 'aws-amplify'
import {updateFile} from '../../graphql/mutations'

export const uploadFile = (file)  => async dispatch => {
    try{
        dispatch({type: types.UPLOADFILE_REQUEST})
        let srcinfo=[]
        const srcname = URL.createObjectURL(file)
        const srctype = file.name.substring(file.name.lastIndexOf('.')+1)
        srcinfo.push(srcname)
        srcinfo.push(srctype)
        srcinfo.push(file)
        dispatch({type: types.UPLOADFILE_SUCCESS, payload: srcinfo})
    }
    catch(error)
    {
        dispatch({type: types.UPLOADFILE_FAIL, payload: error.message})
    }
}

export const saveFile = (id, src) => async dispatch => {
    try{
        dispatch({type: types.SAVEFILE_REQUEST})
        console.log('reduxsrc',src)
        const file=src
        let filename=Date.now().toString()+file.name
        await Storage.put(`documents/${filename}`, file, {
            contentType: file.type,
        })
        let srcname=`${process.env.REACT_APP_S3BUCKET}public/documents/${filename}`
        await API.graphql(graphqlOperation(updateFile, {input: {id: id, src: srcname}}))
        dispatch({type: types.SAVEFILE_SUCCESS})
    }
    catch(error)
    {
        dispatch({type:types.SAVEFILE_FAIL, payload: error.message})
    }
}

export const previewFile = (id) => async dispatch => {
    try{
        dispatch({type:types.PREVIEWFILE_REQUEST})
        let srcdata = ''
        await API.graphql(graphqlOperation(getFile, {id: id})).then(result => {
            srcdata = result.data.getFile.src
        })
        let srcinfo = []
        srcinfo.push(srcdata)
        srcinfo.push(srcdata.substring(srcdata.lastIndexOf('.')+1))
        dispatch({type:types.PREVIEWFILE_SUCCESS, payload: srcinfo})
    }
    catch(error)
    {
        dispatch({type:types.PREVIEWFILE_FAIL, payload: error.message})
    }
}
