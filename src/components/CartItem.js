import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { x } from 'react-icons-kit/feather/x';
import UnstyledButton from './UnstyledButton';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../actions';
import { getStoreItemArray } from '../reducers';

const CartItem = ({ item }) => {
  //const items = useSelector(getStoreItemArray);
  const dispatch = useDispatch();
  return (
  <Wrapper>
          <Header>
            <h2>{item.title}</h2>
            <CloseBtn 
              onClick={() => dispatch(removeItem(item.id))}
            >
              <Icon icon={x} />
            </CloseBtn>
          </Header>
          <Body>
            <p>Quantity:{' '}</p>
            <TextInput
              value={item.quantity}
              //onChange={(ev) => dispatch(updateQuantity(item.id, ev.target.value))}
              />
          </Body>
        </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px dashed rgba(255, 255, 255, 0.1);
  color: white;
  max-width: 400px;
`;

const Header = styled.div`
  color: white;
  display: flex;
  h2{
    padding-left: 10px;
    flex: 60%;
  }
`;

const Body = styled.div`
  display: flex;
  background-color: #440478;
  p{
    padding-left: 10px;
  }
`;

const CloseBtn = styled(UnstyledButton)`
  padding: 25px;
`;

const TextInput = styled.input`
  background: white;
  border: none;
  width: 30px;
  height: 30px;
  color: black;
  font-size: inherit;
  padding: 4px;
  text-align: center;
  font-weight: bold;
  margin-top: 8px;
  margin-left: 8px;
`;

export default CartItem;