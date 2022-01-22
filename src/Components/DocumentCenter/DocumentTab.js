import React, {useState, useEffect} from 'react'
import {Grid, Typography, Box, Button} from '@mui/material'
import {useStyle} from './Style'
import {styled} from '@mui/styles'
import {CustomSelect} from './CustomSelect'
import { NewCustomSelect } from './NewCustomSelect'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../Loader'
import { listDocuments} from '../../redux/actions/document'
import { toast } from 'react-toastify'
import { FileUploader } from "react-drag-drop-files"
import { uploadFile } from "../../redux/actions/srcinfo"
import FileViewer from "react-file-viewer"
import { UnsupportedComponent } from './UnsupportedComponent'
//import {PDFViewerComponent} from '../PDFViewerComponent'
//import { Document, Page } from 'react-pdf/dist/umd/entry.webpack'
//import { PDFViewer } from '@react-pdf/renderer'
//import { Document, Page } from "react-pdf"

const MainBox = styled(Box)({
    minHeight: '730px',
    background: '#3E3EFF21',
})

const DocButton = styled(Button)({
    background: '#3E3EFFE5 !important',
    fontSize: '16px !important',
    color: 'white !important',
    textTransform: 'none !important',
    borderRadius: '5px !important',
    margin: '0px 0px 10px 10px !important',
    boxShadow: '5px 3px 5px 3px #b5b5b5',
})

export const DocumentTab = ({create, setCreate, profiledata, groupdata}) => {
    const classes=useStyle()
    const [src, setSrc]=useState('')
    const [type, setType]=useState('')
    const dispatch= useDispatch()
    const handleChange = async (file) => {
        const reader = new FileReader()
        reader.onload = () => dispatch(uploadFile(file))
        reader.readAsDataURL(file)
    };

    useEffect(() => {
        async function fetchdata(){
            try{
                dispatch(listDocuments())
            }
            catch(err){
                toast.error(err.message)
            }
        }
        fetchdata()
    }, [dispatch])

    const docdata = useSelector(state => state.documents)
    const {loading, documents} = docdata
    const srcdata = useSelector(state => state.pdfsrc)
    const {pdfsrc, load} = srcdata
    useEffect(()=>{
        console.log("pdfsrc", pdfsrc)
        setSrc(pdfsrc[0])
        setType(pdfsrc[1])
    }, [pdfsrc])

    const onError = e => {
        console.log("error in file-viewer");
      };

    return(
        <>
        {loading?(<Loader/>):(<Grid container className={classes.maingrid} columnSpacing={2}>
            <Grid item xs={12} md={6}>
                <Typography sx={{color: '#3E3EFFAA', fontSize: '24px', padding: '6px 0px'}}>Document & Folders</Typography>
                <MainBox sx={{paddingTop: '20px'}}>
                    {documents?.length > 0 ? (
                    documents?.map((item, index) => 
                        <CustomSelect item={item} key={index} profiledata={profiledata} groupdata={groupdata}></CustomSelect>
                    )):("")}
                    {create?(<NewCustomSelect setCreate={setCreate}/>):(<div></div>)}
                </MainBox>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box className={classes.fullbetweenbox} sx={{alignItems: 'center'}}>
                    <Typography sx={{color: '#3E3EFFAA', fontSize: '18px'}}>Preview</Typography>
                    <FileUploader handleChange={handleChange} name="file" />
                </Box>
                <MainBox>
                {load?(<Loader/>):
                (<Box sx={{height: '730px'}}>
                     {type&&<FileViewer fileType={type} filePath={src} onError={onError} unsupportedComponent={UnsupportedComponent}/>}
                </Box>)}
                </MainBox>
            </Grid>
        </Grid>)}
        </>
    );
}