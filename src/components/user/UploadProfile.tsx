import styled from 'styled-components';
import { useEffect, useState } from 'react';

type ProfileState = string | ArrayBuffer | undefined | any;
interface UploadProfileProps {
  imageSrc: ProfileState;
}

export default function UploadProfile({ imageSrc }: UploadProfileProps) {
  const [profile, setProfile] = useState<ProfileState>();
  const loadImage = (e: React.ChangeEvent) => {
    console.log('change');
    const target = e.currentTarget as HTMLInputElement;
    const files = target.files as FileList;
    const image = files[0];

    const formData = new FormData();
    formData.append('image', image);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(image);
    fileReader.onloadend = () => {
      const resultImage = fileReader.result;
      setProfile(resultImage);
    };
  };
  console.log(profile);

  useEffect(() => {
    setProfile(imageSrc);
  }, []);

  return (
    <>
      <ImageLabel htmlFor="profileImageInput" imageSrc={profile}>
        <Image src={profile} />
      </ImageLabel>
      <Form>
        <input
          id="profileImageInput"
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

const ImageLabel = styled.label<{ imageSrc: ProfileState }>`
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
