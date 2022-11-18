import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem1, deleteItem, updateName,
  addItem2, deleteItem2, updateName2 } from "./redux/dashboard/slice";

function App() {
  const dispatch = useDispatch();
  const List = useSelector((state) => state.items.value);
  const List2 = useSelector((state) => state.SecondItems.value);


  const [secName, setSecName] = useState("");
  const [Name, setName] = useState("");

  const [newSecName, setNewSecName] = useState("");
  const [newName, setNewName] = useState("");

  return (
    <div className="App">
      <div className="">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addItem2({
                id: List[List.length - 1].id + 1,
                name: Name,
              })
            );
          }}
        >
          {" "}
          New item1
        </button>
      </div>
      <div className="">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setSecName(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addItem1({
                id: List[List.length - 1].id + 1,
                name: secName,
              })
            );
          }}
        >
          {" "}
          New item1
        </button>
      </div>
      <div className="">
        {List.map((item) => {
          return (
            <div>
              <h1> {item.name}</h1>
              <input
                type="text"
                placeholder="New name..."
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateName({ id: item.id, name: newName })
                  );
                }}
              >
                {" "}
                Update
              </button>
              <button
                onClick={() => {
                  dispatch(deleteItem({ id: item.id }));
                }}
              >
                Delete item
              </button>
            </div>
          );
        })}
      </div>
      <div className="">
        {List2.map((item) => {
          return (
            <div>
              <h1> {item.name}</h1>
              <input
                type="text"
                placeholder="New name..."
                onChange={(event) => {
                  setNewSecName(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateName2({ id: item.id, name: newSecName })
                  );
                }}
              >
                {" "}
                Update
              </button>
              <button
                onClick={() => {
                  dispatch(deleteItem2({ id: item.id }));
                }}
              >
                Delete item
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
