import React, { useEffect, useState } from "react";
import ActiveNotes from "./components/ActiveNotes/ActiveNotes";
import ArchiveNotes from "./components/ArchiveNotes/ArchiveNotes";
import FormNotes from "./components/FormNotes/FormNotes";
import Navbar from "./components/Navbar/Navbar";
import "./styles/style.css";
import { getInitialData } from "./utils";

function App() {
  const [data, setData] = useState(getInitialData());
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  const deleteItem = (id) => {
    const updatedArray = data.filter((item) => item.id !== id);
    setData(updatedArray);
    setResultSearch(updatedArray);
  };

  const archiveItem = (id) => {
    const updatedArray = data.map((item) =>
      item.id === id ? { ...item, archived: true } : item
    );
    setResultSearch(updatedArray);
    setData(updatedArray);
  };

  const moveItem = (id) => {
    console.log("clicked");
    const updatedArray = data.map((item) =>
      item.id === id ? { ...item, archived: false } : item
    );
    setResultSearch(updatedArray);
    setData(updatedArray);
  };
  useEffect(() => {
    const updatedArray = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setResultSearch(updatedArray);
  }, [search, data]);

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <div className="note-app__body">
        <FormNotes data={data} setData={setData} />
        <ActiveNotes
          data={resultSearch}
          setData={setData}
          deleteItem={deleteItem}
          archiveItem={archiveItem}
        />
        <ArchiveNotes
          data={resultSearch}
          setData={setData}
          deleteItem={deleteItem}
          moveItem={moveItem}
        />
      </div>
    </div>
  );
}

export default App;
