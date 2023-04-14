type Title = string;

export interface TextDataType {
  mainTitle: Title;
  subTitle: Title;
  pointTitle?: Title[];
}

export interface CarouselComponentProps {
  imgSrc: string;
  textData: TextDataType;
}

export interface CarouselTextProps {
  textData: TextDataType;
}

interface ImgsState extends TextDataType {
  src: string;
}

export interface CarouselState {
  index: number;
  imgs: ImgsState[];
  intervalRef: NodeJS.Timer | any;
}
