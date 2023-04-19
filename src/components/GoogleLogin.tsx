import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { googleLogin } from 'api';
import styled from 'styled-components';

export function GoogleLoginButton() {
  const clientId = process.env.REACT_APP_API_GOOGLE_API_KEY as string;

  const googleLoginHandler = async () => {
    await googleLogin();
  };

  return (
    <Wrapper>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin onSuccess={googleLoginHandler} />
      </GoogleOAuthProvider>
    </Wrapper>
  );
}

export default GoogleLoginButton;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
