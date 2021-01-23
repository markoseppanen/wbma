/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {ListItem} from './ListItem';

const url = 'http://media.mw.metropolia.fi/wbma';

const List = () => {
  const [mediaArray, setmediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(`${url}/media`);
      const json = await response.json();
      const media = await Promise.all(
        json.map(async (item) => {
          const response = await fetch(`${url}/media/${item.file_id}`);
          const json = await response.json();
          return json;
        })
      );

      console.log(media);

      setmediaArray(media);
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
