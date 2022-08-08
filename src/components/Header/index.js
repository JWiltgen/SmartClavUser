import { View, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import React from "react";
import { styles } from "./styles";
import { Person24Regular } from "@fluentui/react-icons/lib/sizedIcons/chunk-14";
import { Alert24Regular } from "@fluentui/react-icons/lib/sizedIcons/chunk-0";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={[{ paddingRight: 25 }]} >
        <TouchableOpacity>
          <Alert24Regular />
        </TouchableOpacity>  
      </View>
      <View style={[{ paddingRight:15 }]} >
        <TouchableOpacity>
          <Person24Regular/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
