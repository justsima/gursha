import React, {useState, useEffect} from "react";
import {
    FormControl,
    FormLabel,
    FormControlLabel,
    TextField,
    MenuItem,
    Select,
    FormGroup,
    Checkbox,
    Box,
    Card,
    Button,
    InputLabel,
    ButtonBox,
    Container,
    Typography,
    Grid,
    DatePicker,
} from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import Cookie from "js-cookie";
import {toast, ToastContainer} from "react-toastify";
import {DashboardLayout} from "../components/dashboard-layout";

const Signup = () => {
    const [role, setRole] = useState([])
    const baseUrl = process.env.REACT_APP_BASE_URL
    const sucessNotify = (text) => toast.success(text);
    const errorNotify = (text) => toast.error(text);

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        if(data.password !== data.confirmPassword){
            return errorNotify("password doesn't match")
        }
        const req = {
            ...data,
            role:role
        }
        //
        console.log(req)

        // axios.post(`${baseUrl}Auth/register`,req,config)
        //     .then((res)=>{
        //         console.log(res)
        //         sucessNotify('Account added successfully')
        //     })
        //     .catch((err)=>{
        //         errorNotify('Account add failed')
        //         console.log(err)
        //     })

    };



    return (
        <DashboardLayout>
            <ToastContainer />
            <Box component="main"
                 sx={{
                     overflowX: 'hidden',
                     // overf/lowY: "auto",
                 }}>
                <Grid container>
                    <Grid item lg={6} md={12} sm={12}>
                        <Typography variant="h5" sx={{ml: 2}}>Create account</Typography>
                    </Grid>
                    <Grid item lg={12} sm={12} md={12}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container
                                  spacing={2}
                                // columns={{xs: 4, md: 3}}
                                  sx={{
                                      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                      p: 3,
                                      m: 1,
                                      mt: 3,
                                      pr: 6,
                                      backgroundColor: "white",

                                      borderRadius: "10px",
                                  }}>
                                    <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={role}
                                            label="Role"
                                            onChange={(e)=>setRole(e.target.value)}
                                        >
                                            
                                                    <MenuItem value="donator">Donators</MenuItem>
                                                    <MenuItem value="charity">Charity</MenuItem>

                                                

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required {...register('orgName')} name="orgName" label="Organizatin Name" type="text" fullWidth/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required {...register('tinNumber')}  name="tinNumber" label="Tin Number" type="text" fullWidth/>
                                </Grid>
                                
                                <Grid item xs={12} sm={6}>
                                    <TextField required {...register('email')}  name="email" label="Email" type="text" fullWidth/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required {...register('password')} name="password" label="Password" type="password" fullWidth/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required {...register('confirmPassword')}  name="confirmPassword" label="Confirm Password" type="password"
                                               fullWidth/>
                                </Grid>

                               

                                <Grid item xs={12} sm={12}>
                                    <Button type="submit" sx={{marginRight: "2rem", px: 6}} variant="contained">
                                        Create Account
                                    </Button>
                                    <Button variant="outlined">Cancel</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>

                {/*<LocalizationProvider dateAdapter={AdapterDateFns}>*/}

                {/*</LocalizationProvider>*/}
            </Box>
        </DashboardLayout>
    );
};

export default Signup;