import React, { useRef }  from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import{ useDispatch } from 'react-redux';
import { db } from './firebase';
import {
   collection,
   doc,
   getDoc,
   getDocs,
   addDoc,
   deleteDoc,
} from 'firebase/firestore';

//COMPONENTS
import { Store } from './redux/modules/Store';
import { createWord, addWordFB } from './redux/modules/Store';

const Add = (props) => {
   const word = React.useRef(null);
   const description = React.useRef(null);
   const example = React.useRef(null);

   const history = useHistory();
   const dispatch = useDispatch();
    
   const addWordList = () => {
      dispatch(
         addWordFB({
            word: word.current.value,
            description: description.current.value,
            example: example.current.value,
         })
      );

         // console.log('WORD CURRENT VALUE?'word.current.value)
   }

return (
   <ContainerAdd>
      <Card>
         <CardTitle>Word: </CardTitle>
         <InputTag>
            <Input ref={word} type="text" />
         </InputTag>

         <CardTitle>Description: </CardTitle>
         <InputTag>
            <Input ref={description} type="text" />
         </InputTag>

         <CardTitle>Example: </CardTitle>
         <InputTag>
            <Input2 ref={example} type="text" />
         </InputTag>
      </Card>


      
      <ButtonAdd
         onClick={() => {
            dispatch(addWordList);
            history.push('/');
         }}
      >
         ADD
      </ButtonAdd>
   </ContainerAdd>
);
}
const ContainerAdd = styled.div`
   margin: 5em auto auto auto;
   padding: 2em;
   width: 500px;
   height: 330px;
   background: transparent;
   border: 1px solid #4900ff;
   border-radius: 5px;
`;

const Card = styled.div`
   margin: auto;
`;

const CardTitle = styled.h3`
   color: #4900ff;
`;
const InputTag = styled.div`
   border-bottom: 1px solid #4900ff;
`;

const Input = styled.input`
   max-width: 500px;
   width: 95%;
   height: 3vh;
   border: none;
   outline: none;
`;
const Input2 = styled.input`
   max-width: 500px;
   width: 95%;
   height: 3vh;
   border: none;
   outline: none;
`;
const ButtonAdd = styled.button`
   float: right;
   position: relative;
   margin: 5px;
   padding: 5px;
   top: 30px;
   width: 70px;
   height: 27px;
   background-color: transparent;
   border: 1px solid #4900ff;
   border-radius: 5px;
   color: #4900ff;
   &:hover {
      cursor: pointer;
      transform: translate(0%, -20%);
      transition: 0.3s ease-out;
   }
`;

export default Add;