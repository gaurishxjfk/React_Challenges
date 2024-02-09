import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import "./searchbar.css";
import Chip from "./Chip";
import useClickOutside from "./useClickOutside";

const usersArr = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Alice Johnson" },
  { id: 4, name: "Bob Smith" },
  { id: 5, name: "Eva Davis" },
  { id: 6, name: "Charlie Brown" },
  { id: 7, name: "Grace Wilson" },
  { id: 8, name: "Michael Lee" },
  { id: 9, name: "Olivia Turner" },
  { id: 10, name: "Daniel Miller" },
];

export interface userProp {
  id: number;
  name: string;
}

const filterArrayWithID = (arr: userProp[], id: number) =>
  arr.filter((user) => user.id !== id);
const findInArrWithID = (arr: userProp[], id: number) =>
  arr.find((user) => user.id === id);

const highlightSearchPhrase = (str: string, phrase: string) => {
  const lowerStr = str.toLowerCase();
  const lowerPhrase = phrase.toLowerCase();
  if (phrase.length > 0 && lowerStr.includes(lowerPhrase)) {
    const index = lowerStr.indexOf(lowerPhrase);
    return (
      <>
        {str.substring(0, index)}
        <b>{str.substring(index, index + phrase.length)}</b>
        {str.substring(index + phrase.length)}
      </>
    );
  }
  return str;
};

const Searchbar = () => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [users, setUsers] = useState<userProp[]>(usersArr);
  const [selectedUsers, setSelectedUsers] = useState<userProp[]>([]);
  const [searchVal, setSearchVal] = useState("");
  const [lastEle, setLastEle] = useState<userProp | null>(null);

  const isOutside = useClickOutside(inputRef);

  const onDelete = (id: number) => {
    setSelectedUsers(filterArrayWithID(selectedUsers, id));
    const selected = findInArrWithID(usersArr, id);
    if (selected) setUsers([...users, selected]);
  };

  const handleSelection = (id: number) => {
    const selected = findInArrWithID(users, id);
    if (selected) setSelectedUsers([...selectedUsers, selected]);
    setUsers(filterArrayWithID(users, id));
    inputRef.current!.focus();
  };

  const handleSeachVal = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  const removeLastUser = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      searchVal.length === 0 &&
      e.key === "Backspace" &&
      selectedUsers.length > 0
    ) {
      if (lastEle !== null) {
        setSelectedUsers(filterArrayWithID(selectedUsers, lastEle.id));
        setLastEle(null);
      } else {
        setLastEle(selectedUsers[selectedUsers.length - 1]);
      }
    }
  };

  useEffect(() => {
    function debouncedFunc() {
      console.log(searchVal);
      const findUsers = usersArr
        .filter(
          (user) => !selectedUsers.some((selUser) => selUser.id === user.id)
        )
        .filter((user) =>
          user.name.toLowerCase().includes(searchVal.toLowerCase())
        );
      setUsers(findUsers);
    }
    const timer = setTimeout(debouncedFunc, 1000);
    return () => clearTimeout(timer);
  }, [searchVal, selectedUsers]);

  return (
    <main>
      <div className="searchbar">
        <div className="serachbar-chips">
          {selectedUsers.map((user) => (
            <Chip
              key={user.id}
              name={user.name}
              icon={user.name.split("")[0]}
              onDelete={onDelete}
              id={user.id}
              lastEle={lastEle}
            />
          ))}
        </div>

        <input
          ref={inputRef}
          type="search"
          name="username"
          id="username"
          placeholder="user name"
          value={searchVal}
          onChange={handleSeachVal}
          onKeyDown={removeLastUser}
        />
        <div
          className="userList"
          style={{
            display: searchVal.length === 0 && !isOutside ? "none" : "block",
          }}
        >
          {users.length > 0 ? (
            users.map((user) => (
              <div
                key={user.id}
                tabIndex={0}
                onClick={() => handleSelection(user.id)}
                onKeyDown={(e) => e.key === "Enter" && handleSelection(user.id)}
                className="userListEl"
              >
                <div className="chip-user-icon">{user.name.split("")[0]}</div>
                <span>
                  {searchVal.length > 0
                    ? highlightSearchPhrase(user.name, searchVal)
                    : user.name}
                </span>
              </div>
            ))
          ) : (
            <div>No users to show {`:(`}</div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Searchbar;
