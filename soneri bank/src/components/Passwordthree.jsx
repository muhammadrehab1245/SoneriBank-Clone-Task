import React, { useContext } from 'react'
import { useFormik } from "formik";
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { FaArrowLeft ,FaArrowRight } from "react-icons/fa6";
import {  UsernameSchemaforpassword } from '../Validation/validationsignup';
import Notecontext from '../context/Notecontext';
export const Passwordthree = () => {
  const context=useContext(Notecontext)
  const { PageNavigate, dataStore, data,t } = context

  const initialValues={
    username:data.username!==undefined?data.username:"",
      cUsername: data.cUsername!==undefined?data.cUsername:""
  }
  const formik =useFormik({
    initialValues: initialValues,
    validationSchema: UsernameSchemaforpassword,
   onSubmit: async (values) => {
    console.log('aa')
    dataStore({username:values.username,cUsername:values.cUsername})
    PageNavigate('/header/forgotpassword4')
  }
  })
  
  const PrevStep=()=>{
    PageNavigate('/header/forgotpassword2')
  }
  return (
    <>
    <Stack align='center'>
    <Typography position={'relative'} bottom={134} color={'white'}>{t('credentials')}</Typography>
        <Typography variant='caption' component="h2">label={t('credentialsdes')} </Typography>

<form onSubmit={formik.handleSubmit}>

      <Stack    align='center' >
      <Box
  
      sx={{
        '& > :not(style)': { m:2,width: '48%' },
      }}
    >
      <TextField  id="username" name='username' onChange={formik.handleChange}
               onBlur={formik.handleBlur}
                value={formik.values.username}  sx={{  borderLeft: '5px solid black'}} label={t('cuname')}variant="outlined" />
   {formik.errors.username && formik.touched.username ? (
                      <Typography color='orange'  textAlign={'center'} fontSize='xs'>{formik.errors.username}</Typography>
                    ) : null}
      </Box>
      </Stack>
      <Stack  justifyContent={'center'} direction='row'>
      <Box    sx={{
        '& > :not(style)': { m:2,width: '2%',borderRadius:26 },
      }}> 
    <Button onClick={PrevStep}    sx={{ backgroundColor: "#052CAC", color: "white", width: 150,'&:hover': {
    backgroundColor: '#052CAC',
  }, }} margin='auto'  variant="contained"><FaArrowLeft size={17}/></Button>
      </Box>
      <Box    sx={{
        '& > :not(style)': { m:2,width: '2%',borderRadius:26 },
      }}> 

    <Button  type='submit' disabled={formik.values.cUsername.length === 0 && formik.values.username.length === 0}  sx={{ backgroundColor: "#052CAC", color: "white", width: 150,'&:hover': {
    backgroundColor: '#052CAC',
  }, }} margin='auto'  variant="contained"><FaArrowRight size={17}/></Button>
      </Box>
      </Stack>
    </form>
    </Stack>
    </>
  )
}
