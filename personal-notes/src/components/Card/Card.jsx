import React from "react";
import { showFormattedDate } from "../../utils";

const Card = ({ data, deleteItem, archiveItem, moveItem }) => {
  return (
    <div className="notes-list">
      {data.map((item) => (
        <div className="note-item" key={item.id}>
          <div className="note-item__content">
            <h3 className="note-item__title">{item.title}</h3>
            <p className="note-item__date">
              {showFormattedDate(item.createdAt)}
            </p>
            <p className="note-item__body">{item.body}</p>
          </div>
          <div className="note-item__action">
            <button
              className="note-item__delete-button"
              onClick={() => deleteItem(item.id)}
            >
              Delete
            </button>
            {item.archived ? (
              <button
                className="note-item__archive-button"
                onClick={() => moveItem(item.id)}
              >
                Pindahkan
              </button>
            ) : (
              <button
                className="note-item__archive-button"
                onClick={() => archiveItem(item.id)}
              >
                Archive
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
