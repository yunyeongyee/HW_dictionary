// Store.js : 변수 저장소
import { db } from '../../firebase';
import {
   collection,
   doc,
   getDoc,
   getDocs,
   addDoc,
   updateDoc,
   deleteDoc,
   getState
} from 'firebase/firestore';
   
// ACTIONS
const LOAD = 'Store/LOAD';
const CREATE = 'Store/CREATE';
const UPDATE = 'Store/UPDATE';
const DELETE = 'Store/DELETE';

const initialState = {
   list: [],
};

// ACTION CREATORS
export function loadWord(word_list) {
   return { type: LOAD, word_list };
}

export function createWord(word) {
   // console.log('CREATE ACTION');
   return { type: CREATE, word };
}

export function deleteWord(word_index){
  return {type: DELETE, word_index};
}

//MIDDLEWARES
export const loadWordFB = () => {
   return async function (dispatch) {
      const word_data = await getDocs(collection(db, 'voca')); 
      let word_list = [];
      word_data.forEach((oneWord) => {
         word_list.push({ id: oneWord.id, ...oneWord.data()});
      })
      // console.log('WORD LIST?', word_list);
      dispatch(loadWord(word_list));
   }
}

export const addWordFB = (oneWordOnly) => {
   return async function (dispatch) {
      const docRef = await addDoc(collection(db, 'voca'), oneWordOnly);
      const oneWordData = { id: docRef.id, ...docRef.data() };
      // console.log('ONE WORD DATA?', oneWordData);
      dispatch(createWord(oneWordData));
   } 
}

export const deleteWordFB = (word_id) => {
   return async function (dispatch, getState) {
      if (!word_id){
         window.alert('NO ID')
         return;
      }
      const docRef = doc(db, 'voca', word_id);
      await deleteDoc(docRef);

      const _word_list = getState().Store.list;
      const word_index = _word_list.findIndex((w)=>{
         return w.id === word_id;
      })
      dispatch(deleteWord(word_index));

   }
}

// REDUCER
//state = {}: state라는 변수에 default값을 준다.(비어있는 딕셔너리)
export default function reducer(state = initialState, action = {}) {
   switch (action.type) {
      // do reducer stuff
      case 'Store/LOAD': {
         return { list: action.word_list };
      }

      case 'Store/CREATE': {
         const new_word_list = [...state.list, action.word];
         return { list: new_word_list };
      }

      case 'Store/DELETE': {
         const new_word_list = state.list.filter((l, idx) => {
            return parseInt(action.word_index) !== idx;
         });
         return { list: new_word_list }
      }

      default:
         return state;
   }
}
