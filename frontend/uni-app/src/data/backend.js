import { useState } from 'react';
import axios from 'axios';

export function useBackendData() {
    const [data, setData] = useState([]);


    const fetchData = async (endpoint) => {
        
        try {
            const response = await axios.get(`http://localhost:5000/${endpoint}`);
            setData(response.data);
        } catch (error) {
            console.log(error);
        } 
    };

    const updateData = async (endpoint, modulnummer, newValue) => {

        try {
            await axios.put(`http://localhost:5000/${endpoint}?modulnummer=${modulnummer}&newValue=${newValue}`);
            
            setData(fetchData(endpoint));
        } catch (error) {
            console.log(error);
        }
    };


    const deleteData = async (endpoint, modul) => {

        try {
            await axios.delete(`http://localhost:5000/${endpoint}/${modul}`)
            setData(fetchData(endpoint))
        }catch (error) {
            console.log(error)
        }
    }

    const newModul = async (endpoint, modulnummer, modul, lane) => {

        try {
            await axios.post(`http://localhost:5000/${endpoint}?modulnummer=${modulnummer}&modul=${modul}&lane=${lane}`)
            setData(fetchData(endpoint))
        }catch (error) {
            console.log(error)
        }
    }


    return { data, fetchData, updateData, deleteData, newModul };
}