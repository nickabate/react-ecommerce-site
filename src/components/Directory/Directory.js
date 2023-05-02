import DirectoryItem from "../DirectoryItem/DirectoryItem";
import catalog from "../../data/catalog.json";

import "./Directory.scss";

const Directory = () => {
  return (
    <div className="directory-container">
      {catalog.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
