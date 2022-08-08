import React, { useState } from "react";
import { Text, View } from "react-native";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";
import { colors } from '../../colors';

// Options data must contain 'item' & 'id' keys

export default function MultiSelect({ options, selected, setSelected }) {
  return (
    <View style={{ marginBottom: 20, width: "85%" }}>
      <View style={{ height: 40 }} />
      <Text style={{ fontSize: 16, paddingBottom: 10 }}>Selecionar grupos</Text>
      <SelectBox
        label=""
        inputPlaceholder="Pesquisar grupos"
        multiOptionContainerStyle={{ backgroundColor: `${colors.primary}` }}
        options={options}
        selectedValues={selected}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
        toggleIconColor={`${colors.primary}`}
        searchIconColor={`${colors.primary}`}
        arrowIconColor={`${colors.primary}`}
      />
    </View>
  );

  function onMultiChange() {
    return (item) => setSelected(xorBy(selected, [item], "id"));
  }
}
