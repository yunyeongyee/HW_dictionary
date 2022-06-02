import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Footer = () => {
    const history = useHistory();
   return (
      <FooterDiv>
         <CircleBtn>
            <CircleShape
               onClick={() => {
                  history.push('/add');
               }}
            >
               +
            </CircleShape>
         </CircleBtn>
         </FooterDiv>
   );
};

const FooterDiv = styled.div`
   position: fixed;
   bottom: 0;
   right: 0;
   margin: 10px;
`;

const CircleBtn = styled.button`
   margin: 10px 20px;
   float: right;
   width: 50px;
   height: 50px;
   border: 1px solid transparent;
   border-radius: 50%;
   background-color: #4900ff;
   color: #fff;

   &:hover {
      transform: translate(0%, -30%);
      transition: 0.3s ease-out;
      animation-iteration-count: 1;
   }
`;

const CircleShape = styled.h1`
   margin: auto;
   display: flex;
   flex-direction: columns;
   align-items: center;
   justify-content: center;
   position: relative;
   bottom: 5px;
   font-size: 50px;
`;
export default Footer;
