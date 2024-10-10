
import { useState} from 'react'
import PropTypes from 'prop-types';

export default function ToEdit({post , dispatch}){

    const [edit_post , setEditPost] = useState('')

    const handleSave = (postId) => {

        
        dispatch({
          type : 'save' , 
          id : postId , 
          post : edit_post
        })
      }

      const handleDelete = (postId) => {
        dispatch({
          type : 'delete todo' , 
          id : postId
        })
    }
    const handleChangePost = (e) => {
        (e.target.value) && setEditPost(e.target.value)
      }

    return(
        <div>
            <input name="input" id="input" type="text" onChange={handleChangePost}/>
            <button onClick={() => handleSave(post.id)}>Save</button><br/>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
                                
        </div>
    );
}

ToEdit.propTypes = {
    post : PropTypes.object.isRequired , 
    dispatch : PropTypes.func.isRequired
}