import React from "react";
import TitleText from "../atoms/TiteText/TitleText";
import Card from "../Card/Card";

const ArchiveNotes = ({ data, deleteItem, moveItem }) => {
  const archiveData = data.filter((item) => item.archived === true);
  return (
    <>
      <TitleText text="Catatan Arsip" />
      {archiveData.length !== 0 && data.length !== 0 ? (
        <Card data={archiveData} deleteItem={deleteItem} moveItem={moveItem} />
      ) : (
        <p>Tidak ada data tersedia</p>
      )}
    </>
  );
};

export default ArchiveNotes;
