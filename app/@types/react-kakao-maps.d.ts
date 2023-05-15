declare module 'react-kakao-maps' {
  import { FC } from 'react';

  export interface MapProps {
    options: {
      center: any;
      level: number;
    };
    style?: React.CSSProperties;
    center?: any;
    level?: number;
  }

  export interface MarkerProps {
    position: any;
    image?: any;
  }

  export const Map: FC<MapProps>;
  export const Marker: FC<MarkerProps>;
}
