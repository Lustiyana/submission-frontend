import React from "react";
import TitleText from "../atoms/TiteText/TitleText";
import Card from "../Card/Card";

const ActiveNotes = ({ data, deleteItem, archiveItem }) => {
  const activeData = data.filter((item) => item.archived === false);
  return (
    <>
      <TitleText text="Catatan Aktif" />
      {activeData.length !== 0 && data.length !== 0 ? (
        <Card
          data={activeData}
          deleteItem={deleteItem}
          archiveItem={archiveItem}
        />
      ) : (
        <p>Tidak ada data tersedia</p>
      )}
    </>
  );
};

export default ActiveNotes;
