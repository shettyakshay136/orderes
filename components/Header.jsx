import React, { useState } from 'react';
import { View, TextInput, Modal, Text, TouchableOpacity , Image } from 'react-native';

const YourComponent = () => {
  const [firstModalVisible, setFirstModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);

  const openFirstModal = () => {
    setFirstModalVisible(true);
  };

  const openSecondModal = () => {
    setSecondModalVisible(true);
  };

  const closeFirstModal = () => {
    setFirstModalVisible(false);
  };

  const closeSecondModal = () => {
    setSecondModalVisible(false);
  };

  return (
    <View>
       <View style={{ flexDirection: 'row', display: 'flex', gap: 15, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10 }}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 40, width: 250, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5, }}>
          <Text onFocus={openFirstModal}>Color1</Text>
            
          <TouchableOpacity onPress={openSecondModal}>
            <Image source={require('../assets/delete.png')} style={{ width: 30, height: 25, resizeMode: 'contain', marginRight: 10 }} />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        transparent={true}
        visible={firstModalVisible}
        onRequestClose={closeFirstModal}
      >
        <View style={{ backgroundColor: '#000000aa', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', margin: 40, height: 450, padding: 8, borderRadius: 15 }}>
            <Text style={{ paddingHorizontal: 10, paddingVertical: 5, fontSize: 15, fontWeight: '500' }}>First Modal</Text>
            <View style={{ paddingLeft: 10, marginBottom: 10, borderWidth: 1, borderRadius: 5, borderStyle: 'dashed', borderColor: '#9747FF', borderTopColor: 'white', padding: 17, gap: 20 }}>
              <TextInput
                onFocus={openSecondModal} // Open second modal when this TextInput is focused
                style={{ height: 40, width: 'auto', borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5, fontSize: 12 }}
                placeholder='Colour1'
              />
              <TextInput
                style={{ height: 40, width: 'auto', borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5, fontSize: 12 }}
                placeholder='Minimum Order'
              />
              <TextInput
                style={{ height: 40, width: 'auto', borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5, fontSize: 12 }}
                placeholder='Sizes'
              />
              <TextInput
                style={{ height: 40, width: 'auto', borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5, fontSize: 12 }}
                placeholder='Art No.'
              />
              <TextInput
                style={{ height: 40, width: 'auto', borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5, fontSize: 12 }}
                placeholder='Prices'
              />
            </View>
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', gap: 10 }}>
              <TouchableOpacity style={{ backgroundColor: "#00060C", width: 120, height: 43, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', paddingHorizontal: 15 }}>
                <Text style={{ color: "white", fontSize: 15, fontFamily: 'poppins', fontWeight: 600 }}>Save</Text>
                {/* Add your save icon here */}
              </TouchableOpacity>
              <TouchableOpacity onPress={closeFirstModal} style={{ backgroundColor: "#00060C", width: 120, height: 43, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', paddingHorizontal: 15 }}>
                <Text style={{ color: "white", fontSize: 15, fontFamily: 'poppins', fontWeight: 600 }}>Cancel</Text>
                {/* Add your cancel icon here */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        visible={secondModalVisible}
        onRequestClose={closeSecondModal}
      >
        <View style={{ backgroundColor: '#000000aa', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', margin: 40, height: 450, padding: 8, borderRadius: 15 }}>
            <Text style={{ paddingHorizontal: 10, paddingVertical: 5, fontSize: 15, fontWeight: '500' }}>Second Modal</Text>
            {/* Your second modal content here */}
            <TouchableOpacity onPress={closeSecondModal} style={{ backgroundColor: '#00060C', width: 120, height: 43, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
              <Text style={{ color: 'white', fontSize: 15, fontFamily: 'poppins', fontWeight: '600' }}>Close Second Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default YourComponent;
