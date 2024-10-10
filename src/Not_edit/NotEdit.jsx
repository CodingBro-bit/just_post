import PropTypes from 'prop-types';


export default function IsnotEdit({post , dispatch}){
  

    const handleDelete = (postId) => {
        dispatch({
          type : 'delete todo' , 
          id : postId
        })
    }
    
    const handleIncrease = (postId) => {
      
      dispatch({
        type : 'like' , 
        id : postId
      })
    }
    
    const handleDecrease = (postId) => {
      dispatch({
        type : 'dislike' , 
        id : postId
      })
    }
    
    
    
    const handleEdit = (postId) => {
      
     
      dispatch({
        type : 'edit' , 
        id : postId
      })
      
    }
    
    return(
        <div>
            <h3>{post.content}</h3>
            <button onClick={() => handleEdit(post.id)}>Edit</button><br/>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            <button onClick={() => handleIncrease(post.id)}>Like</button>
            <button onClick={() =>handleDecrease(post.id)}>Dislike</button>
        </div>
    );

}

IsnotEdit.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        editable: PropTypes.bool.isRequired,
      }).isRequired, 
    dispatch : PropTypes.func.isRequired
}