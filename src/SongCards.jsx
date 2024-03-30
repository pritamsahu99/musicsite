import React from 'react'
import PlayPauseButtons from './PlayPauseButton';
import SongPage from './SongPage';

const SongCards = ({data, addFav, index}) => {
    const {image, songName,  artistName, movieName, added} = data;
    // var audio = new Audio();
    const addFav = () => {
        setSongData((prev)=>{
            return prev.map((items, itemIndex)=>{
                if(itemIndex === index) return {...items, added: !items.added}
                return items;
            })
        })
    };

  return (
    
        <div className='h-[8rem] min-w-44 flex whitespace-nowrap gap-2 rounded-sm justify-center relative p-4 bg-slate-300 '>
            <div className="songCover bg-slate-400 h-20 w-20 rounded-md overflow-hidden">
                <img className='object-cover h-full w-full' src={image} />
            </div>
            <div className='h-20'>
                <h1 className="songName text-sm ">{songName}</h1>
                <h1 className="singerName text-[10px] ">{artistName}</h1>
                <h1 className="movieName text-[10px] opacity-60">From '{movieName}'</h1>
                <div className='flex cursor-pointer text-xl justify-center '>
                    <i className="ri-skip-left-line"></i>
                    <PlayPauseButtons />
                    <i className="ri-skip-right-line"></i>
                </div>
            </div>
            <div onClick={()=>{addFav(index)}} className={`addFav text-xs cursor-pointer ${added === true ? 'bg-teal-400': 'bg-teal-300'} absolute -bottom-2 flex whitespace-nowrap  px-3 py-1 rounded-full`}>
                <h6>{added === true ? 'Added': 'Add To Favourites'}</h6>
            </div>
        </div>
  )
}

export default SongCards