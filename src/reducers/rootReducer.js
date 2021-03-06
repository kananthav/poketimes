const initState = {
  posts: [
    { id: '1', title: 'Sit tempora', body: 'Amet eligendi illum in error sed. Suscipit nam nemo sunt' },
    { id: '2', title: 'Lorem ipsum', body: 'Ipsum fuga quo odit cum aliquid, assumenda dolore Aliquid natus?' },
    { id: '3', title: 'Elit eos', body: 'Adipisicing lorem inventore tempore illum laudantium. Reiciendis in corporis ea' }
  ]
}

const rootReducer = (state = initState, action) => {
  console.log('action: ', action);
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    })
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer;
