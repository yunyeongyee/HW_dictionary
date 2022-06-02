import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { db } from './firebase';
import { collection, doc, getDoc, getDocs, addDoc, deleteDoc } from 'firebase/firestore';
import { Store } from './redux/modules/Store';
import { loadWord, loadWordFB, deleteWord, deleteWordFB } from './redux/modules/Store';

//COMPONENTS
import Footer from './Footer';

const WordList = ({ list }) => {

   const history = useHistory();
   const ListData = useSelector((state) => state.Store.list) 
   const dispatch = useDispatch();

   React.useEffect(() => {
         dispatch(loadWordFB());
      }, []);

   return (
      <div>
         <CardContainer>
            {ListData.map((list, word_index) => {
               // console.log('list[word_index].id?', ListData[word_index].id);

               return (
                  <CardBox key={word_index}>
                     <ButtonDel
                        onClick={() => {
                           dispatch(deleteWordFB(ListData[word_index].id));
                           history.push('/');
                        }}
                     >
                        DELETE
                     </ButtonDel>

                     <CardBoxTitle>{list.word}</CardBoxTitle>

                     <CardBoxSubTitle>DESCRIPTION</CardBoxSubTitle>
                     <CardBoxContents>{list.description}</CardBoxContents>

                     <CardBoxSubTitle>EXAMPLE</CardBoxSubTitle>
                     <CardBoxContents2>{list.example}</CardBoxContents2>
                  </CardBox>
               );
            })}
         </CardContainer>
         
         <Footer />
     
      </div>
   );
};
const CardContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, 300px);
   gap: 1em;
   width: 100%;
   max-height: 100vh;
   height: 100vh;
   justify-content: center;
   align-items: center;
   overflow-x: hidden;
   overflow-y: auto;
`;
const CardBox = styled.div`
   max-width: 15rem;
   height: 15rem;
   padding: 1em;
   margin: 1em;
   border: 1px solid #4900ff;
   border-radius: 5px;
   background: transparent;
`;
const CardBoxTitle = styled.h1`
   color: #4900ff;
`;

const CardBoxSubTitle = styled.h4`
   color: #4900ff;
`;

const CardBoxContents = styled.p`
   line-height: 7px;
`;
const CardBoxContents2 = styled.p`
   color: #9e9e9e;
   line-height: 7px;
`;

const ButtonDel = styled.button`
   float: right;

   margin: 5px;
   padding: 5px;
   width: 70px;
   height: 27px;
   background-color: transparent;
   border: 1px solid #4900ff;
   border-radius: 5px;
   color: #4900ff;

   @keyframes push {
      50% {
         transform: scale(0.85);
      }

      100% {
         transform: scale(1);
      }
   }

   &:hover,
   &:active,
   &:focus {
      cursor: pointer;
      animation-name: push;
      animation-duration: .4s;
      animation-timing-function: linear;
      animation-iteration-count: 1;
   }
`;

export default WordList;
