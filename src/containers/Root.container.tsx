import { Outlet } from "react-router-dom"

const RootContainer = () => {
    return (
        <div className="h-full flex flex-col md:flex-col-reverse">
            <div className="flex-1">
                <Outlet />
            </div>
            <div className="border flex text-center">
                <div className="hidden md:block">Logo</div>
                <div className="flex-1 flex md:flex-row-reverse">
                    <div className="flex-1 md:hidden py-3 cursor-pointer hover:bg-gray-50"><i className="fad fa-home" />{"  "}Home</div>
                    <div className="flex-1 md:flex-initial md:px-5 py-3 cursor-pointer hover:bg-gray-50"><i className="fad fa-blog" />{"  "}Blog</div>
                    <div className="flex-1 md:flex-initial md:px-5 py-3 cursor-pointer hover:bg-gray-50"><i className="fad fa-diagram-project" />{"  "}Project</div>
                    <div className="flex-1 md:flex-initial md:px-5 py-3 cursor-pointer hover:bg-gray-50"><i className="fad fa-envelope-open-text" />{"  "}Contact</div>
                </div>
            </div>
        </div>
    );
}

export default RootContainer