import React, { useEffect, useState } from "react";
import { useRef } from "react";
import TitleText from "../atoms/TiteText/TitleText";

const FormNotes = ({ data, setData }) => {
  const [chara, setChara] = useState(50);
  const [modifiedData, setModifiedData] = useState({
    id: data[data?.length - 1]?.id + 1,
    title: "",
    body: "",
    createdAt: new Date(),
    archived: false,
  });

  function currentDateString(currentDate) {
    const year = currentDate.getUTCFullYear();
    const month = String(currentDate.getUTCMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getUTCDate()).padStart(2, "0");
    const hours = String(currentDate.getUTCHours()).padStart(2, "0");
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getUTCSeconds()).padStart(2, "0");
    const milliseconds = String(currentDate.getUTCMilliseconds()).padStart(
      3,
      "0"
    );

    const dateString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
    return dateString;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setModifiedData((prev) => ({
      ...prev,
      id: modifiedData.id + 1,
    }));
    const obj = modifiedData;
    obj.createdAt = currentDateString(new Date());
    const arr = [];
    arr.push(obj);
    setData((prev) => [...prev, ...arr]);
    setModifiedData({ title: "", body: "" });
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= 50) {
      setModifiedData((prev) => ({ ...prev, title: inputValue }));
      setChara(50 - inputValue.length);
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div className="note-input">
        <TitleText text="Buat Catatan" />
        <form action="" onSubmit={handleSubmit} className="form">
          <p className="note-input__title__char-limit">
            Sisa karakter: {chara}
          </p>
          <input
            type="text"
            className="note-input__title"
            placeholder="Tulis judulmu disini"
            value={modifiedData.title}
            onChange={(e) => handleChange(e)}
          />
          <textarea
            className="note-input__body"
            placeholder="Tulis catatanmu disini"
            value={modifiedData.body}
            onChange={(e) =>
              setModifiedData((prev) => ({ ...prev, body: e.target.value }))
            }
          />
          <button type="submit">Buat Catatan</button>
        </form>
      </div>
    </div>
  );
};

export default FormNotes;
