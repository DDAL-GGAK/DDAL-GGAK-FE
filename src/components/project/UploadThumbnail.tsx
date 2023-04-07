import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { setProjectThumbnail } from 'api';

type ThumbnailState = string | ArrayBuffer | undefined | any;
interface UploadThumbnailProps {
  imageSrc: ThumbnailState;
}

export function UploadThumbnail({ imageSrc }: UploadThumbnailProps) {
  const [thumbnail, setThumbnail] = useState<ThumbnailState>();
  const loadImage = async (e: React.ChangeEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    const files = target.files as FileList;
    const image = files[0];

    /* setProfile */
    const formData = new FormData();
    formData.append('image', image);
    await setProjectThumbnail(formData);

    /* renderProfile */
    const fileReader = new FileReader();
    fileReader.readAsDataURL(image);
    fileReader.onloadend = () => setThumbnail(fileReader.result);
  };

  useEffect(() => {
    setThumbnail(imageSrc);
  }, []);

  return (
    <>
      <ImageLabel htmlFor="thumbnailImageInput" imageSrc={thumbnail}>
        <Image src={thumbnail} />
      </ImageLabel>
      <Form>
        <input
          id="thumbnailImageInput"
          type="file"
          hidden
          accept="image/png, image/gif, image/jpeg"
          onChange={loadImage}
        />
      </Form>
    </>
  );
}

const Form = styled.form`
  background: rgba(0, 0, 0, 0.1);
`;

const ImageLabel = styled.label<{ imageSrc: ThumbnailState }>`
  width: 125px;
  height: 125px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  background-image: url(imageSrc);
  :hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
