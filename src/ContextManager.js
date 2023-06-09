import { Outlet } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import useFetch from "./useFetch";
import Navbar from "./NavBar";
const ContextManager = (props) =>{
    const { type} = props;
    const { data: foodData, isPending } = useFetch({ url:"https://jslester.com/food/server", skip: type !== 'Food' });
    const data = foodData ? foodData: '';
    return (
        <div>
            <Navbar></Navbar>
            <div className="Body">
            {isPending && (
                    <Oval
                    height="80"
                    width="80"
                    ariaLabel="loading"
                    color="red"
                    visible={true}
                    secondaryColor="gray"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                    />
                )}
                <Outlet context={{data}}></Outlet>
                </div>
        </div>
    )
}
export default ContextManager;