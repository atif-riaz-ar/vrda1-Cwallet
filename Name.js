import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { setEmail, setName } from "./store/nameSlice";
import {increment,decrement} from "./store/counterSlice";
const Name = () => {
  const dispatch=useDispatch();
  const name = useSelector((state: RootState)=>state.nameReducer.name);
  const email = useSelector((state:RootState)=>state.nameReducer.email);
  const counter= useSelector((state: RootState)=>state.counterReducer.counter)
  var texts = ""
  var text1=""

  let handleValue = () => {
    console.log("text----------->",texts)
    dispatch(setName(texts));
    dispatch(setEmail(text1));
  };
 return(
    <View>
    <TextInput
      inputAccessoryViewID="textId"
      placeholder="Enter name"
      onChangeText={(text) => texts = text}
    />
      <TextInput
        inputAccessoryViewID="emailId"
        placeholder="Enter email"
        onChangeText={(text) => text1 = text}
      />
    <Button title="submit" onPress={handleValue} />
    <Text style={{color:"red"}}>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>{ counter}</Text>
      <Button title="increment" onPress={()=>dispatch(increment())}/>
      <Button title="decrement" onPress={() =>dispatch(decrement(1))}/>
  </View>
 )}
export default Name;
