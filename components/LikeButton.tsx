import React, {useState, useEffect} from 'react'
import { MdFavorite } from 'react-icons/md'
import useAuthStore from '../store/authStore'

const LikeButton = () => {
    const [alreadyLiked, setAlreadyLiked] = useState(false)
    const {userProfile} = useAuthStore()
  return (
    <div className='gap-6'>
        <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
            {alreadyLiked ? (
                <div className=''>
                    <MdFavorite className='text-lg md:text-2xl' />
                </div>
            ): (
                <div>

                </div>
            )}
        </div>
    </div>
  )
}

export default LikeButton