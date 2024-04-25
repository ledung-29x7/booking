import resort01 from "../../../image/resorts/resort01.jpg";
import resort01a from "../../../image/resorts/resort01a.jpg";
import resort01b from "../../../image/resorts/resort01b.jpg";
import resort01c from "../../../image/resorts/resort01c.jpg";
import resort01d from "../../../image/resorts/resort01d.jpg";

function HaLongresorts({src,titleBlog,info,timeUp}){
    return(
        <div className="w-96 flex flex-col gap-5 box">
            <h1>FLC Grand Hạ Long</h1>
            <img className="img-article" src={resort01}></img>
            <p>FLC Grand Hạ Long, các tòa căn hộ khách sạn đẳng cấp 5 sao tọa lạc trên đỉnh đồi trung tâm thành phố. Đây là nơi đẹp nhất để chiêm ngưỡng trọn vẹn kỳ quan thiên nhiên Vịnh Hạ Long. Sở hữu những tiện ích đẳng cấp hàng đầu như sân golf 18 hố dạng links, trung tâm hội nghị quốc tế 1500 chỗ, bể bơi bốn mùa 1000m2 và Skybar view vịnh cao nhất thành phố.</p>
            <p>Địa chỉ: Đường Nguyễn Văn Cừ, phường Hồng Hải, Thành phố Hạ Long</p>
            <img className="img-article" src={resort01a}></img>
            <img className="img-article" src={resort01b}></img>
            <p>FLC Grand Hotel Hạ Long là khách sạn 5 sao duy nhất tại Quảng Ninh sở hữu phòng tổng thống với tiêu chuẩn an ninh hàng đầu, sảnh tiếp đón biệt lập, đầy đủ tiện nghi và dịch vụ.</p>
            <img className="img-article" src={resort01c}></img>
            <p>Nhà hàng Bamboo với không gian đậm chất Trung Hoa thanh lịch là nơi thực khách khám phá tinh hoa ẩm thực Hồng Kông truyền thống với đa dạng những món ăn chuẩn vị. Bên cạnh đó, quý khách có thể nâng tầm trải nghiệm với các phòng riêng có nhân viên phục vụ hay tìm kiếm sự mới lạ trong những set menu phong cách Việt Nam.</p>
            <img className="img-article" src={resort01d}></img>
            <p>Bể bơi bốn mùa trong nhà mang đến không gian bơi lội luôn mát mẻ về mùa hè, ấm nóng về mùa đông. Bạn hoàn toàn yên tâm vì nước được bổ sung, thay mới hàng ngày và không sử dụng hóa chất gây hại làm trong nước nên có thể thỏa thích ngâm mình và bơi lội nhiều giờ liên tục mà không sợ bị hư hại da, tóc.</p>
        </div>
    );
}
export default HaLongresorts;