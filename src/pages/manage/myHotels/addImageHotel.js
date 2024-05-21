import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../../store/contexts";
import { actions } from "../../../store/action";
import * as apis from "../../../apis";

function AddImageHotel() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [susserfull, setSusserfull] = useState(false)
    const navigate = useNavigate()
    const [state, dispatch] = useStore();
    const { isSuccessfull } = state

    const handleFileChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    useEffect(() => {
        setSusserfull(isSuccessfull)
        setTimeout(() => {
            dispatch(actions.ModalSuccsessfull(false))
        }, 5000)
    }, [isSuccessfull])

    const handleAddImage = (e) => {
        const FetchEdit = async () => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('file', selectedImage);
            try {
                await apis.AddImage("hotel",sessionStorage.getItem("idHotel"),formData)
                    .then(res => {
                        if (res.status === 200) {
                            return (
                                navigate("/manager/myHotels"),
                                dispatch(actions.ModalSuccsessfull(true))
                            )
                        }
                    });

            } catch (error) {
                console.log(error)
            }
        }
        FetchEdit()
    }

    return (
        <div>
            <div>
                {susserfull ?
                    <div>
                        <h3>Đã Thêm khách sạn thành công</h3>
                    </div>
                    : null
                }
                <div >
                    <h3>Thêm ảnh Khách sạn của bạn </h3>
                </div>
                <form onSubmit={handleAddImage}>
                    <input
                        type="file"
                        name="image"
                        placeholder={"tên khách sạn"}
                        onChange={handleFileChange}
                        multiple
                    />
                    <label></label>
                    <button type="submit">Thêm</button>
                </form>
            </div>
        </div>
    )
}
export default AddImageHotel;