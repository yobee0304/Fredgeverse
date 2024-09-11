import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { KeyboardAvoidingView } from 'react-native';

const AddIngredients = () => {
  const [materialName, setMaterialName] = useState('');
  const [category, setCategory] = useState('야채');
  const [quantity, setQuantity] = useState('');
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openUnit, setOpenUnit] = useState(false);
  const [items, setItems] = useState([
    { label: '야채', value: '야채' },
    { label: '과일', value: '과일' },
    { label: '고기', value: '고기' },
    { label: '생선', value: '생선' },
  ]);
  const [units, setUnits] = useState([
    { label: '그램', value: 'g' },
    { label: '개수', value: 'ex' },
  ]);
  const [selectedUnit, setSelectedUnit] = useState('g');

  useEffect(() => {
    if (openCategory) {
        setOpenUnit(false);
    }
  }, [openCategory]);

  useEffect(() => {
    if (openUnit) {
        setOpenCategory(false);
    }
  }, [openUnit]);

  const onDateChange = (selectedDate) => {
    setExpiryDate(selectedDate || expiryDate);
    hideDatePicker();
  };

  const handleOutsidePress = () => {
    Keyboard.dismiss();

    if (openCategory) {
      setOpenCategory(false);
    }
    if (openUnit) {
      setOpenUnit(false);
    }
  };

  const closeDropDowns = () => {
    setOpenUnit(false);
    setOpenCategory(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const submitIngredient = () => {
    console.log('<< 재료 정보 >>');
    console.log('재료 명 : ' + materialName);
    console.log('카테고리 : ' + category);
    console.log('제품 양 : ' + quantity);
    console.log('단위 : ' + selectedUnit);
    console.log('유통기한 : ' + expiryDate);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={styles.innerContainer}>
          <Text style={styles.header}>재료 추가 하기</Text>
          
          <View style={styles.formGroup}>
            <Text style={styles.label}>재료 명 :</Text>
            <TextInput
              style={[styles.input, { width: '60%' }]}
              placeholder="재료 명"
              value={materialName}
              onChangeText={setMaterialName}
              onPress={closeDropDowns}
            />
          </View>

          <View style={[styles.formGroup, { zIndex: 1000 }]}>
            <Text style={styles.label}>카테고리 :</Text>
              <DropDownPicker
                open={openCategory}
                value={category}
                items={items}
                setOpen={setOpenCategory}
                setValue={setCategory}
                setItems={setItems}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
              />
          </View>
          
          <View style={[styles.formGroup, { zIndex: 900 }]}>
            <Text style={styles.label}>제품 양 :</Text>
            <TextInput
              style={[styles.input, { width: '20%' }]}
              placeholder="0"
              keyboardType="numeric"
              value={quantity}
              onChangeText={setQuantity}
              onPress={closeDropDowns}
            />
            <DropDownPicker
              open={openUnit}
              value={selectedUnit}
              items={units}
              setOpen={setOpenUnit}
              setValue={setSelectedUnit}
              setItems={setUnits}
              style={[styles.dropdown, { marginLeft: 10 }]}
              dropDownContainerStyle={[styles.dropdownContainer, { marginLeft: 10 }]}
            />
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.label}>유통기한 :</Text>
            <TouchableOpacity onPress={showDatePicker}>
              <Text style={styles.dateText}>{expiryDate.toISOString().split('T')[0]}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              display="inline"
              onConfirm={onDateChange}
              onCancel={hideDatePicker}
              locale="ko"
              isDarkModeEnabled={true}
              confirmTextIOS="확인"
              cancelTextIOS="취소"
            />
          </View>
          
          <Button title="확인" onPress={submitIngredient} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  formGroup: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    width: 100
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    width: 100
  },
  dateText: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});

export default AddIngredients;
