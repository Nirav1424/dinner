import React from 'react'
import Menu from "./components/menuApi";


const Buttons = ({ setMenuData, menuList }) => {

    const filterItem = (cat) => {

        if (cat === 'All') {
            setMenuData(Menu);
        }
        else {
            const updetedList = Menu.filter((currentEle) => {
                return currentEle.category === cat;
            });
            setMenuData(updetedList);
        }
    }

    return (
        <> <div className="btn-group my-3 mx-4 "  aria-label="Basic outlined example">
            {
                menuList.map((currentEle) => {
                    return (
                        <button type="button" className="btn btn-outline-success"
                            onClick={() => filterItem(currentEle)}>
                            {currentEle}
                        </button>
                    );
                })
            }
        </div>
        </>
    )
}
export default Buttons;
