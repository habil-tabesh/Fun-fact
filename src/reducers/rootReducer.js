const initState = {
    posts: [
        {id: '1', title: 'Elon made a video game', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum quibusdam tenetur, laudantium nemo error dolor magnam molestiae, aliquam impedit, eius magni? Numquam quasi nobis eveniet earum rem. Pariatur, necessitatibus.'

        },

        {id: '2', title: 'Elon made Tesla', body: ' Quia harum quibusdam tenetur, laudantium nemo error dolor magnam molestiae, aliquam impedit, eius magni? Numquam quasi nobis eveniet earum rem. Pariatur, necessitatibus.'

        },

        {id: '3', title: 'Elon made space-X', body: 'nemo error dolor magnam molestiae, aliquam impedit, eius magni? Numquam quasi nobis eveniet earum rem. Pariatur, necessitatibus.'

        },
        {id: '4', title: 'Elon became the richest man ', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum quibusdam tenetur, laudantium nemo error dolor magnam molestiae, aliquam impedit, eius magni? Numquam quasi nobis eveniet earum rem. Pariatur, necessitatibus.'

        },

        {id: '5', title: 'A hacker tracked his private jet', body: ' Quia harum quibusdam tenetur, laudantium nemo error dolor magnam molestiae, aliquam impedit, eius magni? Numquam quasi nobis eveniet earum rem. Pariatur, necessitatibus.'

        },

        {id: '6', title: 'Elon made Tesla', body: 'nemo error dolor magnam molestiae, aliquam impedit, eius magni? Numquam quasi nobis eveniet earum rem. Pariatur, necessitatibus.'

        },

    ]
}

const rootReducer = (state = initState, action) => {
    
        if(action.type === 'DELETE_POST'){
            let newPosts = state.posts.filter(post=>{
                return action.id !== post.id
            });
            return {
                ...state,
                posts : newPosts
            }
        }




return state;
}


export default rootReducer
