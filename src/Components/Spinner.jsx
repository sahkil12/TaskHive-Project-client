import SyncLoader from "react-spinners/SyncLoader";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-[70vh]">
      <SyncLoader color="#0e29de" margin={5} size={15} />
    </div>
  );
};

export default Spinner;
