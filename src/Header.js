import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

//COMPONENETS
import WordList from './WordList';

const Header = () => {
   const history = useHistory();
    return (
       <>
          <Head>
             <HeadTitle
                onClick={() => {
                   history.push('/');
                }}
             >
                VOCABULARY NOTE
             </HeadTitle>
             <hr />
          </Head>
       </>
    );
}
const Head = styled.div`
   display: block;
   position: fixed;
   width: 100%;
   top: 0;
   background-color: #fff;
`;

const HeadTitle = styled.h2`
   font-size: 2rem;
   color: #4900ff;
   &:hover,
   &:active,
   &:focus {
      cursor: pointer;
   }
`;

export default Header;