import React, { useState } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

const useAxios = (baseUrl) => {
    const [data, setData] = useState([])
     const addData = async (name) => {
        const APIurl = name ? `${baseUrl}${name}` : baseUrl;
        const response = await axios.get(APIurl)
         setData(data => [...data, {...response.data, id: uuid()}]);
      };

      return [data, addData];
}

export default useAxios;