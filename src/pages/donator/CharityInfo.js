import MaterialTable from "material-table";
import {Button, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Table from '../../components/Table'
import {DashboardLayout} from "../../components/dashboard-layout";
import React, {useState, useEffect} from "react";
import {ExportToExcel} from "../../components/ExportToExcel";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import Cookie from "js-cookie";
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

const CharityInfo = () => {
    const navigate = useNavigate();
    const fileName = "Region"; // here enter filename for your excel file
    const baseUrl = process.env.REACT_APP_BASE_URL
    const sucessNotify = (text) => toast.success(text);
    const errorNotify = (text) => toast.error(text);

    const columns = [
        {title: 'Organization Name', field: 'orgName'},
        {title: 'Address', field: 'address'},
        {title: 'Contact', field: 'contact'},
        {title: 'Status', field: 'status'},
        {title: 'Charitable causes', field: 'charitableCauses'},
    ]
    const [data, setData] = useState([
        {orgName: "Org1", address: "Address1", contact: "Contact1", status: "Status1", charitableCauses: "Cause1"},
        {orgName: "Org2", address: "Address2", contact: "Contact2", status: "Status2", charitableCauses: "Cause2"},
        {orgName: "Org3", address: "Address3", contact: "Contact3", status: "Status3", charitableCauses: "Cause3"},
        {orgName: "Org4", address: "Address4", contact: "Contact4", status: "Status4", charitableCauses: "Cause4"},
        {orgName: "Org5", address: "Address5", contact: "Contact5", status: "Status5", charitableCauses: "Cause5"},
    ])
    const config = {
        headers: {
            Authorization: "Bearer " + Cookie.get("token")
        }
    }

    useEffect(() => {
        axios.get(`${baseUrl}Region/getAll`)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const donate =()=>{
        navigate('/donatenow')
    }

    return (
        <DashboardLayout>
            <ToastContainer />
            <div className='w-full flex justify-between flex-col gap-5'>
                <Table
                    title="Charities"
                    columns={columns}
                    data={data}
                    isEditable={true}
                    actions={[
                        (rowData) => ({
                            icon: () => <BloodtypeIcon sx={{color: "green"}}/>,
                            tooltip: "Donate",
                            onClick: () => donate(rowData)
                        })
                    ]}
                />
            </div>
        </DashboardLayout>
    )
}

export default CharityInfo;