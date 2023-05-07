const myLuckyNumber = [1, 2, 3, 4, 5];

const myLuckyString = myLuckyNumber.map((n) => n.toString());

type listOfFriend = {
  friend1: string;
  friend2: string;
  friend3: string;
  friend4: string;
  friend5: string;
};

type listOfFriendReadOnly = {
  readonly [key in keyof listOfFriend]: listOfFriend[key];

  //   friend1: string
  //   friend2: string
  //   friend3: string
  //   friend4: string
  //   friend5: string
};

const friendList: listOfFriend = {
  friend1: "a",
  friend2: "b",
  friend3: "c",
  friend4: "d",
  friend5: "e",
};

friendList.friend1 = "nayim";
