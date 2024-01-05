import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
        <img src="https://mcdn.coolmate.me/image/March2023/meme-meo-cute-hai-huoc-1297_421.jpg" alt="" />
        <div className="userChatInfo">
          <span>Meo</span>
        </div>
      </div>
    </div>
  )
}

export default Search