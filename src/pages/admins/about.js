//import
import React from "react";
import ArticleBox from "../../componet/otherComponets/articleBox";

function About () {
    return (
        <div>
            <div className="banner">
                {/*Change the video depending on the occasion. The first one will be used on non-holiday days.*/}
                <video className="home-bn-video" src="https://minio.fares.vn/mixivivu-dev/video/Mixivivuduthuyen.mp4" autoPlay muted playsInline loop></video>
                {/*<video className="home-bn-video" src="../video/Cartoon Network soidutS VHS intro.mp4" autoPlay muted playsInline loop></video>*/}    
            </div>
            <h1 style={{fontFamily: "Bahnschrift", fontSize: "50px", textAlign: "center"}}>Về chúng tôi</h1>
            <div className="containerr flex flex-col gap-10 px-8 py-20">
                <ArticleBox
                    Title="Công ty TNHH Chung Dũng"
                    Details="Công ty được thành lập vào năm 2024 bởi một nhóm người có niềm đam mê du lịch, ưa khám phá. Chúng tôi đã cùng nhau xây dựng một website – nơi mà khách hàng sẽ dễ dàng lựa chọn cho mình cũng như những người thân yêu chuyến nghỉ dưỡng đáng nhớ. Mixi Vivu chọn lọc các du thuyền, khách sạn và liên kết với các hãng hàng không nhằm cung cấp những dịch vụ đa dạng và tốt nhất cho du khách."
                />
                <ArticleBox
                    Title="Sản phẩm"
                    Details="..."
                />
                <ArticleBox
                    Title="Tại sao lại chọn chúng tôi?"
                    Details="Chúng tôi mong muốn du khách tận hưởng các dịch vụ du lịch chất lương bằng sự trải nghiệm thực tế của chính đội ngũ Chung Dũng. Các video về du thuyền, khách sạn hay những chuyến bay mà chúng tôi đã ghi lại cũng sẽ được chúng tôi giới thiệu tới du khách. Chính từ những hình ảnh này, quý khách có thể chọn lựa cho mình hay gia đình, bạn bè, đồng nghiệp những chuyến đi ý nghĩa nhất. Chúng tôi chắc chắn sẽ mang lại cho du khách những kỳ nghĩ đáng nhớ."
                />
            </div>
        </div>
    );
}
export default About;