import React, { useState } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "ivory" }}>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 24, marginBottom: 10, textAlign: "center" }}>
          {" "}
          Count: {count}
        </Text>
        <View style={{ backgroundColor: "green", marginBottom: 10 }}>
          <Button title="Increment" onPress={() => setCount(count + 1)} />
        </View>
        <View style={{ backgroundColor: "green", marginBottom: 10 }}>
          <Button title="Decrement" onPress={() => setCount(count - 1)} />
        </View>
        <View style={{ backgroundColor: "green", marginBottom: 10 }}>
          <Button
            title="Increase by 2"
            onPress={(prev) => setCount((prev) => prev + 2)}
          />
        </View>
        <View style={{ backgroundColor: "green", marginBottom: 10 }}>
          <Button
            title="Decrease by 2"
            onPress={(prev) => setCount((prev) => prev - 2)}
          />
        </View>
        <View style={{ backgroundColor: "green", marginBottom: 10 }}>
          <Button title="Reset" onPress={(prev) => setCount(0)} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Counter;
