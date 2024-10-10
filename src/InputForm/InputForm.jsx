
import { useState , useReducer} from 'react'
import postsReducer from '../Reducer/ReducerTtodo';
import IsnotEdit from '../Not_edit/NotEdit';
import ToEdit from '../ToEdit/ToEdit';
import PropTypes from 'prop-types';


export default function Input({myposts}){

    const [posts , dispatch] = useReducer(postsReducer , myposts);
    const [content_value , setContentValue] = useState('');

    const handleChange = (e) => {
        (e.target.value !== '') && setContentValue(e.target.value);
    }

    const handleCreate = () => {

        const newpost = {
          id : self.crypto.randomUUID() , 
          content : content_value , 
          likes : 0 ,
          editable : false               
        };
    
        dispatch({
          type : 'add todo' , 
          post : newpost
        });
        setContentValue('')
      }

      const handleSort = () => {
        dispatch({
          type : 'sort' 
        })
      }
    return(
        <div>
            <button onClick={handleSort}>Sort</button><br/>
            <label htmlFor="input">
              Create your post:

          </label>
          <input name="input" id="input" type="text" onChange={handleChange} value={content_value}/>
          <button onClick={handleCreate}>Create</button>
          <ul>
              {
                posts.length > 0 && 
                posts.map(
                  post => {
                      return (<li key={post.id}> 
                              <p>Likes : {post.likes}</p>
                              {  (post.editable === false) ? 

                                <IsnotEdit post={post} dispatch={dispatch}/>
                                :
                                
                                <ToEdit post={post} dispatch={dispatch} />
                              }
                              
                            </li>);
                  }
                )
              }
          </ul>
        </div>
    );
}

Input.propTypes = {
        myposts : PropTypes.array.isRequired
}