import React, { useState } from "react";
import { View , Text, Button, Alert} from "react-native";

const Data=()=>{
const [showData, setShowData] = useState('')
const saveApiData= async()=>{

    const data ={
        phonenumber : 8218110809
    }
    const url = 'https://chimpu.xyz/api/post.php';
    let result = await fetch(url, {
        method:'POST',
        headers:{ 'Content-Type' : "application/json"},
        body: JSON.stringify(data)
    })
        dataResult = await result.json();
        Alert.alert('Success',JSON.stringify(dataResult))

        const headerData = result.headers
        const allHeaders = {};
        headerData.forEach((value,name) => {
            allHeaders[name] = value
        });




        setShowData(allHeaders)
}




    return(
        <View>
           <Button title="Send No." onPress={()=>saveApiData()}/>
           {Object.keys(showData).map((key, index) => (
            <Text key={index}>{`${key}: ${showData[key]}`}</Text>
          ))}
        </View>
    )
}



export default Data