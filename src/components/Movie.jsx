import React,{ useState,useEffect} from 'react'
import axios from 'axios';
import {FaHeart, FaRegHeart, FaYoutube} from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import {db} from '../firebase'
import {arrayUnion,doc,updateDoc} from 'firebase/firestore';
import { Link } from 'react-router-dom';


const Movie = ({item}) => {

    const[like,setLike] = useState(false);
    const [saved,setSaved] = useState(false);
    const {user} = UserAuth();
    const[videos,setVideos] = useState([]);
    const url = 'https://youtube.com/watch?v';

    const movieID = doc(db,'users',`${user?.email}`)

    const saveShow = async()=>{
      if(user?.email){
        setLike(!like)
        setSaved(true)
        await updateDoc(movieID,{
          savedShows:arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path,
          })
        })
      }
      else{
        alert('Please Log In to save a movie.');
      }
    }


    let ID = `${item?.id}`;
    const requestVideos = `https://api.themoviedb.org/3/movie/${ID}/videos?api_key=e8211a812aaf96a86edf0e799c3c8e37`;
    

    useEffect(()=>{
      axios.get(requestVideos).then((response)=>{
          setVideos(response.data?.results[0]);
      })
    },[])


  return (
    <>
      <div 
       className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 whitespace-normal'>
            <img className='w-full h-auto block' 
            src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} 
            alt={item?.title}></img>
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white '>
                <p className='white-space-normal text-xs md:text-lg font-bold flex justify-center items-center h-full text-center p-4'>
                    {item?.title}
                </p>
                <Link to={`${url}=${videos?.key}`} target='_blank' >
                <p className='absolute top-4 right-4' ><FaYoutube size={20}/></p>
                </Link>
                <p onClick={saveShow}>
                    {like? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
                </p>
            </div>
            
        </div>
        
        
    </>
  )
}

export default Movie
