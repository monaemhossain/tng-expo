import { Puff } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="max-w-screen-lg mx-auto min-h-[calc(100vh-128px)] flex justify-center items-center  ">
            <Puff
                height="80"
                width="80"
                radius={1}
                color="#26262696"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loader;