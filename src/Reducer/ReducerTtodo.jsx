
export default function postsReducer(posts , action){
        
    
    switch(action.type){
        
        case 'add todo' :

            return [
                ...posts , action.post
            ]
        case 'delete todo' :
            return  posts.filter(item => item.id !== action.id)                                                                                       
        case 'sort' :
            return [...posts].sort( (a,b) => a.likes-b.likes)
        case 'like' : 
            return posts.map(item => {
                if(item.id === action.id){
                    return {
                        ...item , likes : item.likes+1
                    }
                }else{
                    return item
                }
            })
        case 'dislike' :
            return posts.map(item => {
                if(item.id === action.id){
                    return {
                        ...item , likes : item.likes-1
                    }
                }else{
                    return item
                }
            })
        case 'save' : 
            return posts.map(item => {
                if(item.id === action.id){
                    return {
                        ...item , content : action.post , editable : false
                    }
                }else{
                    return item;
                }
            })
            case 'edit' : 
            return posts.map(item => {
                if(item.id === action.id){
                    return {
                        ...item , editable : true
                    }
                }else{
                    return item;
                }
            })
        default : {
            throw new Error('unknown action: '+action.type);
        }
    }
        
}