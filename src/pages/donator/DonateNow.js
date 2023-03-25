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
import {DashboardLayout} from "../../components/dashboard-layout";

const DonateNow = () => {
    const [role, setRole] = useState([])
    const [charityOrg, setCharityOrg] = useState('')
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
                        <Typography variant="h5" sx={{ml: 2}}>Donate Now</Typography>
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
                                    <TextField required {...register('orgName')} name="orgName" label="Organizatin Name" type="text" fullWidth/>
                                </Grid>

                                <Grid item xs={12} sm={6}> 
                                <TextField required {...register('typeOfFood')}  name="typeOfFood" label="Type of food" type="text" fullWidth/>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField required {...register('quantity')}  name="quantity" label="Quantity" type="number" fullWidth/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required {...register('donationSchedule')}  name="donationSchedule" label="Donation schedule" type="date" fullWidth/>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField required {...register('foodDetails')}  name="foodDetails" label="Food details" type="text" fullWidth/>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Charity Org</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={charityOrg} 
                                            label="charityOrg"
                                            onChange={(e)=>setCharityOrg(e.target.value)}
                                        >
                                            
                                                    <MenuItem value="abc">ABC</MenuItem>
                                                    <MenuItem value="xzc">XZC</MenuItem>

                                                

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField  {...register('expireDate')}  name="expireDate" label="Expiration Date" type="date" fullWidth/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField {...register('additionnalInfo')}  name="additionnalInfo" label="Additional Information" type="text"
                                               fullWidth/>
                                </Grid>

                               

                                <Grid item xs={12} sm={12}>
                                    <Button type="submit" sx={{marginRight: "2rem", px: 6}} variant="contained">
                                        Donate
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

export default DonateNow;