import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import Button from './Button';
import { getStoreItemArray } from '../reducers';
import { useSelector } from 'react-redux';

const Cart = () => {
  const items = useSelector(getStoreItemArray);
  //const subtotal = useSelector(getSubtotal);
  const state = useSelector(state => state)
  return <Wrapper>
            <Top>
                <h2>Your Cart</h2>
                <p>1 item</p>
                <ItemList>
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </ItemList>
            </Top>
            <Bottom>
                <p>Total: $12.34</p>
                <Button style={{ width: 140 }}>Purchase</Button>
            </Bottom>
        </Wrapper>;
};

const Wrapper = styled.div`
    position: sticky;
    top: 0;
    min-width: 300px;
    height: 100vh;
    background: #401f43;
    color: white;
    padding-top: 16px;
    padding-bottom: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Top = styled.div`
  max-height: calc(100vh - 240px);
  overflow: auto;
  padding-left: 32px;
  padding-right: 32px;
`;

const ItemList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  padding-top: 32px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 64px;
  padding-left: 32px;
  padding-right: 32px;
`;

export default Cart;