import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function EatNSplit() {
  const [showFormAddFriend, setshowFormAddFriend] = useState(false);
  const [friendList, setFriendList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowFormAddFriend() {
    setshowFormAddFriend((status) => !status);
  }

  function handleAddFriend(newFriend) {
    setFriendList((friends) => [...friends, newFriend]);
    setshowFormAddFriend(false);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend?.id ? null : friend
    );
    setshowFormAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriendList((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
    console.log(value);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friendList}
          handleSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showFormAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onButtonClick={handleShowFormAddFriend}>
          {showFormAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, handleSelectedFriend, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onFriendSelect={handleSelectedFriend}
          isSelected={selectedFriend?.id === friend?.id}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onFriendSelect, isSelected }) {
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && (
        <p className="">You and {friend.name} are even</p>
      )}

      <Button onButtonClick={() => onFriendSelect(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    e.preventDefault();

    if (!friendName || !friendImage) return;

    const newID = crypto.randomUUID();
    const newFriend = {
      id: newID,
      name: friendName,
      image: `${friendImage}?=${newID}`,
      balance: 0,
    };

    console.log(newFriend);
    onAddFriend(newFriend);
    setFriendName("");
    setFriendImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🫂 Friend Name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />

      <label>🖼️ Image URL</label>
      <input
        type="text"
        value={friendImage}
        onChange={(e) => setFriendImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill | !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with a {selectedFriend.name}</h2>

      <label>💵 Bill Value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧒 Your expenses</label>
      <input
        type="number"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>👭 {selectedFriend.name}'s expense</label>
      <input type="number" value={paidByFriend} disabled />

      <label>💸 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

function Button({ children, onButtonClick }) {
  return (
    <button className="button" onClick={onButtonClick}>
      {children}
    </button>
  );
}
