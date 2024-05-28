import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
    useEffect(()=>{
        let date =  new Date()
        setSearchValue({dateIn:["0"+date.getDate()+"/"+"0"+date.getMonth()+"/"+date.getFullYear()]})
    },[])

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
                style={{ color: "#667085" }}
                placeholder="Địa điểm"
                type="text"
                icon="fa-solid fa-magnifying-glass" 
                nameInput="result"
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                />
            <BoxInput
                style={{ color: "#667085" }}
                placeholder="Ngày nhận phòng"
                type="button"
                icon="fa-solid fa-calendar-days"
                nameInput="dateIn"
                value= {searchValue.dateIn}
                onChange={handleSearch}
            />
            <BoxInput
                style={{ color: "#667085" }}
                placeholder="Ngày trả phòng"
                type="date"
                icon="fa-solid fa-calendar-days"
                nameInput="dateOut"
                onChange={handleSearch}
            />
            <div className="flex items-center">
                <button className=" bg-cyan-200 flex items-center justify-center h-fit w-fit bottom font-bold">Tìm kiếm</button>
            </div>
        </div>
    );
}
export default Search;