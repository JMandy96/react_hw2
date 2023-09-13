import { useState } from 'react';
import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai'
const LikeButton = () => {
    const [isLiked, setIsLiked] =useState(false);
    const clickLike = () => {
        setIsLiked(!isLiked)
        console.log(isLiked ? 'Unliked':'Liked')
    }

    return (
    <>
    <button onClick={clickLike}>{isLiked ? <AiTwotoneLike/> : <AiOutlineLike/>}</button>
    </>
  )
}
export default LikeButton