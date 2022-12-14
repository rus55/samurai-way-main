import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {PostType} from '../../../redux/state';

type MyPostsPropsType  = {
    posts: PostType[]
    newPostText: string
    updateNewPostText: (newText: string) => void
    addPost: () => void
}
const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        if(newPostElement.current){
            props.updateNewPostText(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts