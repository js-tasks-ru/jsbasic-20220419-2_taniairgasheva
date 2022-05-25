function makeFriendsList(friends) {
  let list = document.createElement("ul");

  for (let i = 0; i < friends.length; i++) {
    let addFriend = document.createElement("li");
    addFriend.innerHTML = `${friends[i].firstName + " " + friends[i].lastName}`;
    list.appendChild(addFriend);
  }

  return list;
}
