import Blog from "../../componet/thingsToDoComponets/blog";
import Blog02 from "../../componet/thingsToDoComponets/blog02";
import Blog03 from "../../componet/thingsToDoComponets/blog03";
import Blog04 from "../../componet/thingsToDoComponets/blog04";
import Blog05 from "../../componet/thingsToDoComponets/blog05";

function ThingsToDo() {
    return (
        <div className=" containerr py-20">
            <h1 className=" text-4xl font-bold" style={{textAlign: "center"}}>Khám Phá các điểm du lịch và cập nhật tin tức mới</h1>
            <br></br>
            <img className="icon-border" src="./icon/heading-border.png"/>
            <div className="mt-14">
                <Blog src="https://minio.fares.vn/mixivivu-dev/tour/blog/images/apbb39vj3e99sczz.webp"
                    titleBlog="Top 5 resort nổi tiếng ở Hạ Long"
                    info="Xem tiếp >>"
                    timeUp="06/05/2024"
                />
            </div>
            <div className="mt-14">
                <Blog02 src="image/travel/hanoitravel01.jpg"
                    titleBlog="23 địa điểm tham quan du lịch ở Hà Nội hấp dẫn nhất (P1)"
                    info="Xem tiếp >>"
                    timeUp="06/05/2024"
                />
            </div>
            <div className="mt-14">
                <Blog03 src="image/specialfood/hnsfood01.jpg"
                    titleBlog="10 món ăn đặc sản Hà Nội đậm đà hương vị Thủ đô"
                    info="Xem tiếp >>"
                    timeUp="07/05/2024"
                />
            </div>
        </div>
    );
}
export default ThingsToDo;