import React from "react"
import "./Friends.css"

export default ({ friend }) => {
    const { deleteFriend } = useContext(FriendContext)
    return (
      <section className="friend">

        <h3 className="friend__name">{friend.user.userName}</h3>

        <button onClick={() => { deleteFriend(friend) }}>Delete Freind</button>

      </section>
    );
  };