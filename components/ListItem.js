import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ListItem = ({singleMedia: item}) => {
  return (
    <TouchableOpacity style={styles.imagebox}>
      <Image style={styles.image} source={{uri: item.thumbnails.w160}} />
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
    marginLeft: 7,
    backgroundColor: '#fff',
    width: '95%',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textbox: {
    flex: 2,
    padding: 5,
  },
  textboxHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export {ListItem};
