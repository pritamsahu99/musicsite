import React, { useState } from 'react'
import NavBar from './NavBar'
import SongCards from './SongCards'

const SongPage = () => {
    const data = [
        {image: 'https://th.bing.com/th/id/OIP.pxpP8V-JxlrLM-mKi_pTnAAAAA?w=157&h=176&c=7&r=0&o=5&dpr=1.5&pid=1.7', songName: 'O Saathi', songURL:"../src/assets.O Maahi - Dunki.mp3", artistName: 'Arijit Singh', movieName: 'SHAAB', added: false},
        {image: 'https://www.pagalworld.com.cm/siteuploads/thumb/sft129/64052_4.jpg', songName: 'Baller', songURL:"../src/assets.O Maahi - Dunki.mp3", artistName: 'Shubh', movieName: 'BALLER', added: false},
        {image: 'https://mastinew.com/siteuploads/thumb/sft76/37510_resize2x_200x200.webp', songName: 'Satranga', songURL:"../src/assets.O Maahi - Dunki.mp3", artistName: 'Arijit Singh', movieName: 'ANIMAL', added: false},
        {image: 'https://mastinew.com/siteuploads/thumb/sft77/38215_resize2x_200x200.webp', songName: 'O Maahi', songURL:"../src/assets.O Maahi - Dunki.mp3", artistName: 'Arijit Singh', movieName: 'DUNKI', added: false},
        {image: 'https://mastinew.com/siteuploads/thumb/c/677_resize2x_200x200.webp', songName: 'Tum Hi Ho', songURL:"../src/assets.O Maahi - Dunki.mp3", artistName: 'Arijit Singh', movieName: 'AASHIQUI 2', added: false},
        {image: 'https://mastinew.com/siteuploads/thumb/c/5718_resize2x_200x200.webp', songName: 'King Shit', songURL:"../src/assets.O Maahi - Dunki.mp3", artistName: 'Shubh', movieName: 'LEO', added: false},
        {image: 'https://mastinew.com/siteuploads/thumb/c/5718_resize2x_200x200.webp', songName: 'Nain Tere', songURL:"../src/assets.O Maahi - Dunki.mp3", artistName: 'Shubh', movieName: 'LEO', added: false},
        {image: 'https://mastinew.com/siteuploads/thumb/sft67/33383_resize2x_200x200.webp', songName: 'Naa Ready', songURL:"../src/assets.O Maahi - Dunki.mp3", artistName: 'Anirudh', movieName: 'LEO', added: false},
        {image: 'https://mastinew.com/siteuploads/thumb/sft2/580_resize2x_200x200.webp', songName: 'Dhokha', songURL:"../src/assets.O Maahi - Dunki.mp3", artistName: 'Arijit Singh', movieName: 'DHOKHA', added: false},
        {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFp0ZqMSFdAwn__I2DS_iFGIuWkq0QozWlHw&usqp=CAU', songName: 'Cheques', songURL:"../src/assets.O Maahi - Dunki.mp3", artistName: 'Shubh', movieName: 'CHEQUES', added: false},
    ];
    const [songData, setSongData] = useState(data);
    const addFav = (index) => {
        setSongData((prev)=>{
            return prev.map((items, itemIndex)=>{
                if(itemIndex === index) return {...items, added: !items.added}
                return items;
            })
        })
    };

  return (
    <>
      <NavBar data={songData}/>
    <div style={{minHeight: 'calc(100vh - 6rem)'}} className='justify-center bg-teal-50 mt-24 flex flex-wrap whitespace-nowrap gap-8 px-12 py-4 overflow-hidden'>
        {
            songData.map((obj, index) => (
            <SongCards key={index} data={obj} index={index} addFav={addFav}/>
            ))
        }
    </div>
    </>
    
  )
}

export default SongPage
