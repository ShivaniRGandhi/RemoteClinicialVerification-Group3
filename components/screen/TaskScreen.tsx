import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from "../Task";

const TaskScreen = () => {
const [taskCompleted, setTaskCompleted] = useState(false)
  let tasks = [
    { title: "Blood Test 1", completed: taskCompleted },
    { title: "Blood Test 2", completed: taskCompleted },
  ];
useEffect(() => {
    
    return () => {
        console.log(taskCompleted)
    }
}, [taskCompleted])
  return (
    <View>
      <Task task={tasks[0]} />
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({});
