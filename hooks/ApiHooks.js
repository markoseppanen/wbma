import {useEffect, useState} from 'react';

const url = 'http://media.mw.metropolia.fi/wbma';

const useLoadMedia = () => {
  const [mediaArray, setmediaArray] = useState([]);

  const loadMedia = async (limit = 5) => {
    try {
      const listResponse = await fetch(`${url}/media?limit=${limit}`);
      const listJson = await listResponse.json();

      const media = await Promise.all(
        listJson.map(async (item) => {
          const response = await fetch(`${url}/media/${item.file_id}`);
          const json = await response.json();
          return json;
        })
      );

      setmediaArray(media);
    } catch (e) {
      console.error('Error loading media', e);
    }
  };

  useEffect(() => {
    loadMedia(50);
  }, []);

  return mediaArray;
};

export {useLoadMedia};