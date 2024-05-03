import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BoxInput from './boxInput';

function Search() {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchValue,setSearchValue] = useState({
        result:"",
        dateIn: '',
        dateOut: ''
    })

    const handleSearch = (e) => {
        setSearchValue({...searchValue, [e.target.name]: e.target.value});
    }

    // xử lý ngày tháng
    const handleDate = () =>{
        let date =  new Date()

    }

    const handleKeyDown = (e) =>{
        if(e.key === "Enter")  {
            try {
                e.preventDefault();
                if(searchValue.trim() !== ""){
                    let queryPrams = new URLSearchParams(location.search)
                    queryPrams.set("hotel",searchValue)
                    navigate({
                        pathname: "/hotel",
                        search: queryPrams.toString()
                    })
                    setSearchValue("")
                }else{
                    navigate({
                        pathname: "/",
                        search : " "
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <div className=" flex gap-5 ">
            <BoxInput
                placeholder="Bạn muốn đi đâu? "
                type="text"
                icon="fa-solid fa-magnifying-glass" 
                nameInput="result"
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                />
            <BoxInput
                placeholder="Ngày nhận phòng"
                type="date"
                icon="fa-solid fa-calendar-days"
                nameInput="dateIn"
                value= {new Date().getDate}
                onChange={handleSearch}
            />
            <BoxInput
                placeholder="Ngày trả phòng"
                type="date"
                icon="fa-solid fa-calendar-days"
                nameInput="dateOut"
                onChange={handleSearch}
            />
            <div className="flex items-center">
                <button className=" bg-cyan-200 flex items-center justify-center h-fit w-fit bottom font-bold">Search</button>
            </div>
        </div>
    );
}
export default Search;