import styled from 'styled-components';
import { Participant } from 'types';
import { ListCard } from './containers';

interface UserCardProps {
  userData: Participant;
}
export function UserCard({ userData }: UserCardProps) {
  const { nickname, id, email, role, thumbnail } = userData;
  id;
  email;
  role;
  thumbnail;
  styled;

  return <ListCard>{nickname}</ListCard>;
}
