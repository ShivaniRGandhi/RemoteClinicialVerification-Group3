import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from "../Task";
import CustomButton from "../button/CustomButton";
const TaskScreen = (props) => {
  const [taskCompleted, setTaskCompleted] = useState(false);

  const { navigation, route } = props;
  const { tasks } = route.params;
  let count = 0;
  const onCheckBox = (value) => {
    
    if (value) count++;
    else count--;
    if(count < 0)
      count = 0;
    if (count == tasks.length) setTaskCompleted(true);
    else setTaskCompleted(false);
    console.log(count)
  };

  // useEffect(() => {
  //   return () => {
  //     console.log(taskCompleted);
  //   };
  // }, []);

  return (
    <View>
      {tasks.map((task) => {
        return <Task key={task.key} data={task} onValueChange={onCheckBox} />;
      })}

      <CustomButton
        disabled={!taskCompleted}
        title="FINISH"
        onPress={() => {
        
        }}
      />
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({});
