import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const uploads = 'http://media.mw.metropolia.fi/wbma/uploads';

const ListItem = ({singleMedia: item}) => {
  return (
    <TouchableOpacity style={styles.imagebox}>
      <Image
        style={styles.image}
        source={{uri: `${uploads}/${item.thumbnails.w320}`}}
      />
      <View style={styles.textbox}>
        <Text style={styles.textboxHeader}>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imagebox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    backgroundColor: '#E7D7C1',
    width: '95%',
    borderRadius: 5,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 5,
  },
  textbox: {
    flex: 2,
    padding: 5,
  },
  textboxHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C15721',
  },
});

export {ListItem};
