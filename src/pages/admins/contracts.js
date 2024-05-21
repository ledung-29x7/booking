import React from "react";
import InfoContracts from "../../componet/otherComponets/infoContracts";

function Contracts() {
    return(
        <div>
            <h1 style={{fontFamily: "Times New Roman", fontSize: "50px", textAlign: "center"}}>Liên hệ</h1>
            <div className="containerr flex flex-col gap-10 px-8 py-20">
                <InfoContracts
                src=""
                name="Lê Chung Dũng"
                job="CEO"
                phone="024111222333"
                />
                <InfoContracts
                src=""
                name="Dương Đình Tuấn"
                job="Giám đốc"
                phone="024111222333"
                />
                <InfoContracts
                src=""
                name="Nguyễn Hồng Sơn"
                job="Giám đốc"
                phone="024111222333"
                />
                <InfoContracts
                src=""
                name="Đặng Nam Anh"
                job="Giám đốc"
                phone="024111222333"
                />
            </div>
        </div>

    );
}
export default Contracts;