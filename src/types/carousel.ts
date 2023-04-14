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
