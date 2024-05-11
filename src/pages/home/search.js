import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useStore } from '../../store/contexts';
import { actions } from '../../store/action';
import BoxInput from './boxInput';

function Search() {
    const location = useLocation();
    const navigate = useNavigate();
    const [, dispatch] = useStore();
    const [searchValue, setSearchValue] = useState({
        city: "",
        checkinDate: '',
        checkoutDate: ''
    })

    const handleSearch = (e) => {
        setSearchValue({ ...searchValue, [e.target.name]: e.target.value });
    }

    const handleKeyDown = (e) => {
        try {
            e.preventDefault();
            if (searchValue.city.trim() !== "") {
                let queryPrams = new URLSearchParams(location.search)
                queryPrams.set("search", searchValue.city + searchValue.checkinDate + searchValue.checkoutDate)
                dispatch(actions.GetSearch(searchValue))
                navigate({
                    pathname: "/hotel",
                })
            } else {
                navigate({
                    pathname: "/",
                    search: ""
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    // xử lý ngày tháng
    useEffect(() => {
        let date = new Date()
        setSearchValue(
            {
                checkinDate: date.getFullYear() + "-" + "0" + (date.getMonth() + 1) + "-"  + date.getDate(),
                checkoutDate: date.getFullYear() + "-" + "0" + (date.getMonth() + 1) + "-" + (date.getDate() + 3)
            })
    }, [])


    return (
        <form className=" flex gap-5 " onSubmit={handleKeyDown}>
            <BoxInput
                style={{ color: "#667085" }}
                placeholder="Bạn muốn đi đâu? "
                type="text"
                icon="fa-solid fa-magnifying-glass"
                nameInput="city"
                value={searchValue.city}
                onChange={handleSearch}
            />
            <BoxInput
                style={{ color: "#667085" }}
                placeholder="Ngày nhận phòng"
                type="button"
                icon="fa-solid fa-calendar-days"
                nameInput="checkinDate"
                value={searchValue.checkinDate}
                onChange={handleSearch}
            />
            <BoxInput
                style={{ color: "#667085" }}
                placeholder="Ngày trả phòng"
                type="button"
                icon="fa-solid fa-calendar-days"
                nameInput="checkoutDate"
                value={searchValue.checkoutDate}
                onChange={handleSearch}
            />
            <div className="flex items-center">
                <button className=" bg-cyan-200 flex items-center justify-center h-fit w-fit bottom font-bold">Search</button>
            </div>
        </form>
    );
}
export default Search;