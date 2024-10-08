import {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {Dimensions, ImageSource} from '../@types';
import {getAttachmentUrl} from 'utils/utils';

const CACHE_SIZE = 50;

type CacheStorageItem = {key: string; value: any};

const createCache = (cacheSize: number) => ({
  _storage: [] as CacheStorageItem[],
  get(key: string): any {
    const {value} =
      this._storage.find(({key: storageKey}) => storageKey === key) || {};

    return value;
  },
  set(key: string, value: any) {
    if (this._storage.length >= cacheSize) {
      this._storage.shift();
    }

    this._storage.push({key, value});
  },
});

const imageDimensionsCache = createCache(CACHE_SIZE);

const useImageDimensions = (image: ImageSource): Dimensions | null => {
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const getImageDimensions = (image: ImageSource): Promise<Dimensions> => {
    return new Promise(resolve => {
      if (image.url) {
        const source = image as any;
        const cacheKey = getAttachmentUrl(source.url) as string;
        const imageDimensions = imageDimensionsCache.get(cacheKey);
        if (imageDimensions) {
          resolve(imageDimensions);
        } else {
          Image.getSizeWithHeaders(
            // @ts-ignore
            getAttachmentUrl(source.url),
            source.headers,
            (width: number, height: number) => {
              imageDimensionsCache.set(cacheKey, {width, height});
              resolve({width, height});
            },
            () => {
              resolve({width: 0, height: 0});
            },
          );
        }
      } else {
        resolve({width: 0, height: 0});
      }
    });
  };

  let isImageUnmounted = false;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    getImageDimensions(image).then(dimensions => {
      if (!isImageUnmounted) {
        setDimensions(dimensions);
      }
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      isImageUnmounted = true;
    };
  }, [image]);

  return dimensions;
};

export default useImageDimensions;
