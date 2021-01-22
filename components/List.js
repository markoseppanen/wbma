/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {ListItem} from './ListItem';

const url =
  'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';
const loadMedia = async () => {
  const response = await fetch(url);
  const json = await response.json();
  //console.log(json);
};

loadMedia();

const List = () => {
  const [mediaArray, setmediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const resp = await fetch(url);
      const json = await resp.json();
      setmediaArray(json);
    } catch (e) {
      console.error('Error loading media', e);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};

export {List};
